import InputForm from '../Elements/Input/index';
import Button from '../Elements/Button/index';

const FormLogin = () => {
  return (
    <form action="">
      <InputForm 
      label="Email" 
      type="email" 
      placeholder="example@mail.com" 
      name="email">
      </InputForm>

      <InputForm 
      label="Password" 
      type="password" 
      placeholder="******" 
      name="password">
      </InputForm>

      <Button variant="bg-blue-600 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
