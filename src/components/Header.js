import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

function Header({title, onShowForm, showAdd}) {
    const location = useLocation()

    const onClick = () => {
        onShowForm()
    }

  return (
    <header className="header">
        <h1>{title}</h1> 
        {location.pathname==='/' &&<Button click={onClick} color={!showAdd ? 'blue' : 'red'} text={!showAdd ? 'Add' : 'close'}/>}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header