import './App.css';
import { useState } from 'react';
import { Message } from './components/Message';

export const App = () => {
  const [name] = useState('Передал сообщение через Props')
  return (
    <div className="App">
      <Message name={name} />
    </div>
  );
}
