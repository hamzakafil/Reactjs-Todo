import React from "react";
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function TodoList(props) {
  const items = props.items;
 

  const itemList = items.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
        <input Classname = "listInput" type="text" id={item.key} value={item.text} onChange={(e)=>props.editItem(e.target.value, item.key)}/>
        <span >
          <FontAwesomeIcon className="favicon" icon="trash" onClick={()=>props.deleteItem(item.key)}></FontAwesomeIcon>
        </span>
        </p>
      </div>
    );
  });

  return(
      <div>
          {itemList}
      </div>
  );


}

export default TodoList;
