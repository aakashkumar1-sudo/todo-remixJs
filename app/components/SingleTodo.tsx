import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { TodoType } from "./Todos";
//@ts-ignore
import { useAlert } from "react-alert";
import { format } from "date-fns";

export default function SingleTodo(props: {
  data: TodoType;
  setAllTodo: React.Dispatch<React.SetStateAction<never[]>>;
}) {
  const [check, setCheck] = useState(false);
  const [activeEditMode, setActiveEditMode] = useState(false);
  const [updateValue, setUpdateValue] = useState("");
  const [updatePriority, setUpdatePriority] = useState("");
  const [updateCategory, setUpdateCategory] = useState("");
  const { id, title, status, date, priority, category } = props.data;
  const { setAllTodo } = props;
  const alert = useAlert();

  const handleDeleteTodo = (id: number) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const exit = existingTodos.filter((t: TodoType) => t.id !== id);
    localStorage.setItem("todo", JSON.stringify(exit));
    setAllTodo(exit);
    alert.success("Delete Todo Successfully complete");
  };

  useEffect(() => {
    if (status === "progress") {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [status]);

  const handleTodoUpdate = (updatedTodo: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const index = existingTodos.findIndex(
      (todo: any) => todo.id === updatedTodo.id
    );
    if (index === -1) {
      alert.error("Not Found Todo ");
      return;
    }
    const newTodos = [
      ...existingTodos.slice(0, index),
      updatedTodo,
      ...existingTodos.slice(index + 1),
    ];
    // Update the todos in localStorage
    localStorage.setItem("todo", JSON.stringify(newTodos));
    //@ts-ignore
    setAllTodo(newTodos);
  };

  const handleCheckboxChange = (e: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const exits = existingTodos.find((t: any) => t.id === id);
    const updatedTodo = {
      ...exits,
      status: status === "completed" ? "progress" : "completed",
    };
    handleTodoUpdate(updatedTodo);
  };

  const handleUpdateTitle = () => {
    if (updateValue.length > 80) {
      alert.error("Todo Text is Maximum 80 character");
    } else {
      const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
      const exits = existingTodos.find((t: any) => t.id === id);
      const updatedTodo = {
        ...exits,
        title: updateValue,
        priority: updatePriority,
        category: updateCategory,
      };
      handleTodoUpdate(updatedTodo);
      setActiveEditMode(false);
    }
  };

  return (
    <div className="mb-5 border-b pb-3">
      <div className="flex items-center justify-between text-center">
        <div className="flex items-center">
          <input
            id={id.toString()}
            title="Update Status"
            type="checkbox"
            checked={check}
            className="mr-4 min-w-[18px] min-h-[18px] cursor-pointer"
            onChange={handleCheckboxChange}
          />
          {activeEditMode ? (
            <input
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
              className="w-full px-3 py-1 outline-[#006BED] bg-transparent"
              type="text"
              placeholder="Updated Title Type...."
            />
          ) : (
            <label
              htmlFor={id.toString()}
              className={
                status === "completed"
                  ? "text-[18px] text-[#4F4F4F] line-through "
                  : "text-[18px] text-[#4F4F4F]  "
              }
            >
              {title}
            </label>
          )}
        </div>
        <div>
          {activeEditMode ? (
            <select
              value={updatePriority}
              onChange={(e) => setUpdatePriority(e.target.value)}
              className="w-full px-3 py-1 outline-[#006BED] bg-transparent"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          ) : (
            <span>{priority}</span>
          )}
        </div>
        <div>
          {activeEditMode ? (
            <select
              value={updateCategory}
              onChange={(e) => setUpdateCategory(e.target.value)}
              className="w-full px-3 py-1 outline-[#006BED] bg-transparent"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="shopping">Shopping</option>
              <option value="office">Office</option>
            </select>
          ) : (
            <span>{category}</span>
          )}
        </div>
        <div>
          <span>{date}</span>
        </div>
        <div className="flex items-center">
          {activeEditMode ? (
            <button
              className="bg-[#006BED] text-white px-2 text-[14px] rounded mr-3"
              onClick={handleUpdateTitle}
            >
              save
            </button>
          ) : (
            <span
              onClick={() => {
                setActiveEditMode(true);
                setUpdateValue(title);
                setUpdatePriority(priority);
                setUpdateCategory(category);
              }}
            >
              <i className="ri-pencil-line text-[25px] cursor-pointer text-[#1EC1EB] mr-6"></i>
            </span>
          )}
          <span onClick={() => handleDeleteTodo(id)}>
            <i className="ri-delete-bin-line cursor-pointer text-[25px] text-[#FE2D55]"></i>
          </span>
        </div>
      </div>
    </div>
  );
}