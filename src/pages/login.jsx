import FormLogin from '../components/Fragments/FormLogin';
import AuthLayout from '../components/Layouts/AuthLayouts';

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin />
      <p className="mt-5 text-center">
        don't have an account? <a href="/register" className="font-bold text-blue-600">Sign up</a>
      </p>
    </AuthLayout>
  );
};

export default LoginPage;
