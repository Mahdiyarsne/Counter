import { useState } from 'react';
import Counter from './components/Counter';

// import './App.css';

import Styles from './App.module.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const restCount = () => {
    setCount(0);
  };

  return (
    <div className={Styles.App}>
      <header className={Styles.AppHeader}>
        <h1>شمارنده من</h1>
      </header>
      <Counter
        inc={increaseCount}
        dec={decreaseCount}
        rest={restCount}
        count={count}
      />
    </div>
  );
};

export default App;
