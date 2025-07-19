import Button from "../../components/button/Button"
import './App.css'

const App = () => {
  return (
    <>
      <main>
        <div className="title-section">
          <h2>BIENVENIDO A</h2>
          <h1>THE PRODUCT</h1>
          <h3>CONECTA CON UNA NUEVA FORMA DE VENDER</h3>
        </div>
        <div className="button-section">
          <Button
            name="INICIAR SESION"
            title="YA SOY PARTE!" />
          <Button
            name="REGISTRAR"
            title="SOY UN USUARIO NUEVO" />
        </div>
      </main>
    </>
  )
}

export default App;