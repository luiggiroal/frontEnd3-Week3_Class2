import {useState} from 'react'
import MsgSuccess from './MsgSuccess'
import FormBody from './FormBody'
import MsgError from './MsgError'

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    edad: "",
    pokemon: ""
  })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  //console.log(user)
  //console.log("success ->" + success)
  //console.log("error ->" + error)

  return (
    <div>
      {success ? (
        <MsgSuccess nombre={user.nombre} edad={user.edad} pokemon={user.pokemon} />
      ) : (
        <>
          <FormBody user={user} setUser={setUser} setSuccess={setSuccess} setError={setError}/>
          {error ? (
            <MsgError />
          ) : null}
        </>
      )}
    </div>
  )
}

export default Form
