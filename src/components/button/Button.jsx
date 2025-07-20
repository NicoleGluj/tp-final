import '../button/Button.css'
import '../../router/RouterApp'
import { Link } from 'react-router-dom';

const Button = (props) => {

  return (
    <div>
      <p>{props.title}</p>
      <Link to={props.link}>
        <button>{props.name}</button>
      </Link>
    </div>
  )
}

export default Button;