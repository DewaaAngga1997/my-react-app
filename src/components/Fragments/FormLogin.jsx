import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";

const FormLogin = () => {
  //membuat fungsi handleLogin
  const handleLogin = (event) => {
    //event.preventdefault digunakan agar tidak terjadi refresh
    event.preventDefault();
    //target.email di ambil dari name email di input form dan disimpan ke localStorage
    localStorage.setItem("email", event.target.email.value);
    //target.password di ambil dari name password di input form dan disimpan ke localStorage
    localStorage.setItem("password", event.target.password.value);
    //redirect ke halaman product
    window.location.href = "/products";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
      ></InputForm>

      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      ></InputForm>

      <Button variant="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
