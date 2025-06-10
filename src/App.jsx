import Greeting from "./components/Greeting.jsx";
import StatusMessage from "./components/StatusMessage.jsx";

function App() {
  const helloWorld = 'Hello, world!';
  const isLoggedIn = true;
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">
        {helloWorld}
      </h1>
     <StatusMessage isLoggedIn={isLoggedIn} />
      <Greeting />
    </div>
  );
}

export default App