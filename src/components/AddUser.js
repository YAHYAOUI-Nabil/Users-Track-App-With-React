import {useState} from 'react'

function AddUser({onSubmit}) {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [job, setJob] = useState('')
    const [reminder, setReminder] = useState(false)

    const onAdd = (e) => {
        e.preventDefault()
        if(!name){
            alert('Enter your name')
            return
        }
        onSubmit({name, age, job, reminder})

        setName('')
        setAge(0)
        setJob('')
        setReminder(false)
    }

  return (
    <form className="add-form" onSubmit={onAdd}>
        <div className="form-control">
            <label>Name</label>
            <input type="text" value ={name} placeholder="Enter your name" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Age</label>
            <input type="number" value={age} placeholder="Set your age" onChange={(e)=> setAge(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Job</label>
            <input type="text" value={job} placeholder="Set your job" onChange={(e) => setJob(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Reminder</label>
            <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        
        <input className="btn btn-block" type="submit" value="submit"/>
       
    </form>
  )
}

export default AddUser