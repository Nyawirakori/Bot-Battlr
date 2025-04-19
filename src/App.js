import './App.css';
import { useState, useEffect } from "react";
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [yourArmy, setYourArmy] = useState([]);

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
 
  //listing of bots
    const listedBot = (bot) => {
    if (!yourArmy.some((listedBot) => listedBot.id === bot.id)) {
      setYourArmy([...yourArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setYourArmy(yourArmy.filter((listedBot) => listedBot.id !== bot.id));
  };


//Discharging
  const dischargeBot = async (id) => {
    try {
      await fetch(`http://localhost:8001/bots/${id}`, {
        method: "DELETE",
      });
      setBots(bots.filter((bot) => bot.id !== id));
      setYourArmy(yourArmy.filter((bot) => bot.id !== id));
    } catch (error) {
      console.error("Error discharging bot:", error);
    }
  };

  return (
    <div>
      <YourBotArmy yourArmy={yourArmy} releaseBot={releaseBot} />
      <BotCollection
        bots={bots}
        listedBot={listedBot}
        dischargeBot={dischargeBot}
        yourArmy={yourArmy} />
    </div>
  );
}

export default App;
