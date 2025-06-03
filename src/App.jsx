import Greeting from "./components/Greeting.jsx";
import LoggedIn from "./components/LoggedIn.jsx";
import LoggedOut from "./components/LoggedOut.jsx";

function App() {
  const helloWorld = 'Hello, world!';
  const isLoggedIn = true;
  const isDone = false;
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">
        {helloWorld}
      </h1>
      {isLoggedIn ? (
        <LoggedIn />
      ) : (
        <LoggedOut />
      )}

      {isDone ?
        <p className="text-blue-500">done</p> :
        <p className="text-yellow-500">not yet</p>
      }
      <Greeting />
    </div>
  );
}

export default App