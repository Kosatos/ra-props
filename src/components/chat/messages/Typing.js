import React from 'react';
import PropsType from 'prop-types';
import styles from './index.module.css';

export default function Typing({ from, message }) {
  return (
    <li>
      <div className={styles['message-data']}>
        <span className={styles['message-data-name']}>{message.from.name}</span>
        <i
          className={`${styles.fa} ${styles['fa-circle']} ${styles.online}`}
        ></i>
        <span className={styles['message-data-time']}>{message.time}</span>{' '}
        &nbsp; &nbsp;
      </div>
      <div className={styles.typing_loader}></div>
    </li>
  );
}

Typing.propTypes = {
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
