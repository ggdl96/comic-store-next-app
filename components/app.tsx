import React from 'react';
import PropTypes from 'prop-types';

export default function AppComponent( { count } ) {
  const text = `comic${count !== 1 ? 's': ''} ${count !== 1 ? 'are' : 'is'} available`;
  return <div><input placeholder='Search' /><span>{count} {text}</span></div>
}

AppComponent.propTypes = {
  count: PropTypes.number.isRequired,
}
