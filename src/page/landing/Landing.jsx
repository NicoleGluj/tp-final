import Button from "../../components/button/Button"
import AuthLayout from "../../layout/authLayout/AuthLayout";

const Landing = () => {
  return (
    <>
      <AuthLayout>
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
      </AuthLayout>
    </>
  )
}

export default Landing;