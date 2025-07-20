import Button from "../../components/button/Button"
import LoginPage from "../../components/login_page/LoginPage";
import './Landing.css'

const Landing = () => {
  return (
    <>
      <section className="card-login">
        <LoginPage />
        <div className="button-section">
          <Button
            name="INICIAR SESION"
            title="YA SOY PARTE :"
            link="/login"
          />
          <Button
            name="REGISTRAR"
            title="SOY UN USUARIO NUEVO :"
            link="/register"
          />
        </div>
      </section>
    </>
  )
}

export default Landing;