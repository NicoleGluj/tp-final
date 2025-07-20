import '../authLayout/AuthLayout.css'

const AuthLayout = ({ children }) => {
  return (
    <>
      <section className="card-content">
        <section className="title-section">
          <h2>BIENVENIDO A</h2>
          <h1>THE PRODUCT</h1>
          <h3>CONECTA CON UNA NUEVA FORMA DE VENDER</h3>
        </section>
        <section className="button-section">{children}</section>
      </section>
    </>
  )
}

export default AuthLayout;