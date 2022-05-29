import {FaTimes} from 'react-icons/fa'

function User({user, onDelete, onShowBorder}) {
  return (
    <div className={user.reminder ? "task reminder" : "task"} onDoubleClick={()=>onShowBorder(user.id)}>
        <h3>{user.name} <FaTimes style={{color:'red', cursor: 'pointer'}} onClick={()=>onDelete(user.id)}/></h3>
        <h5>{user.age} years-old.</h5>
        <p>{user.job} 😎.</p>
    </div>
  )
}

export default User