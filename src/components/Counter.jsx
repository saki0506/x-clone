import {useState} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        {count}
      </h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => setCount(count + 1)}
      >
       Count UP
      </button>
    </div>
  )
}

export default Counter;