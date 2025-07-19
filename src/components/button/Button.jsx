import '../button/Button.css'

const Button = (props) => {
  return (
    <>
      <p>{props.title}</p>
      <button>{props.name}</button>
    </>
  )
}

export default Button;