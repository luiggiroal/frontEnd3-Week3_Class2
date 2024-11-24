const MsgSuccess = ({nombre, edad, pokemon}) => {
  return (
    <div className="success-container">
      <h4>¡Datos Ingresados Exitosamente, {nombre}!</h4>
      <h4>
        Tu edad es de {edad} años y tu pokemon favorito es {pokemon}.
      </h4>
    </div>
  )
}

export default MsgSuccess
