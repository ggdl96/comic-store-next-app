import React from 'react';
import PropTypes from 'prop-types';

import ListItem from './components/ListItem';

function List({ items }) {
  return (
    <ul data-testid="ul-list">
      {
        items.map(item => <ListItem key={`list-item-${item}`} item={item} />)
      }
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
