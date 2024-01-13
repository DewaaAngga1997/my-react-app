const Button = (props) => {
  const { children, variant, onClick } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
