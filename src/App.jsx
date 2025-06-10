import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900">
      <h1 className="text-white text-2xl font-bold mb-4">
        リアルタイムテキスト表示
      </h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="ここにテキストを入力してください"
      />

      <p className="text-lg text-white bg-gray-800 p-4 rounded min-h-[60px] min-w-[300px] text-center">
        {inputValue || "入力されたテキストがここに表示されます"}
      </p>
    </div>
  );
}

export default App;