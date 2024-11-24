import FormBodyStyles from '../styles/FormBody.module.css'

const FormBody = ({user, setUser, setSuccess, setError}) => {
  const handleSubmit = (event) => {
    event.preventDefault()

    const RegNum = /^\d+$/

    if (user.nombre.length >= 4 && user.pokemon.length >= 5 && RegNum.test(user.edad)) {
      setSuccess(true)
      setError(false)
    } else {
      setError(true)
      setSuccess(false)
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={FormBodyStyles.formContainer}>
        <div>
          <label>Nombre: </label>
          <input type="text" onChange={({target}) => setUser({...user, nombre: target.value})}/>
        </div>
        <div>
          <label>Edad: </label>
          <input type="text" onChange={({target}) => setUser({...user, edad: target.value})}/>
        </div>
        <div>
          <label>Pokemon: </label>
          <input type="text" onChange={({target}) => setUser({...user, pokemon: target.value})}/>
        </div>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default FormBody
