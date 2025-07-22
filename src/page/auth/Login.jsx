import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AuthLayout from "../../layout/authLayout/AuthLayout";

const Login = () => {
  return (
    <>
      <AuthLayout>
        <Input
          name="CORREO ELECTRONICO *"
          type="email" />
        <Input
          name="CONTRASEÑA *"
          type="password" />
        <Button
          name="INICIAR SESION"
          link="/home"
        />
      </AuthLayout>
    </>
  )
}

export default Login;