import PropTypes from 'prop-types'

const Button = ({color, text, click}) => {


  return <button onClick={click} style={{backgroundColor:color}} className="btn">{text}</button>
}

Button.defaultProps = {
    color:'green',
    text:'button',
}

Button.propTypes = {
    color : PropTypes.string.isRequired,
    text : PropTypes.string.isRequired,
    click : PropTypes.func.isRequired,
}

export default Button