import Stars from './components/films/Stars';
import Listing from './components/listing/Listing';
import MessageHistory from './components/chat/MessageHistory';
import styles from './App.module.css';
import dataOffers from './data-offers.json';
import messages from './data-messages';

function App() {
  return (
    <div className={styles.container}>
      <Stars count={5} />
      <Listing items={dataOffers} />
      <MessageHistory list={messages} />
    </div>
  );
}

export default App;
