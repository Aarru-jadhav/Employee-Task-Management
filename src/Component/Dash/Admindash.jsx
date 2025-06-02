import React from 'react';
import CreateTask from '../Other/CreateTask';

import AllTask from '../Other/AllTask';

const Admindash = () => {
  const Authdata = JSON.parse(localStorage.getItem('loggedInUser'));
  console.log("Admindash Authdata:", Authdata);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-800 to-slate-600 p-2 sm:p-6 flex flex-col gap-8">
      <div className="w-full">
        <CreateTask Authdata={Authdata} />
      </div>
      <div className="w-full">
        <AllTask Authdata={Authdata}/>
      </div>
    </div>
  );
};

export default Admindash;