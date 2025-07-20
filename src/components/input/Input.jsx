import '../input/Input.css'

const Input = (props) => {
  const { name, type } = props

  return (
    <div className='input-content'>
      <label>{name}</label>
      <input type={type} />
    </div>
  )
}

export default Input;