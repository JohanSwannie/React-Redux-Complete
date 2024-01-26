import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <>
      <div className="h-screen bg-[#171999] select-none hh-man">
        <div className="w-full max-w-7xl mx-auto shadow-lg shadow-white rounded-md px-12 py-16 text-white">
          <h1 className="text-2xl text-center mb-8">My To Do List</h1>
          <AddTodo />
          <ListTodos />
        </div>
      </div>
    </>
  );
}

export default App;
