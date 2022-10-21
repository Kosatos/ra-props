import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import styles from './index.module.css';

export default function Listing({ items }) {
  return (
    <div className={styles['item-list']}>
      {items.map((item) =>
        item?.MainImage?.url_570xN ? (
          <ListItem item={item} key={item.listing_id} />
        ) : null
      )}
    </div>
  );
}

Listing.defaultProps = {
  items: [],
};
Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
