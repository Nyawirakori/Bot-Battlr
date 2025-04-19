import './App.css';
import { useState, useEffect } from "react";
import BotCollection from './components/BotCollection';
function App() {
  const [bots, setBots] = useState([]);

  //fetching bots from db.json
  async function getBots() {
    try {
      const response = await fetch("http://localhost:8001/bots");
      const data = await response.json();
      setBots(data);
    } catch (error) {
      throw new Error(error);
    } finally {
    }
  }

  useEffect(() => {
    getBots();
  }, []);

  return (
    <div>
      <BotCollection bots={bots} setBots={setBots} />
    
    </div>
  );
}

export default App;
