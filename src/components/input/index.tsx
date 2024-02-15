interface Props {
  placeholder: string;
}

function Input({ placeholder }: Props) {
  return (
    <div className="w-full flex flex-col grow pb-2">
      <input
        placeholder={placeholder}
        className="border-gray-300 border-2 rounded-md w-full p-2"
      ></input>
      <div className="h-14 bg-red-400 w-full"></div>
    </div>
  );
}

export default Input;
