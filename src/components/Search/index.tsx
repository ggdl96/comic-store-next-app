import React from 'react';
import PropTypes from 'prop-types';

export default function SearchComponent( { count, onSearch, options, onClickOption } ) {
  const isSingle = count === 1;
  const text = `comic${ !isSingle ? 's': ''} ${ !isSingle ? 'are' : 'is'} available`;

  const onChange = (e) => {
    if (e.target.value.length >= 3) {
      onSearch(e.target.value);
    }
  }

  const optionsToRender = options
    .slice(0, 5)
    .map(option => (<span key={`option-${option}`} onClick={() => onClickOption(option)}>{option}</span>));

  return (
    <div>
      <input data-testid="input" placeholder='Search' onChange={onChange}/>
      <span data-testid="comics-counter">{count} {text}</span>
      {options.length ? <div className='list'>{optionsToRender}</div> : null}
    </div>
  );
}

SearchComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onSearch: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  onClickOption: PropTypes.func.isRequired,
}

SearchComponent.defaultProps = {
  options: [],
};
