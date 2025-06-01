import React from 'react';

const Completetask = ({ Authdata }) => {
    return (
        <div className="flex-shrink-0 w-80 h-full bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-2xl p-6 space-y-4 transition-transform hover:scale-105">
            {/* Header: Category and Date */}
            <div className="flex justify-between items-center">
                <span className="h-8 px-4 flex items-center bg-orange-600 text-white font-semibold rounded-lg text-xs uppercase tracking-wide shadow-md">
                    {Authdata.category}
                </span>
                <span className="text-xs font-medium text-white bg-pink-600 px-2 py-1 rounded shadow-sm">
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

            {/* Completed Label */}
            <div className="flex gap-3 pt-2">
                <button
                    className="flex-1 py-2 bg-slate-600 text-white text-xs font-bold rounded-xl shadow-md cursor-not-allowed"
                    disabled
                >
                    Completed
                </button>
                <span className="flex-1 py-2 bg-green-600 text-white text-xs font-semibold rounded-xl shadow-md text-center">
                    Done
                </span>
            </div>
        </div>
    );
};

export default Completetask;
