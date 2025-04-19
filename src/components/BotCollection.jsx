import YourBotArmy from "./YourBotArmy";
export default function BotCollection(bots, setBots) {

    //Remove bots using specific id's
     async function handleRemove(id) {
       try {
         const removedBot = await fetch(
           `http://localhost:8001/bots/${id}`,
           {
             method: "DELETE",
             headers: {
               "Content-Type": "aplication/json",
               Accept: "aplication/json",
             },
           }
         );
         const data = await removedBot.json();
         setBots((prev) =>
           prev.filter((bot) => bot.id !== data.id)
         );
       } catch (error) {
         throw new Error(error);
       } finally {
       }
     }
  return (
  <div>
    {bots.map((bot, index) => (
            <YourBotArmy
              key={index}
              bot={bot}
              handleRemove={handleRemove}
            />
          ))}
  </div>
    )
}
