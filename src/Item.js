import Itemlist from "./Itemlist"

function Item({itemObj, onDeleteItem, onCheckItem}) {

  return (
    <div className="todoo">
      {/* <li className="lister">{itemList.quantity + " "+itemList.name}</li> */}
      <li className="lister">{itemObj.quantity + " "+ itemObj.name}</li>
      <button className="Tresh" onClick={()=>onDeleteItem(itemObj.id)}>Trash</button>
      <button className="Czech" onClick={()=>onCheckItem(itemObj.id)}>{Itemlist.isChecked ? "checker" : <i className="faze"></i>}Check</button>
    </div>
  )
}

export default Item
