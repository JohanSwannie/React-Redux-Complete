import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo, deleteTodo } from "../features/todo/todoSlice";

function Todos({ todo }) {
  const [todoText, setTodoText] = useState(todo.text);
  const dispatch = useDispatch();

  return (
    <div className="flex border border-black/10 rounded-lg bg-[#5c64d2] px-2 py-1 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white">
      <input
        type="text"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
        className="w-full bg-transparent rounded-lg"
      />
      <button
        className="bg-[#14195d] px-2 py-1 border-white border-2"
        onClick={() => dispatch(updateTodo([todo.id, todoText]))}
      >
        Update
      </button>
      <button
        className="bg-[#14195d] px-2 py-1 border-white border-2"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        ❌
      </button>
    </div>
  );
}

export default Todos;
