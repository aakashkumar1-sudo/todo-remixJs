var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-C7KWZ245.css";

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Aakash's Todo App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
  },
  {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon"
  }
];

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => HomePage
});
var import_react6 = require("react");

// app/components/Todo.tsx
var import_react5 = require("react");

// app/components/CreateTodo.tsx
var import_react3 = require("react"), import_formik = require("formik"), Yup = __toESM(require("yup")), import_react_alert = require("react-alert"), import_jsx_runtime3 = require("react/jsx-runtime");
function CreateTodo({ allTodo, setAllTodo }) {
  let alert = (0, import_react_alert.useAlert)(), modalRef = (0, import_react3.useRef)(null), [showDate, setShowDate] = (0, import_react3.useState)(!1), [date, setDate] = (0, import_react3.useState)(
    (/* @__PURE__ */ new Date()).toISOString().substr(0, 10)
  ), [selected, setSelected] = (0, import_react3.useState)(), validationSchema = Yup.object().shape({
    title: Yup.string().required("Todo text is required").max(60, "Todo Text Maximum you can add 60 characters"),
    priority: Yup.string().required("Priority is required"),
    category: Yup.string().required("Category is required")
  }), initialValues = {
    title: "",
    priority: "low",
    category: "work"
  }, addTodoHandler = (values) => {
    let existingTodosForId = JSON.parse(localStorage.getItem("todo") || "[]");
    addNewTodo({
      id: existingTodosForId.length + 1,
      status: "progress",
      date,
      title: values.title,
      priority: values.priority,
      category: values.category
    }), initialValues.title = "";
  }, addNewTodo = (newTodo) => {
    let existingTodos = JSON.parse(localStorage.getItem("todo") || "[]"), newTodos = [newTodo, ...existingTodos];
    localStorage.setItem("todo", JSON.stringify(newTodos)), setAllTodo(newTodos);
  };
  return (0, import_react3.useEffect)(() => {
    function handleClickOutside(event) {
      let target = event.target;
      target instanceof HTMLDivElement && target.contains(target) && setShowDate(!1);
    }
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDate]), /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_formik.Formik,
    {
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting, resetForm }) => {
        addTodoHandler(values), resetForm();
      },
      children: ({ isSubmitting }) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_formik.Form,
        {
          className: "w-full rounded bg-[#fff] px-4 py-4 shadow-lg shadow-[ rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;] relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: " md:flex items-center justify-between ", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "w-full ", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  import_formik.Field,
                  {
                    onFocus: () => setShowDate(!1),
                    type: "text",
                    placeholder: "Add New Task",
                    className: "w-full outline-none ",
                    name: "title",
                    required: !0
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-[#FE2D55] absolute -bottom-[26px] left-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_formik.ErrorMessage, { name: "title" }) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center md:mt-0 mt-5 md:border-t-0 border-t md:pt-0 pt-2", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "relative mr-2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "input",
                  {
                    type: "date",
                    value: date,
                    onChange: (e) => setDate(e.target.value),
                    required: !0,
                    className: "outline-[#006BED] text-[#777]"
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "button",
                  {
                    type: "submit",
                    className: "uppercase bg-[#006BED] text-[#fff] py-[6px] rounded-md px-4 shadow-lg shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] text-[13px]",
                    children: "Add"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "mr-4", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "priority", className: "block text-sm font-medium text-gray-700", children: "Priority" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_formik.Field, { as: "select", name: "priority", className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "high", children: "High" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "medium", children: "Medium" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "low", children: "Low" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_formik.ErrorMessage, { name: "priority", component: "div", className: "text-red-500 text-xs mt-1" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700", children: "Category" }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_formik.Field, { as: "select", name: "category", className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "work", children: "Work" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "personal", children: "Personal" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "shopping", children: "Shopping" }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "office", children: "Office" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_formik.ErrorMessage, { name: "category", component: "div", className: "text-red-500 text-xs mt-1" })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "div",
              {
                className: date ? "absolute -top-[30px] left-0 transform scale-100 transition-all delay-200 ease-in" : "absolute -top-[30px] left-0 transform scale-0 transition-all delay-200 ease-out",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "bg-[#006BED] text-[#fff] px-4 py-1 rounded", children: date && date })
              }
            )
          ]
        }
      ) })
    }
  ) }) }) });
}

