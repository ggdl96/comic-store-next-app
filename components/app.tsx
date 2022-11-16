import React from 'react';
import PropTypes from 'prop-types';

export default function AppComponent( { count, onSearch } ) {
  const isSingle = count === 1;
  const text = `comic${ !isSingle ? 's': ''} ${ !isSingle ? 'are' : 'is'} available`;

  const onChange = (e) => {
    if (e.target.value.length >= 3) {
      onSearch();
    }
  }

  return (
    <div>
      <input placeholder='Search' onChange={onChange}/>
      <span>{count} {text}</span>
      <div className='list'><span>123 comic</span></div>
    </div>
  );
}

AppComponent.propTypes = {
  count: PropTypes.number.isRequired,
  onSearch: PropTypes.func,
}

AppComponent.defaultProps = {
  onSearch: () => { },
  results: [],
};
