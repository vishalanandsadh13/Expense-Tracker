import React from "react";
import { LuDownload } from "react-icons/lu";
import TransactionsInfoCard from "../Cards/TransactionsInfoCard";
import moment from "moment";    

const ExpenseList = ({ transactions, onDelete, onDownload, downloading = false }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Expense Categories</h5>
        <button 
          className="card-btn" 
          onClick={onDownload}
          disabled={downloading}
        >
            <LuDownload className="text-base" />
            {downloading ? 'Downloading...' : 'Download'}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2"> 
        {transactions.map((expense) => (
            <TransactionsInfoCard
            key={expense._id}
            title={expense.category}
            icon = {expense.icon}
            date={moment(expense.date).format("DD MMM YYYY") }
            amount={expense.amount}
            type="expense"   
            onDelete={() => onDelete(expense._id)}
            />
        ))}

      </div>
    </div>
  );
};

export default ExpenseList;
