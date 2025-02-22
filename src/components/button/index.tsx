type Props = { children: string; className?: string; onClick: () => void };

const Button = ({ children, className = '', onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`flex grow items-center justify-center bg-purple-400 p-4 rounded-xl w-full ${className}`}>
      {children}
    </button>
  );
};

export default Button;
