import { Fragment, useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//@ts-ignore
import { useAlert } from "react-alert";

export default function CreateTodo({ allTodo, setAllTodo }: any) {
  const alert = useAlert();
  const modalRef = useRef(null);
  const [showDate, setShowDate] = useState<boolean>(false);
  const [date, setDate] = useState<string>(
    new Date().toISOString().substr(0, 10)
  );
  const [selected, setSelected] = useState<Date>();

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required("Todo text is required")
      .max(60, "Todo Text Maximum you can add 60 characters"),
    priority: Yup.string().required("Priority is required"),
    category: Yup.string().required("Category is required"),
  });

  let initialValues = {
    title: "",
    priority: "low",
    category: "work",
  };


 const addTodoHandler = (values: { title: string; priority: string; category: string }) => {
    const existingTodosForId = JSON.parse(localStorage.getItem("todo") || "[]");
    addNewTodo({
      id: existingTodosForId.length + 1,
      status: "progress",
      date: date,
      title: values.title,
      priority: values.priority,
      category: values.category,
    });
    initialValues.title = "";
  };

  const addNewTodo = (newTodo: any) => {
    const existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    const newTodos = [newTodo, ...existingTodos];
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setAllTodo(newTodos);
  };

  // Close modal when user click out site
   useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target;
      if (target instanceof HTMLDivElement && target.contains(target)) {
        // handle the contains method here
        setShowDate(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDate]);

  return (
   <Fragment>
      <div className="">
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              addTodoHandler(values);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Fragment>
                <Form
                  className="w-full rounded bg-[#fff] px-4 py-4 shadow-lg shadow-[ rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;] relative"
                >
                  <div className=" md:flex items-center justify-between ">
                    <div className="w-full ">
                      <Field
                        onFocus={() => setShowDate(false)}
                        type="text"
                        placeholder="Add New Task"
                        className="w-full outline-none "
                        name="title"
                        required
                      />
                      <span className="text-[#FE2D55] absolute -bottom-[26px] left-2">
                        <ErrorMessage name="title" />
                      </span>
                    </div>
                    <div className="flex items-center md:mt-0 mt-5 md:border-t-0 border-t md:pt-0 pt-2">
                      <span className="relative mr-2">
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          className="outline-[#006BED] text-[#777]"
                        />
                      </span>
                      <button
                        type="submit"
                        className="uppercase bg-[#006BED] text-[#fff] py-[6px] rounded-md px-4 shadow-lg shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] text-[13px]"
                      >
                        Add
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="mr-4">
                      <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
                        Priority
                      </label>
                      <Field as="select" name="priority" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </Field>
                      <ErrorMessage name="priority" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                      </label>
                      <Field as="select" name="category" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                        <option value="shopping">Shopping</option>
                        <option value="office">Office</option>
                      </Field>
                      <ErrorMessage name="category" component="div" className="text-red-500 text-xs mt-1" />
                    </div>
                  </div>
                  <div
                    className={
                      date
                        ? "absolute -top-[30px] left-0 transform scale-100 transition-all delay-200 ease-in"
                        : "absolute -top-[30px] left-0 transform scale-0 transition-all delay-200 ease-out"
                    }
                  >
                    <span className="bg-[#006BED] text-[#fff] px-4 py-1 rounded">
                      {date && date}
                    </span>
                  </div>
                </Form>
              </Fragment>
            )}
          </Formik>
        </div>
      </div>
    </Fragment>
  );
}
