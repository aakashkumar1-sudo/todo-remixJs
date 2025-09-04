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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 39,
          columnNumber: 7
        },
        this
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 81,
          columnNumber: 7
        },
        this
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
var tailwind_default = "/build/_assets/tailwind-GGQZTAY7.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Aakash's Todo App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
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
var import_react3 = require("react"), import_formik = require("formik"), Yup = __toESM(require("yup")), import_react_alert = require("react-alert"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
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
  }, [showDate]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_formik.Formik,
    {
      initialValues,
      validationSchema,
      onSubmit: (values, { setSubmitting, resetForm }) => {
        addTodoHandler(values), resetForm();
      },
      children: ({ isSubmitting }) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_formik.Form,
        {
          className: "w-full rounded bg-[#fff] px-4 py-4 shadow-lg shadow-[ rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;] relative",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: " md:flex items-center justify-between ", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full ", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  import_formik.Field,
                  {
                    onFocus: () => setShowDate(!1),
                    type: "text",
                    placeholder: "Add New Task",
                    className: "w-full outline-none ",
                    name: "title",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 85,
                    columnNumber: 23
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-[#FE2D55] absolute -bottom-[26px] left-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_formik.ErrorMessage, { name: "title" }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 94,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 93,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/CreateTodo.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center md:mt-0 mt-5 md:border-t-0 border-t md:pt-0 pt-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "relative mr-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "input",
                  {
                    type: "date",
                    value: date,
                    onChange: (e) => setDate(e.target.value),
                    required: !0,
                    className: "outline-[#006BED] text-[#777]"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 99,
                    columnNumber: 25
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 98,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                  "button",
                  {
                    type: "submit",
                    className: "uppercase bg-[#006BED] text-[#fff] py-[6px] rounded-md px-4 shadow-lg shadow-[rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;] text-[13px]",
                    children: "Add"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 107,
                    columnNumber: 23
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/CreateTodo.tsx",
                lineNumber: 97,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/CreateTodo.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center mt-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mr-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "priority", className: "block text-sm font-medium text-gray-700", children: "Priority" }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 117,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_formik.Field, { as: "select", name: "priority", className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "high", children: "High" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 121,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "medium", children: "Medium" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 122,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "low", children: "Low" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 123,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 120,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_formik.ErrorMessage, { name: "priority", component: "div", className: "text-red-500 text-xs mt-1" }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 125,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/CreateTodo.tsx",
                lineNumber: 116,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "category", className: "block text-sm font-medium text-gray-700", children: "Category" }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 128,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_formik.Field, { as: "select", name: "category", className: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "work", children: "Work" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 132,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "personal", children: "Personal" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 133,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "shopping", children: "Shopping" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 134,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("option", { value: "office", children: "Office" }, void 0, !1, {
                    fileName: "app/components/CreateTodo.tsx",
                    lineNumber: 135,
                    columnNumber: 25
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 131,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_formik.ErrorMessage, { name: "category", component: "div", className: "text-red-500 text-xs mt-1" }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 137,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/CreateTodo.tsx",
                lineNumber: 127,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/CreateTodo.tsx",
              lineNumber: 115,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "div",
              {
                className: date ? "absolute -top-[30px] left-0 transform scale-100 transition-all delay-200 ease-in" : "absolute -top-[30px] left-0 transform scale-0 transition-all delay-200 ease-out",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "bg-[#006BED] text-[#fff] px-4 py-1 rounded", children: date && date }, void 0, !1, {
                  fileName: "app/components/CreateTodo.tsx",
                  lineNumber: 147,
                  columnNumber: 21
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/CreateTodo.tsx",
                lineNumber: 140,
                columnNumber: 19
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/CreateTodo.tsx",
          lineNumber: 80,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/CreateTodo.tsx",
        lineNumber: 79,
        columnNumber: 15
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/CreateTodo.tsx",
      lineNumber: 70,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/CreateTodo.tsx",
    lineNumber: 69,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/CreateTodo.tsx",
    lineNumber: 68,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/CreateTodo.tsx",
    lineNumber: 67,
    columnNumber: 4
  }, this);
}

// app/components/TodoController.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TodoController({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end mt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex mr-5  items-center text-[#4F4F4F] text-[14px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "mr-3", children: "Filter" }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "all", children: "All Todo" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "completed", children: "Completed" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 63,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "progress", children: "Progress" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/TodoController.tsx",
          lineNumber: 56,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/TodoController.tsx",
      lineNumber: 53,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex  items-center text-[#4F4F4F] text-[14px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h4", { className: "mr-3", children: "Sort" }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "default", children: "Default" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 77,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "-1", children: "Newest" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { value: "1", children: "Oldest" }, void 0, !1, {
              fileName: "app/components/TodoController.tsx",
              lineNumber: 79,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/TodoController.tsx",
          lineNumber: 71,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("i", { className: "ri-sort-desc text-[22px] text-[#186bed] ml-1" }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/TodoController.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/TodoController.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/TodoController.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/TodoController.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

// public/assets/notfound.gif
var notfound_default = "/build/_assets/notfound-SJSQPGPO.gif";

// app/components/SingleTodo.tsx
var import_react4 = require("react"), import_react_alert2 = require("react-alert"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mb-5 border-b pb-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          id: id.toString(),
          title: "Update Status",
          type: "checkbox",
          checked: check,
          className: "mr-4 min-w-[18px] min-h-[18px] cursor-pointer",
          onChange: handleCheckboxChange
        },
        void 0,
        !1,
        {
          fileName: "app/components/SingleTodo.tsx",
          lineNumber: 88,
          columnNumber: 11
        },
        this
      ),
      activeEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "input",
        {
          value: updateValue,
          onChange: (e) => setUpdateValue(e.target.value),
          className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
          type: "text",
          placeholder: "Updated Title Type...."
        },
        void 0,
        !1,
        {
          fileName: "app/components/SingleTodo.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "label",
        {
          htmlFor: id.toString(),
          className: status === "completed" ? "text-[18px] text-[#4F4F4F] line-through " : "text-[18px] text-[#4F4F4F]  ",
          children: title
        },
        void 0,
        !1,
        {
          fileName: "app/components/SingleTodo.tsx",
          lineNumber: 105,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 87,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: activeEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "select",
      {
        value: updatePriority,
        onChange: (e) => setUpdatePriority(e.target.value),
        className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "high", children: "High" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "medium", children: "Medium" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "low", children: "Low" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 126,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SingleTodo.tsx",
        lineNumber: 119,
        columnNumber: 13
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: priority }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 129,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 117,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: activeEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "select",
      {
        value: updateCategory,
        onChange: (e) => setUpdateCategory(e.target.value),
        className: "w-full px-3 py-1 outline-[#006BED] bg-transparent",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "work", children: "Work" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "personal", children: "Personal" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "shopping", children: "Shopping" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 141,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: "office", children: "Office" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 142,
            columnNumber: 15
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/SingleTodo.tsx",
        lineNumber: 134,
        columnNumber: 13
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: category }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 132,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { children: date }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 148,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center", children: [
      activeEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "button",
        {
          className: "bg-[#006BED] text-white px-2 text-[14px] rounded mr-3",
          onClick: handleUpdateTitle,
          children: "save"
        },
        void 0,
        !1,
        {
          fileName: "app/components/SingleTodo.tsx",
          lineNumber: 153,
          columnNumber: 13
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "span",
        {
          onClick: () => {
            setActiveEditMode(!0), setUpdateValue(title), setUpdatePriority(priority), setUpdateCategory(category);
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-pencil-line text-[25px] cursor-pointer text-[#1EC1EB] mr-6" }, void 0, !1, {
            fileName: "app/components/SingleTodo.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/SingleTodo.tsx",
          lineNumber: 160,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { onClick: () => handleDeleteTodo(id), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("i", { className: "ri-delete-bin-line cursor-pointer text-[25px] text-[#FE2D55]" }, void 0, !1, {
        fileName: "app/components/SingleTodo.tsx",
        lineNumber: 172,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/SingleTodo.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SingleTodo.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SingleTodo.tsx",
    lineNumber: 86,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SingleTodo.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/components/Todos.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function Todos({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: allTodo.length ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", children: "Title" }, void 0, !1, {
        fileName: "app/components/Todos.tsx",
        lineNumber: 18,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", children: "Priority" }, void 0, !1, {
        fileName: "app/components/Todos.tsx",
        lineNumber: 19,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", children: "Category" }, void 0, !1, {
        fileName: "app/components/Todos.tsx",
        lineNumber: 20,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", children: "Date" }, void 0, !1, {
        fileName: "app/components/Todos.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-bold", children: "Actions" }, void 0, !1, {
        fileName: "app/components/Todos.tsx",
        lineNumber: 22,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Todos.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    allTodo.map((data, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(SingleTodo, { data, setAllTodo }, index, !1, {
      fileName: "app/components/Todos.tsx",
      lineNumber: 25,
      columnNumber: 15
    }, this))
  ] }, void 0, !0, {
    fileName: "app/components/Todos.tsx",
    lineNumber: 16,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col justify-center items-center pt-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "img",
      {
        width: 200,
        height: 200,
        src: notfound_default,
        className: "rounded-full",
        alt: "not found images"
      },
      void 0,
      !1,
      {
        fileName: "app/components/Todos.tsx",
        lineNumber: 30,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h2", { className: "mt-2 text-[22px]", children: "Don't Create Yet Any Todo " }, void 0, !1, {
      fileName: "app/components/Todos.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Todos.tsx",
    lineNumber: 29,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/Todos.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Todos.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/components/Todo.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: " lg:w-[1100px] md:w-[700px] w-[90%]  mx-auto mt-[30px] p-[10px]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-center text-[2rem] font-semibold text-[#186BED] flex items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("i", { className: "ri-todo-line mr-4" }, void 0, !1, {
        fileName: "app/components/Todo.tsx",
        lineNumber: 39,
        columnNumber: 13
      }, this),
      " My Todo-s",
      " "
    ] }, void 0, !0, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 38,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "border-b-2 border-[#CECFD0] pb-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(CreateTodo, { allTodo, setAllTodo }, void 0, !1, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-between items-center mb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex items-center w-full mr-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            type: "text",
            placeholder: "Search Todos",
            value: searchTerm,
            onChange: handleSearchChange,
            className: "border p-2 rounded w-full"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Todo.tsx",
            lineNumber: 47,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "button",
          {
            onClick: handleClearSearch,
            className: "ml-2 bg-gray-300 text-black px-3 py-2 rounded",
            children: "Clear"
          },
          void 0,
          !1,
          {
            fileName: "app/components/Todo.tsx",
            lineNumber: 54,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/Todo.tsx",
        lineNumber: 46,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "button",
        {
          onClick: handleDeleteAll,
          className: "bg-red-500 text-white px-5 py-2 rounded",
          children: "Delete All"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Todo.tsx",
          lineNumber: 61,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      TodoController,
      {
        filter,
        setFilter,
        sort,
        setSort,
        allTodo: filteredTodos,
        setAllTodo
      },
      void 0,
      !1,
      {
        fileName: "app/components/Todo.tsx",
        lineNumber: 69,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      Todos,
      {
        filter,
        setFilter,
        sort,
        setSort,
        allTodo: filteredTodos,
        setAllTodo
      },
      void 0,
      !1,
      {
        fileName: "app/components/Todo.tsx",
        lineNumber: 74,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Todo.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Todo.tsx",
    lineNumber: 36,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Todo.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_react_alert3 = require("react-alert"), import_react_alert_template_basic = __toESM(require("react-alert-template-basic")), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function HomePage() {
  let options = {
    // you can also just use 'bottom center'
    position: import_react_alert3.positions.BOTTOM_CENTER,
    timeout: 3e3,
    offset: "30px",
    // you can also just use 'scale'
    transition: import_react_alert3.transitions.SCALE
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react6.Suspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: "Loading..." }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 27
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react_alert3.Provider, { template: import_react_alert_template_basic.default, ...options, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Todo, {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WV4ASKYU.js", imports: ["/build/_shared/chunk-OEO3PO3H.js", "/build/_shared/chunk-7BM7HZWW.js", "/build/_shared/chunk-SBNNL67F.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-RRBXRPTR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-SCAM3S7I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "ade50401", hmr: void 0, url: "/build/manifest-ADE50401.js" };

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
//# sourceMappingURL=index.js.map
