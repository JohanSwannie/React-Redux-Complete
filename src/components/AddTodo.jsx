import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [todoMsg, setTodoMsg] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todoMsg) {
      dispatch(addTodo(todoMsg));
    }
    setTodoMsg("");
  };

  return (
    <form onSubmit={addTodoHandler} className="flex border-white border-2 mb-8">
      <input
        type="text"
        className="w-full border placeholder:text-white-700 border-black/10 px-3 outline-none duration-150 bg-white/20 py-1.5"
        placeholder="Add text for To Do"
        value={todoMsg}
        onChange={(event) => setTodoMsg(event.target.value)}
      />
      <button
        type="submit"
        className="text white bg-indigo-500 px-6 py-2 border-0 hover:bg-indigo-950 rounded text-lg"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
