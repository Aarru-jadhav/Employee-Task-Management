import { useContext } from 'react';

import { useState } from 'react';






const CreateTask = ({ Authdata }) => {
    const [Tasktitle, setTasktitle] = useState("")
    const [Taskdesc, setTaskdesc] = useState("")
    const [Date, setDate] = useState("")
    const [catogory, setcatogory] = useState("")
    const [Asignto, setAsignto] = useState("")

    const [Task, setTask] = useState([])

    const submithandler = (e) => {
        e.preventDefault();
        const newTask = { Tasktitle, Taskdesc, Date, catogory, Asignto, active: false, newTask: true, completed: false, failed: false };

        const data = JSON.parse(localStorage.getItem('employees')) || [];
        data.forEach(function (elm) {
            if (Asignto === elm.firstName) {
                if (!elm.tasks) elm.tasks = [];
                elm.tasks.push(newTask);
            }
        });
        localStorage.setItem('employees', JSON.stringify(data));
        setAsignto('');
        setDate('');
        setTask([]);
        setTaskdesc('');
        setTasktitle('');
        setcatogory('');
    }

    const logoutuser = () => {
        localStorage.removeItem('loggedInUser'); // or clear all: localStorage.clear()
        window.location.reload(); // or navigate to login if using react-router
    };


    return (
        <div className="h-screen w-screen p-10 bg-gradient-to-br from-slate-800 to-slate-600 text-white">
            <div className='flex  justify-between items-end'>
                <h1 className='text-2xl font-semibold'>
                    Hello, <br />
                    <span className='text-orange-600 text-3xl font-bold'>
                        {Authdata?.firstName ? Authdata.firstName : "User"} ✋
                    </span>
                </h1>

                <button onClick={logoutuser} className='h-10 w-20 border-2 border-orange-600 bg-orange-600 rounded-lg text-white font-bold'> Log Out</button>

            </div>

            <div className="max-w-4xl mx-auto bg-slate-700 p-4 sm:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-6">Create New Task</h2>
                <form onSubmit={(e) => {
                    submithandler(e);
                }} className="flex-1 flex flex-col gap-4">

                    <div className="flex-1 flex flex-col gap-4">
                        <div>
                            <label className="block mb-1 font-medium">Task Title</label>
                            <input
                                value={Tasktitle}
                                type="text"
                                placeholder="Make a UI design"
                                className="w-full p-3 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onChange={(e) => {
                                    setTasktitle(e.target.value)
                                }}

                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Date</label>
                            <input
                                value={Date}
                                type="date"
                                className="w-full p-3 rounded bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onChange={(e) => {
                                    setDate(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Assign To</label>
                            <input
                                value={Asignto}
                                type="text"
                                placeholder="Enter team member name"
                                className="w-full p-3 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onChange={(e) => {
                                    setAsignto(e.target.value)
                                }}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Category</label>
                            <input
                                value={catogory}
                                type="text"
                                placeholder="Design, Development, etc"
                                className="w-full p-3 rounded bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                                onChange={(e) => {
                                    setcatogory(e.target.value)
                                }}
                            />
                        </div>
                    </div>


                    <div className="flex-1 flex flex-col gap-4">
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea
                            rows="10"
                            value={Taskdesc}
                            placeholder="Write task description here..."
                            className="w-full p-3 rounded bg-slate-800 text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                            onChange={(e) => {
                                setTaskdesc(e.target.value)
                            }}
                        />
                    </div>
                    <div className="text-center mt-5">
                        <button
                            type="submit"
                            className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition"
                        >
                            Create Task
                        </button>
                    </div>

                </form>



            </div>
        </div>
    )
}

export default CreateTask
