import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import GameList from './GameList'
import Game from './Component/Game';

// componentDidMount() {
//   // use react set state to add items to local cart
//   this.setState({
//     product: getDataBase()
//   })
// }

// componentDidUpdate(props) {
//   const 
//   // submit update to database
    // updateDataBase();
// }

// function updateDataBase(item) {

// }

// function getDataBase() {

//   // Array of items
//   return [];
// }

function App () {
  // const localItems = JSON.parse(localStorage.getItem('items'));
  // const [items, setItems] = useState(localItems || INIT_ITEMS);

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(items));
  // }, [items])

  // const addItem = text => {
  //   const newItems = [{ text }, ...items];
  //   setItems(newItems);
  // };

  // const removeItem = (e, index) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   const newItems = [...items];
  //   newItems.splice(index, 1);
  //   setItems(newItems);
  // };
  const { products } = GameList;

  return (
    <div className="App">
      <div className="entry">
      <div className="block1">
      <h2>Products</h2>
      <div className="entry">
        {products.map((product) => (
          <Game key={product.id} product={product}></Game>
        ))}
      </div>
        </div>
        </div>
    </div>
  );
}
export default App;
