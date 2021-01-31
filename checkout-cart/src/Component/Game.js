import React from 'react';

export default function Game(game) {

  const { gameItem , addItem} = game;
  
  return (
    <div className ="gameItem">
      <img className="itemImg" src={gameItem.image} alt={gameItem.name} />
      <h3>{gameItem.name}</h3>
      <div>${gameItem.price}</div>
      <div>
        <button className="hoverBtn" onClick={() => addItem(gameItem)} >Add To Cart</button>
      </div>
    </div>
  );
}
