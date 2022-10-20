import React from 'react';
import PropTypes from 'prop-types';
import Star from '../Star';
import styles from './index.module.css';

export default function Stars({ count }) {
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }

  function renderStars() {
    const stars = [];
    let i = 0;
    while (i < count) {
      stars.push(
        <li key={i}>
          <Star />
        </li>
      );
      i++;
    }
    return stars;
  }

  return <ul className={`${styles['card-body-stars']}`}>{renderStars()}</ul>;
}

Stars.defaultProps = {
  count: 0,
};
Stars.propTypes = {
  count: PropTypes.number,
};
