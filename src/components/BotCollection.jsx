import React from "react";
//Bots listing
export default function BotCollection({ bots, listedBot, dischargeBot }) {
  return (
    <div className="bot-collection container mt-4">
      <h2>Bots</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {bots.map((bot) => (
          <div key={bot.id} className="col">
            <div className="card h-100 bot-card">
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="card-img-top"
                onClick={() => listedBot(bot)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">Health: {bot.health}</p>
                <p className="card-text">Damage: {bot.damage}</p>
                <p className="card-text">Armor: {bot.armor}</p>
                <p className="card-text">Class: {bot.bot_class}</p>
                <p className="card-text">Catchphrase: {bot.catchphrase}</p>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => dischargeBot(bot.id)}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
