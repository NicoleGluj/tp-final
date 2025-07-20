import Button from "../../components/button/Button";
import LoginPage from "../../components/login_page/LoginPage";
import '../auth/Auth.css'

const Login = () => {
  return (
    <>
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
    </>
  )
}

export default Login;