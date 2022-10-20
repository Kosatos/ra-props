import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';

export default function Response({ from, message }) {
  return (
    <li>
      <div className={`${styles['message-data']} ${styles['align-right']}`}>
        <span className={styles['message-data-time']}>{message.time}</span>{' '}
        &nbsp; &nbsp;
        <span className={styles['message-data-name']}>{from.name}</span>
        <i className={`${styles.fa} ${styles['fa-circle']} ${styles.me}`}></i>
      </div>
      <div
        className={`${styles.message} ${styles['other-message']} ${styles['float-right']}`}
      >
        {message.text}
      </div>
    </li>
  );
}

Response.propTypes = {
  message: PropsType.shape({
    id: PropsType.string.isRequired,
    from: PropsType.object.isRequired,
    type: PropsType.string.isRequired,
    time: PropsType.string.isRequired,
    text: PropsType.string,
  }).isRequired,
  from: PropsType.shape({
    name: PropsType.string,
  }).isRequired,
};
