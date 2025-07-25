import React from 'react'

const InfoCard = ({label,icon,value,color}) => {
  return (
    <div className={`flex gap-6 p-6 rounded-2xl bg-white shadow-md shadow-gray-100 border border-gray-200/50 `}>
        <div className={`w-14 h-14 flex items-center justify-center text-[26px] text-white rounded-full ${color} drop-shadow-lg`}>{icon}</div>
        <div>
           <h6 className='text-sm text-gray-500 mb-1'>{label}</h6> 
           <span className='text-xl' style={{ fontSize: '22px' }}>{value}</span>
        </div>
    </div>
  )
}

export default InfoCard