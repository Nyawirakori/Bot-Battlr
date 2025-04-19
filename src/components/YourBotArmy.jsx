import React from "react";

export default function YourBotArmy({ yourArmy, releaseBot }) {
  return (
    <div className="your-bot-army container mt-4">
      <h2>Bot Army</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {yourArmy.map((bot) => (
          <div key={bot.id} className="col">
            <div className="card h-100 bot-card">
              <img
                src={bot.avatar_url}
                alt={bot.name}
                className="card-img-top"
                onClick={() => releaseBot(bot)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
