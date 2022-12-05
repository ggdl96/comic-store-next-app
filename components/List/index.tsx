import React from 'react';
import PropTypes from 'prop-types';

function List({ items }) {
  return (
    <ul data-testid="ul-list">
    <li>{items[0]}</li>
  </ul>
  )
}

function EmptyList() {
  return <span>No results</span>
}
export default function AppComponent({ items }) {
  return (
    <div>
      {
        items.length ? <List items={items} /> : <EmptyList />
      }
    </div>
  );
}

AppComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
}

AppComponent.defaultProps = {
  items: [],
};
