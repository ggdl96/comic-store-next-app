import React from 'react';

import ListItem from './components/ListItem';

interface Props {
  items: string[];
}

const List = ({ items = [] }: Props) => {
  return (
    <ul data-testid="ul-list">
      {items.map(item => (
        <ListItem key={`list-item-${item}`} item={item} />
      ))}
    </ul>
  );
};

const EmptyList = () => {
  return <span>No results</span>;
};

const ListComponent = ({ items = [] }: Props) => {
  return <div>{items.length ? <List items={items} /> : <EmptyList />}</div>;
};

export default ListComponent;
