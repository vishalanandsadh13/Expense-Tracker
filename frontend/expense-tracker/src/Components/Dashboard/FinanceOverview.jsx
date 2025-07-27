import React from "react";
import CustomPieChart from "../Charts/CustomPieChart";

const COLORS = ["#875CF5", "#FA2C37", "#FF6900"];

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  const balanceData = [
    { name: "Total Balance", value: totalBalance },
    { name: "Total Income", value: totalIncome },
    { name: "Total Expense", value: totalExpense },
  ];
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Finance Overview</h5>
      </div>
      <CustomPieChart
        data={balanceData}
        colors={COLORS}
        title="Balance"
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        showTextAnhcor
      />
    </div>
  );
};

export default FinanceOverview;
