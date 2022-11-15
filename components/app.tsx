import React from 'react';
import PropTypes from 'prop-types';

export default function AppComponent( { count } ) {
  const isSingle = count === 1;
  const text = `comic${ !isSingle ? 's': ''} ${ !isSingle ? 'are' : 'is'} available`;

  return <div><input placeholder='Search' /><span>{count} {text}</span></div>
}

AppComponent.propTypes = {
  count: PropTypes.number.isRequired,
}
