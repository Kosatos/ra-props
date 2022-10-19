import Stars from './components/films/Stars';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Stars count={5} />
    </div>
  );
}

export default App;
