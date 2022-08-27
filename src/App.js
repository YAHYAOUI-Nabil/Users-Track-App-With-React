import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'
import Footer from './components/Footer'
import About from './components/About'

function App() { 
  const [showAddUser, setShowAddUser] = useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
    setUsers(usersFromServer)
    }
    getUsers()

  }, [])

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const data = await res.json()

    return data
  }

  const fetchUser = async (id) => {
    const res = await fetch(`http://localhost:5000/users/${id}`)
    const data = await res.json()

    return data
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {method : 'DELETE'})
    setUsers(users.filter((user)=>user.id !==id))
  }

  const showBorder = async (id) => {
    const userToUpdate = await fetchUser(id)
    const updatedUser = {...userToUpdate, reminder : !userToUpdate.reminder}
    const res = await fetch(`http://localhost:5000/users/${id}`, {
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(updatedUser),
      })

      const data = await res.json()
    setUsers(users.map((user) => user.id ===id ? {...user, reminder : data.reminder} : user))
  }

  const onSubmit = async (user) => {
    const res = await fetch('http://localhost:5000/users', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json',
      },
      body : JSON.stringify(user),
      })

      const data = await res.json()
      setUsers([...users, data])

      setShowAddUser(false)
  }

  const onShowForm = () => {
    setShowAddUser(!showAddUser)
  }
  
  return (
    <Router>
      <div className="container">
      <Header title='Users Tracker' onShowForm={onShowForm} showAdd={showAddUser}/>
      <Routes>
        <Route path='/' element={
          <>
            {showAddUser && <AddUser onSubmit={onSubmit} />}
            {(users.length>0 && !showAddUser) && <Users users={users} onDelete={deleteUser} onShowBorder={showBorder}/> }
            {(users.length<=0 && !showAddUser) && 'No tasks to show.'}
          </>
        } />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
