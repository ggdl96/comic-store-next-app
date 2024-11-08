import React from 'react';

interface Props {
  item: string;
}

const ListItem = ({ item }: Props) => {
  return <li data-testid={`item-${item}`}>{item}</li>;
};

export default ListItem;
