import '../button/Button.css'
import '../../router/RouterApp'
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { title, link, name } = props

  return (
    <div>
      <p>{title}</p>
      <Link to={link}>
        <button>{name}</button>
      </Link>
    </div>
  )
}

export default Button;