// app/components/TodoController.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function TodoController({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "flex justify-end mt-5", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex mr-5  items-center text-[#4F4F4F] text-[14px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "mr-3", children: "Filter" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "select",
        {
          className: "w-[100px] md:w-[150px] p-1 rounded border border-[#BDBDBD] outline-[#006BED]",
          name: "filter",
          id: "",
          onChange: (e) => {
            let existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
            if (e.target.value === "completed") {
              let todo = existingTodos.filter(
                (t) => t.status === "completed"
              );
              setAllTodo(todo);
            } else if (e.target.value === "progress") {
              let todo = existingTodos.filter(
                (t) => t.status === "progress"
              );
              setAllTodo(todo);
            } else
              setAllTodo(existingTodos);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "all", children: "All Todo" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "completed", children: "Completed" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "progress", children: "Progress" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex  items-center text-[#4F4F4F] text-[14px]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h4", { className: "mr-3", children: "Sort" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "select",
        {
          className: " w-[100px] md:w-[150px] p-1 rounded border border-[#BDBDBD] outline-[#006BED]",
          name: "filter",
          id: "",
          onChange: (e) => {
            let existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
            if (e.target.value === "-1") {
              let sorted = existingTodos.sort((a, b) => new Date(a.date) - new Date(b.date));
              setAllTodo(sorted);
            } else if (e.target.value === "1") {
              let sorted = existingTodos.sort((a, b) => new Date(b.date) - new Date(a.date));
              setAllTodo(sorted);
            } else
              setAllTodo(existingTodos);
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "default", children: "Default" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "-1", children: "Newest" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("option", { value: "1", children: "Oldest" })
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("i", { className: "ri-sort-desc text-[22px] text-[#186bed] ml-1" }) })
    ] })
  ] }) });
}

// public/assets/notfound.gif
var notfound_default = "/build/_assets/notfound-SJSQPGPO.gif";

// app/components/SingleTodo.tsx
var import_react4 = require("react"), import_react_alert2 = require("react-alert"), import_jsx_runtime5 = require("react/jsx-runtime");
function SingleTodo(props) {
  let [check, setCheck] = (0, import_react4.useState)(!1), [activeEditMode, setActiveEditMode] = (0, import_react4.useState)(!1), [updateValue, setUpdateValue] = (0, import_react4.useState)(""), [updatePriority, setUpdatePriority] = (0, import_react4.useState)(""), [updateCategory, setUpdateCategory] = (0, import_react4.useState)(""), { id, title, status, date, priority, category } = props.data, { setAllTodo } = props, alert = (0, import_react_alert2.useAlert)(), handleDeleteTodo = (id2) => {
    let exit = JSON.parse(localStorage.getItem("todo") || "[]").filter((t) => t.id !== id2);
    localStorage.setItem("todo", JSON.stringify(exit)), setAllTodo(exit), alert.success("Delete Todo Successfully complete");
  };
  (0, import_react4.useEffect)(() => {
    setCheck(status !== "progress");
  }, [status]);
  let handleTodoUpdate = (updatedTodo) => {
    let existingTodos = JSON.parse(localStorage.getItem("todo") || "[]"), index = existingTodos.findIndex(
      (todo) => todo.id === updatedTodo.id
    );
    if (index === -1) {
      alert.error("Not Found Todo ");
      return;
    }
    let newTodos = [
      ...existingTodos.slice(0, index),
      updatedTodo,
      ...existingTodos.slice(index + 1)
    ];
    localStorage.setItem("todo", JSON.stringify(newTodos)), setAllTodo(newTodos);
  }, handleCheckboxChange = (e) => {
    let updatedTodo = {
      ...JSON.parse(localStorage.getItem("todo") || "[]").find((t) => t.id === id),
      status: status === "completed" ? "progress" : "completed"
    };
    handleTodoUpdate(updatedTodo);
  }, handleUpdateTitle = () => {
    if (updateValue.length > 80)
      alert.error("Todo Text is Maximum 80 character");
    else {
      let updatedTodo = {
        ...JSON.parse(localStorage.getItem("todo") || "[]").find((t) => t.id === id),
        title: updateValue,
        priority: updatePriority,
        category: updateCategory
      };
      handleTodoUpdate(updatedTodo), setActiveEditMode(!1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mb-5 border-b pb-3", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center justify-between text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          id: id.toString(),
          title: "Update Status",
          type: "checkbox",
          checked: check,
          className: "mr-4 min-w-[18px] min-h-[18px] cursor-pointer",
          onChange: handleCheckboxChange
        }
      ),
      activeEditMode ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          value: updateValue,
          onChange: (e) => setUpdateValue(e.target.value),
          className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
          type: "text",
          placeholder: "Updated Title Type...."
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "label",
        {
          htmlFor: id.toString(),
          className: status === "completed" ? "text-[18px] text-[#4F4F4F] line-through " : "text-[18px] text-[#4F4F4F]  ",
          children: title
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: activeEditMode ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "select",
      {
        value: updatePriority,
        onChange: (e) => setUpdatePriority(e.target.value),
        className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "high", children: "High" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "medium", children: "Medium" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "low", children: "Low" })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: priority }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: activeEditMode ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "select",
      {
        value: updateCategory,
        onChange: (e) => setUpdateCategory(e.target.value),
        className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "work", children: "Work" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "personal", children: "Personal" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "shopping", children: "Shopping" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("option", { value: "office", children: "Office" })
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: category }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: date }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex items-center", children: [
      activeEditMode ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          className: "bg-[#006BED] text-white px-2 text-[14px] rounded mr-3",
          onClick: handleUpdateTitle,
          children: "save"
        }
      ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          onClick: () => {
            setActiveEditMode(!0), setUpdateValue(title), setUpdatePriority(priority), setUpdateCategory(category);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { className: "ri-pencil-line text-[25px] cursor-pointer text-[#1EC1EB] mr-6" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { onClick: () => handleDeleteTodo(id), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("i", { className: "ri-delete-bin-line cursor-pointer text-[25px] text-[#FE2D55]" }) })
    ] })
  ] }) });
}

