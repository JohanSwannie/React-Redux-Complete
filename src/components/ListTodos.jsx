import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const ListTodos = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  return (
    <div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListTodos;
