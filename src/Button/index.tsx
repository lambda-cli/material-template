interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <div>{children ?? 'Button'}</div>;
};

export default Button;
