import { add, addByValue, remove, value } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/Hook";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();

  const { count } = useAppSelector((state: RootState) => state.counter); // ?

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border border-purple-500 rounded-md bg-pink-500 p-10">
        <button
          onClick={() => dispatch(remove())}
          className="px-3 py-2 rounded-md bg-blue-500 text-lg text-white"
        >
          remove
        </button>
        <h1 className="mx-10 text-lg  text-gray-600">{count}</h1>
        <button
          onClick={() => dispatch(add())}
          className="px-3 py-2 rounded-md bg-green-500 text-lg text-white"
        >
          add
        </button>
        <button
          onClick={() => dispatch(value({ point: 3 }))}
          className="px-3 py-2 rounded-md bg-green-500 text-lg text-white"
        >
          value by object 3
        </button>
        <button
          onClick={() => dispatch(addByValue(5))}
          className="px-3 py-2 rounded-md bg-green-500 text-lg text-white"
        >
          add by value 5
        </button>
      </div>
    </div>
  );
}

export default App;
