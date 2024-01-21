import InputForm from "../Elements/Input/index";
import Button from "../Elements/Button/index";
import { useEffect, useRef } from "react";

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

  //kita juga bisa menggunakan useRef untuk mumbuat focus pada from input login
  //(saat di halaman login kursor akan otomatis berada di input email)
  //dengan cara membuat funtion di bawah
  const emailRef = useRef(null);
  // lalu menggunakan useEffect
  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@mail.com"
        name="email"
        ref={emailRef}
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
