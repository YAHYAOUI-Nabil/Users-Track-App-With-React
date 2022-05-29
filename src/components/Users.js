import User from "./User"

function Users ({users, onDelete, onShowBorder}) {
  return (
    <>
      {users.map((user, index) => {
        return (
          <User key={index} user={user} onDelete={onDelete} onShowBorder={onShowBorder}/> 
        ) 
      })}
      
    </>
  )
}

export default Users