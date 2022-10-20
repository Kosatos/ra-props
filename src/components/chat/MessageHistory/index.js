import React from 'react';
import PropsType from 'prop-types';
import Message from '../messages/Message';
import Response from '../messages/Response';
import Typing from '../messages/Typing';
import styles from './index.module.css';

export default function MessageHistory({ list }) {
  function renderByType(mes) {
    switch (mes.type) {
      case 'message':
        return <Message from={mes.from} message={mes} key={mes.id} />;
      case 'response':
        return <Response from={mes.from} message={mes} key={mes.id} />;
      case 'typing':
        return <Typing from={mes.from} message={mes} key={mes.id} />;
      default:
        return;
    }
  }
  return (
    <div className={styles.chat}>
      <div className={styles['chat-history']}>
        <ul>{list.map((message) => renderByType(message))}</ul>
      </div>
    </div>
  );
}

MessageHistory.propTypes = {
  list: PropsType.arrayOf(PropsType.object),
};
MessageHistory.defaultProps = {
  list: [],
};
