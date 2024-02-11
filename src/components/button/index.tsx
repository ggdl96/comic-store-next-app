type Props = { children: string };

const Button = ({ children }: Props) => {
  return (
    <button className="flex grow items-center justify-center bg-purple-400 p-4 rounded-xl w-full">
      {children}
    </button>
  );
};

export default Button;
