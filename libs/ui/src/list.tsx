import React, { HTMLAttributes } from 'react';
import { css, cx } from '@emotion/css';

export interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
  as?: 'ul' | 'ol';
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemKeyField?: string;
  itemClassName?: string;
}

const listStyles = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export function List<T extends Record<any, any>>({
  as: As = 'ul',
  items,
  renderItem,
  itemKeyField = '_id',
  itemClassName,
  ...others
}: ListProps<T>): React.ReactElement {
  return (
    <As {...others} className={cx(listStyles, others.className)}>
      {items.map((item) => (
        <li key={item[itemKeyField]} className={itemClassName}>
          {renderItem(item)}
        </li>
      ))}
    </As>
  );
}
