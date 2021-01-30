import React from 'react';

export default function Game(game) {

  const { product: gameItem } = game;
  return (
    <div className ="item">
      <img className="imgs" src={gameItem.image} alt={gameItem.name} />
      <h3>{gameItem.name}</h3>
      <div>${gameItem.price}</div>
      <div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
}
