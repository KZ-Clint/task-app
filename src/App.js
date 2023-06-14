import { useState, useEffect } from 'react'
import './App.css';
import baseUrl from './components/baseUrl';
import axios from 'axios'


function App() {

    const [ tasks, setTasks ] = useState([])
    const [ title, setTitle ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ endDate, setEndDate ] = useState("")
    const [ startDate, setStartDate ] = useState("")
    const [ error1, setError1 ] = useState(null)
    const [ updateTask, setUpdateTask ] = useState({})

    //GET ALL TASKS
    useEffect( () => {    
        const getTasks = async () => { 
           try {
              const res = await axios.get( `${baseUrl}/api/task` )
              setTasks(res.data.tasks)
           } 
           catch (error) {
             console.log(error)
           } 
        } 
        getTasks()
      },[] )
     

    const handleSetUpdateTask = (task) => {
           setUpdateTask(task)
           setTitle(task.title)
           setDescription(task.description)
           const sdateObj = new Date(task.startDate);
           const syear = sdateObj.getFullYear();
           const smonth = (sdateObj.getMonth() + 1).toString().padStart(2, '0');
           const sday = sdateObj.getDate().toString().padStart(2, '0');

           const edateObj = new Date(task.endDate);
           const eyear = edateObj.getFullYear();
           const emonth = (edateObj.getMonth() + 1).toString().padStart(2, '0');
           const eday = edateObj.getDate().toString().padStart(2, '0');

           setStartDate(`${syear}-${smonth}-${sday}`)
           setEndDate(`${eyear}-${emonth}-${eday}`)
          console.log(`${syear}/${smonth}/${sday}`)
    }

    //CREATE NEW TASKS AND UPDATE TASK
    const handleSubmit = async (e) => {
        e.preventDefault()
          if( !title || !description || !endDate || !startDate ){
             setError1("No field must be left empty!!")
             return
          } 
          const ed1 = new Date(startDate)
          const ed2 = new Date(endDate)
          const d2 = new Date()
          if( ed1.getTime() < d2.getTime() ) {
           setError1("You are going to the past, except you are a time traveller!!")
           return
          }
          if( ed2.getTime() < d2.getTime() ) {
            setError1("You are going to the past, except you are a time traveller!!")
            return
           }
           if( ed2.getTime() < ed1.getTime() ) {
            setError1("Your end date is closer than your start date!!")
            return
           }
           try {
             let res;

             Object.keys(updateTask).length > 0 ? 
             res = await axios.patch( `${baseUrl}/api/task/${updateTask._id}`, { title, description, startDate, endDate } ) :
              res = await axios.post( `${baseUrl}/api/task`, { title, description, startDate, endDate } ) 
            
             if( Object.keys(updateTask).length > 0  ) {
                setTasks( tasks.filter( (task) => {
                    if(task._id === updateTask._id){
                       task.title = res.data.updatedTask.title;
                       task.description = res.data.updatedTask.description;
                       task.startDate = res.data.updatedTask.startDate;
                       task.endDate = res.data.updatedTask.endDate;
                        task.createdAt = res.data.updatedTask.createdAt;
                       task.updatedAt = res.data.updatedTask.updatedAt;
                       task.status = res.data.updatedTask.status;
                    }
                    return task
                } ) )

             } else {
                setTasks([ res.data.newTask, ...tasks])
             }        
             setTitle('')
             setDescription("")
             setStartDate("")
             setEndDate("")
             setUpdateTask({})
           } 
           catch (error) {
             console.log(error)
             setError1(error.response.data.error)
           } 
      }

      //DELETE TASK
      const handleDeleteTask = async (markedtask) => {
        try {       
            await axios.delete( `${baseUrl}/api/task/${markedtask._id}`) 
            setTasks( tasks.filter( (task) => {
                return task._id !== markedtask._id
            } ) )
            
          } 
          catch (error) {
            console.log(error)
            setError1(error.response.data.error)
          } 
      }

      //UPDATE TASK STATUS
      const handleUpdateTaskStatus = async (markedtask) => {
        try {       
             await axios.patch( `${baseUrl}/api/task/status/${markedtask._id}`, null) 
            setTasks( tasks.filter( (task) => {
                if(task._id === markedtask._id){
                   task.status = "done"
                }
                return task
            } ) )
            
          } 
          catch (error) {
            console.log(error)
            setError1(error.response.data.error)
          } 
      }

      const getDate = (createdAt) => {
        var created = createdAt
        var date = new Date(created)
       return (date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear())
    }

  return (
    <div className="mainbox">
        <div className="createtaskbox" >
           <h1> Create Task </h1>
              <form className='createtaskformbox' onSubmit={handleSubmit} >
                  <div className='createtaskformwrapper'  >
                      <div className='createtaskformdetailwrapper'  >
                          <label htmlFor="name" > Title </label>         
                          <input type='text' name='name' id="name" value={title} onChange={ (e) => {  setTitle(e.target.value); setError1(null); } } />
                      </div>     
                      <div className='createtaskformdetailwrapper'  >
                          <label htmlFor="description" > Description </label>         
                          <textarea name='description' id="description" value={description} onChange={ (e) => { setDescription(e.target.value); setError1(null); } } />
                      </div>  
                      <div className='createtaskformdetailwrapper'  >
                          <label > Schedule </label> 
                          <div className='datewrapper' >
                             <div >
                                <label > Start Date </label> 
                                <input type='date' name='startDate' value={startDate} onChange={ (e) => { setStartDate(e.target.value); setError1(null); } } />
                             </div>
                             <div>
                                <label > End Date </label> 
                                <input type='date' name='endDate'  value={endDate} onChange={ (e) => { setEndDate(e.target.value); setError1(null); } }  />
                             </div>             
                          </div>                            
                      </div>                    
                  </div>
                  { error1 && <p className='error' > {error1} </p>}
                  <div className='createtaskbuttondiv' >
                      <button type="submit" > { Object.keys(updateTask).length > 0 ? "Update Task" : "Create Task"  } </button>
                  </div>
              </form>
        </div>

        <div className="taskcreatedbox" >
              <h1> Tasks Created </h1>
              <div className="taskcreatedwrapper" >
                { tasks.length > 0 && tasks.map( (task) => (

                  <div className="taskcreatedwrapperitembox" key={task._id} >
                      <p> Title: <span> {task.title} </span> </p>
                      <p> Description: <span> {task.description} </span> </p>
                      <div>
                        <p> Start Date: <span> {getDate(task.startDate)} </span>  </p>
                        <p> End date: <span> {getDate(task.endDate)} </span>  </p>
                      </div>
                      <div>
                        <p> Created: <span> {getDate(task.createdAt)} </span>  </p>
                        <p> Updated: <span> {getDate(task.updatedAt)}</span> </p>
                      </div>
                      
                      <p> Status: <span className={`${task.status}`} onClick={ () => { handleUpdateTaskStatus(task) } } > {task.status} </span> </p>
                      <div className='updatedeletewrapper' >
                         <button  onClick={ () => { handleSetUpdateTask(task) } } > Update </button>
                         <button onClick={ () => { handleDeleteTask(task) } } > Delete</button>
                      </div>
                  </div>
                ) ) }
                
              </div>   
        </div>
    </div>
  );
}

export default App;
