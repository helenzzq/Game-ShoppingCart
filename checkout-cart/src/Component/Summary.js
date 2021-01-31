import React from 'react';
export default function Summary(props) { 
    const { ItemInCart ,addItem} = props;
    return (
        <aside className="summaryblock">
            <h1>Check-Out Summary</h1>
            <div>
                {ItemInCart.length === 0 &&
                    <img alt="Empty cart" src='https://mymeatfactory.com/assets/fe/img/empty-cart.png'></img>}
            </div>
            {ItemInCart.map((item)=>(
                <div key={item.id} className="entry">
                    <div className="block1">
                        {item.name}
                    </div>
                    <div className="block1">
                        <button onClick={()=> addItem(item)} className="add">+</button>
                    </div>
                    <div className="summaryblock">
                        {item.qty} x${item.price.toFixed(2)}
            </div>
            </div>
             ))}
            
        </aside>
  );
}