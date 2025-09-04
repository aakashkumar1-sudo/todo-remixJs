import NotFoundImage from "../../public/assets/notfound.gif";
import SingleTodo from "./SingleTodo";

export default function Todos({
  filter,
  setFilter,
  sort,
  setSort,
  allTodo,
  setAllTodo,
}: any) {
  return (
    <div className="mt-10">
      <div>
        {allTodo.length ? (
          <>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">Title</span>
              <span className="font-bold">Priority</span>
              <span className="font-bold">Category</span>
              <span className="font-bold">Date</span>
              <span className="font-bold">Actions</span>
            </div>
            {allTodo.map((data: TodoType, index: number) => (
              <SingleTodo key={index} data={data} setAllTodo={setAllTodo} />
            ))}
          </>
        ) : (
          <div className="flex flex-col justify-center items-center pt-8">
            <img
              width={200}
              height={200}
              src={NotFoundImage}
              className="rounded-full"
              alt="not found images"
            />
            <h2 className="mt-2 text-[22px]">Don't Create Yet Any Todo </h2>
          </div>
        )}
      </div>
    </div>
  );
}