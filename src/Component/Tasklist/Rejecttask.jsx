import React from 'react';

const Rejecttask = ({ Authdata }) => {
    return (
        <div className="flex-shrink-0 w-80 h-full bg-gradient-to-br from-amber-800 to-yellow-700 rounded-2xl shadow-2xl p-6 space-y-4 transition-transform hover:scale-105">
            {/* Header */}
            <div className="flex justify-between items-center">
                <span className="h-8 px-4 flex items-center bg-orange-600 text-white font-semibold rounded-lg text-xs uppercase tracking-wide shadow-md">
                    {Authdata.category}
                </span>
                <span className="text-xs font-medium text-white bg-yellow-900 px-2 py-1 rounded shadow-sm">
                    {Authdata.taskDate}
                </span>
            </div>

            {/* Task Title */}
            <h1 className="text-xl font-extrabold text-white truncate px-1">
                {Authdata.taskTitle}
            </h1>

            {/* Description */}
            <p className="px-1 text-white text-sm leading-relaxed line-clamp-3">
                {Authdata.taskDescription}
            </p>

            {/* Reject Button */}
            <div className="flex justify-end pt-2">
                <button className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl shadow-md transition-colors duration-200">
                    Reject
                </button>
            </div>
        </div>
    );
};

export default Rejecttask;
