import '../button/Button.css'
import '../../router/RouterApp'

const Button = (props) => {

  return (
    <>
      <p>{props.title}</p>
      <button href={props.link}>{props.name}</button>
    </>
  )
}

export default Button;