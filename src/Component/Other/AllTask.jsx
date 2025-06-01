
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

const AllTask = ({ Authdata }) => {
    const data = useContext(AuthContext);

    return (
      <div className="p-2 sm:p-4 md:p-6 rounded-lg bg-slate-700 text-white shadow-lg overflow-x-auto w-full">
        {/* Table Header */}
        <div className="min-w-[500px] grid grid-cols-5 gap-2 bg-slate-600 mb-3 py-2 px-2 sm:py-3 sm:px-5 rounded-md font-semibold text-xs sm:text-sm uppercase tracking-wide border-2 border-white">
          <h2 className="text-center">Employee Name</h2>
          <h3 className="text-center">New Task</h3>
          <h3 className="text-center">Active Task</h3>
          <h5 className="text-center">Completed</h5>
          <h5 className="text-center">Failed</h5>
        </div>
        {/* Scrollable List */}
        <div className="min-w-[500px] space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-800">
          {data?.employees?.map((elm, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-2 bg-slate-600 py-2 px-2 sm:py-3 sm:px-5 items-center rounded-md hover:bg-slate-500 transition-all duration-200 ease-in-out border-2 border-white text-xs sm:text-sm min-w-[500px] md:min-w-0"
            >
              <h2 className="text-center break-words min-w-[80px] truncate">{elm.firstName}</h2>
              <h3 className="text-center min-w-[60px]">{elm.taskCounts?.newTask ?? 0}</h3>
              <h3 className="text-center min-w-[60px]">{elm.taskCounts?.active ?? 0}</h3>
              <h5 className="text-center min-w-[60px]">{elm.taskCounts?.completed ?? 0}</h5>
              <h5 className="text-center min-w-[60px]">{elm.taskCounts?.failed ?? 0}</h5>
            </div>
          ))}
        </div>
      </div>
    )
}

export default AllTask