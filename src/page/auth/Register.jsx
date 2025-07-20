import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import AuthLayout from "../../layout/authLayout/AuthLayout";

const Register = () => {
  return (
    <>
      <AuthLayout>
        <Input
          name="NOMBRE DE USUARIO *"
          type="text" />
        <Input
          name="CORREO ELECTRONICO *"
          type="email" />
        <Input
          name="CONTRASEÑA *"
          type="password" />
        <Button
          name="REGISTRARME"
        />
      </AuthLayout>
    </>
  )
}

export default Register;