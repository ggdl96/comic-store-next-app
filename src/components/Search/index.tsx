import React from "react";

interface Props {
  count: number;
  onSearch: (value: string) => void;
  options: string[];
  onClickOption: (option: string) => void;
}
const SearchComponent = ({
  count,
  onSearch,
  options = [],
  onClickOption,
}: Props) => {
  const isSingle = count === 1;
  const text = `comic${!isSingle ? "s" : ""} ${
    !isSingle ? "are" : "is"
  } available`;

  const onChange = (e: { target: { value: string } }) => {
    if (e.target.value.length >= 3) {
      onSearch(e.target.value);
    }
  };

  const optionsToRender = options.slice(0, 5).map((option: string) => (
    <span key={`option-${option}`} onClick={() => onClickOption(option)}>
      {option}
    </span>
  ));

  return (
    <div>
      <input data-testid="input" placeholder="Search" onChange={onChange} />
      <span data-testid="comics-counter">
        {count} {text}
      </span>
      {options.length ? <div className="list">{optionsToRender}</div> : null}
    </div>
  );
};

export default SearchComponent;
