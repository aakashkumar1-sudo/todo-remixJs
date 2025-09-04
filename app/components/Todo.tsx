import { Fragment, useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoController from "./TodoController";
import Todos from "./Todos";

export default function Todo() {
  const [allTodo, setAllTodo] = useState([]);
  const [filter, setFilter] = useState<string>("all");
  const [sort, setSort] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    setAllTodo(existingTodos);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleDeleteAll = () => {
    localStorage.removeItem("todo");
    setAllTodo([]);
  };

  const filteredTodos = allTodo.filter((todo: any) =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Fragment>
      <div className=" lg:w-[1100px] md:w-[700px] w-[90%]  mx-auto mt-[30px] p-[10px]">
        <div className="mb-8">
          <h2 className="text-center text-[2rem] font-semibold text-[#186BED] flex items-center justify-center">
            <i className="ri-todo-line mr-4"></i> My Todo-s{" "}
          </h2>
        </div>
        <div className="border-b-2 border-[#CECFD0] pb-7">
          <CreateTodo allTodo={allTodo} setAllTodo={setAllTodo} />
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center w-full mr-4">
            <input
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={handleClearSearch}
              className="ml-2 bg-gray-300 text-black px-3 py-2 rounded"
            >
              Clear
            </button>
          </div>
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white px-5 py-2 rounded"
          >
            Delete All
          </button>
        </div>
        <div>
          <TodoController
            {...{ filter, setFilter, sort, setSort, allTodo: filteredTodos, setAllTodo }}
          />
        </div>
        <div>
          <Todos
            {...{ filter, setFilter, sort, setSort, allTodo: filteredTodos, setAllTodo }}
          />
        </div>
      </div>
    </Fragment>
  );
}