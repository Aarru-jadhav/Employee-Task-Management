import React from 'react'
import Acccepttask from './Acccepttask'
import Completetask from './Completetask'
import Newtask from './Newtask'
import Rejecttask from './Rejecttask'



const Tasklist = ({Authdata }) => {
    
    if (!Authdata || !Array.isArray(Authdata.tasks)) {
        return null; // or return a loading/error message
    }
    
    return (
        <div className='w-full h-[300px] mt-6 flex overflow-x-auto items-center gap-4 md:gap-6 px-2 md:px-10'>
         
          {Authdata.tasks.map((elm,id)=>{
            if(elm.active)
            {
                return <Acccepttask  key={id} Authdata={elm}/>
            }
            if(elm.newTask)
            {
                return <Newtask key={id} Authdata={elm}/>
            }
            if(elm.completed)
            {
                return <Completetask key={id} Authdata={elm}/>
            }
            if(elm.failed)
            {
                return <Rejecttask key={id} Authdata={elm}/>
            }
             

          })}

        </div>
    )
}

export default Tasklist

