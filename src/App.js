import './App.css';
import Header from './Header.js';
import Form from './Form.js';
import Itemlist from './Itemlist';
import { useState } from "react";
import Footer from './Footer.js'

function App() {
  const [items, setItems] = useState([])

  const [sortBy, setSortBy] = useState("name");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name")
    sortedItems  = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === "checked") items.slice().sort((a, b) => Number(b.number));
  
  function handleAddItems(item){
    setItems(items => [...items, item])
}
function handleDel(id){
setItems((items) => items.filter((item) => item.id !== id))
}
function handleChe(id){
  setItems((items) => items.map((item) => item.id === id ? {...item, isChecked: !item.isChecked } : item ));
} 
function handleClearLi(){
  const confirmed = window.confirm("yoo");
  if(confirmed){
    setItems([]);
  } 
}

  return (
    <div>
    <Header />
    <Form onAddItem={handleAddItems} />
    <Itemlist items={items} onDeleteItem={handleDel} onCheckItem={handleChe}/>
     <button onClick={handleClearLi}>Clear</button>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Input</option>
        <option value="Name">Name</option>
        <option value="checked">Status order</option>
      </select>
      <Footer items={items}/>
    </div>
  )
}

export default App;
