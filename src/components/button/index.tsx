type Props = { children: string; className?: string };

const Button = ({ children, className = "" }: Props) => {
  return (
    <button
      className={`flex grow items-center justify-center bg-purple-400 p-4 rounded-xl w-full ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
