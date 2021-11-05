import React, {useRef} from "react";
import {AiFillEdit} from "react-icons/ai";
import {IoClose} from "react-icons/io5";
import {BsFillBookmarkCheckFill} from "react-icons/all";

export const TodoItem = (props) => {
  const {item, updateTodo, removeTodo, completeTodo} = props;
  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({id, item: value});
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <span style={{'margin': '20px'}}>{new Date().toLocaleTimeString()}</span>
        <button
          onClick={() => changeFocus()}
        >
          <AiFillEdit/>
        </button>
        {item.completed === false && (

          <button
            style={{color: "green"}}
            onClick={() => completeTodo(item.id)}
          >
            <BsFillBookmarkCheckFill/>
          </button>
        )}
        <button
          onClick={() => removeTodo(item.id)}
        >
          <IoClose/>
        </button>
      </div>
    </li>
  );
};
