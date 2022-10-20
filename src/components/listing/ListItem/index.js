import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.css';

export default function ListItem({ item }) {
  if (!item?.MainImage?.url_570xN) return null;

  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt={item.title} />
        </a>
      </div>
      <div className={styles['item-details']}>
        <p className={styles['item-title']}>
          {item.title.length > 50
            ? item.title.slice(0, 50) + '...'
            : item.title}
        </p>
        <p className={styles['item-price']}>
          {item.currency_code === 'USD'
            ? '$' + item.price
            : item.currency_code === 'EUR'
            ? '€' + item.price
            : item.price + ` ${item.currency_code}`}
        </p>
        <p
          className={
            styles['item-quantity'] +
            (item.quantity <= 10
              ? ` ${styles['level-low']}`
              : item.quantity >= 20
              ? ` ${styles['level-medium']}`
              : ` ${styles['level-high']}`)
          }
        >
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}

ListItem.propTypes = {
  item: PropTypes.shape({
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};
