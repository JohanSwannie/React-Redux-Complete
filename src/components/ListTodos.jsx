import { useSelector } from "react-redux";
import Todos from "./Todos";

const ListTodos = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="flex flex-wrap gap-y-2">
      {todos.map((todo) => (
        <div key={todo.id} className="w-full">
          <Todos todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default ListTodos;
