import React from 'react';
import {ShoppingCartOutlined} from '@ant-design/icons';
export default function Game(game) {

  const { gameItem , addItem} = game;
  
  return (
    <div className ="gameItem">
      <img className="itemImg" src={gameItem.image} alt={gameItem.name} />
      <h3>{gameItem.name}</h3>
      <div>${gameItem.price}</div>
      <div>
        <button className="hoverBtn" onClick={() => addItem(gameItem)} ><ShoppingCartOutlined style={{marginRight:"5px"}}/>Add To Cart</button>
      </div>
    </div>
  );
}
