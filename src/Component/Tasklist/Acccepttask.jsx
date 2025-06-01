import React from 'react';

const Acccepttask = ({ Authdata }) => {
    return (
        <div className="flex-shrink-0 w-80 h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl shadow-2xl p-6 space-y-4">
            {/* Header: Category and Date */}
            <div className="flex justify-between items-center">
                <span className="h-8 px-4 flex items-center bg-orange-700 text-white font-semibold rounded-lg text-xs uppercase tracking-wide shadow-md">
                    {Authdata.category}
                </span>
                <span className="text-xs font-medium text-white bg-yellow-800 px-2 py-1 rounded shadow-sm">
                    {Authdata.taskDate}
                </span>
            </div>

            {/* Task Title */}
            <h1 className="text-xl font-extrabold text-white truncate px-1">
                {Authdata.taskTitle}
            </h1>

            {/* Task Description */}
            <p className="px-1 text-white text-sm leading-relaxed line-clamp-3">
                {Authdata.taskDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
                <button className="flex-1 py-2 bg-green-600 hover:bg-green-700 transition-all duration-200 text-white text-sm font-semibold rounded-xl shadow-md">
                    Mark as Completed
                </button>
                <button className="flex-1 py-2 bg-red-500 hover:bg-red-600 transition-all duration-200 text-white text-sm font-semibold rounded-xl shadow-md">
                    Failed
                </button>
            </div>
        </div>
    );
};

export default Acccepttask;