// app/components/Todos.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Todos({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: allTodo.length ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-bold", children: "Title" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-bold", children: "Priority" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-bold", children: "Category" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-bold", children: "Date" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "font-bold", children: "Actions" })
    ] }),
    allTodo.map((data, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SingleTodo, { data, setAllTodo }, index))
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col justify-center items-center pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "img",
      {
        width: 200,
        height: 200,
        src: notfound_default,
        className: "rounded-full",
        alt: "not found images"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "mt-2 text-[22px]", children: "Don't Create Yet Any Todo " })
  ] }) }) });
}

// app/components/Todo.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Todo() {
  let [allTodo, setAllTodo] = (0, import_react5.useState)([]), [filter, setFilter] = (0, import_react5.useState)("all"), [sort, setSort] = (0, import_react5.useState)(""), [searchTerm, setSearchTerm] = (0, import_react5.useState)("");
  (0, import_react5.useEffect)(() => {
    let existingTodos = JSON.parse(localStorage.getItem("todo") || "[]");
    setAllTodo(existingTodos);
  }, []);
  let handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  }, handleClearSearch = () => {
    setSearchTerm("");
  }, handleDeleteAll = () => {
    localStorage.removeItem("todo"), setAllTodo([]);
  }, filteredTodos = allTodo.filter(
    (todo) => todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: " lg:w-[1100px] md:w-[700px] w-[90%]  mx-auto mt-[30px] p-[10px]", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("h2", { className: "text-center text-[2rem] font-semibold text-[#186BED] flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", { className: "ri-todo-line mr-4" }),
      " My Todo-s",
      " "
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "border-b-2 border-[#CECFD0] pb-7", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CreateTodo, { allTodo, setAllTodo }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "flex items-center w-full mr-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "input",
          {
            type: "text",
            placeholder: "Search Todos",
            value: searchTerm,
            onChange: handleSearchChange,
            className: "border p-2 rounded w-full"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "button",
          {
            onClick: handleClearSearch,
            className: "ml-2 bg-gray-300 text-black px-3 py-2 rounded",
            children: "Clear"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "button",
        {
          onClick: handleDeleteAll,
          className: "bg-red-500 text-white px-5 py-2 rounded",
          children: "Delete All"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      TodoController,
      {
        filter,
        setFilter,
        sort,
        setSort,
        allTodo: filteredTodos,
        setAllTodo
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Todos,
      {
        filter,
        setFilter,
        sort,
        setSort,
        allTodo: filteredTodos,
        setAllTodo
      }
    ) })
  ] }) });
}

// app/routes/index.tsx
var import_react_alert3 = require("react-alert"), import_react_alert_template_basic = __toESM(require("react-alert-template-basic")), import_jsx_runtime8 = require("react/jsx-runtime");
function HomePage() {
  let options = {
    // you can also just use 'bottom center'
    position: import_react_alert3.positions.BOTTOM_CENTER,
    timeout: 3e3,
    offset: "30px",
    // you can also just use 'scale'
    transition: import_react_alert3.transitions.SCALE
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: "Loading..." }), children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_alert3.Provider, { template: import_react_alert_template_basic.default, ...options, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Todo, {}) }) }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HPQPHJZH.js", imports: ["/build/_shared/chunk-HDMCMAVD.js", "/build/_shared/chunk-5A7HEGCY.js", "/build/_shared/chunk-MFPRU5OA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MPGBT2Y5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-KIO537KM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "f99e7de0", hmr: void 0, url: "/build/manifest-F99E7DE0.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, v2_errorBoundary: !1, v2_headers: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
