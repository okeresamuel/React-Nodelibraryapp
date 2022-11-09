
import "./Input.scss"

function Input({placeholder, name, className, value, onChange, type}) {
  return (
    <div>
     <input placeholder={placeholder} value={value}  type={type} onChange={onChange} name={name} className={className} />
    </div>
  )
}

export default Input