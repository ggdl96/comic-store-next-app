import React from 'react';
import PropTypes from 'prop-types';

function ListItem({ item }) {
  return <li data-testid={`item-${item}`}>{item}</li>
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
}

export default ListItem;
