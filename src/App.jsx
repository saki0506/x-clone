function App() {
  const helloWorld = 'Hello, world!';
  const loggedInText = 'You are logged in.';
  const loggedOutText = 'You are not logged in.';
  const isLoggedIn = false;
  const isDone = false;
  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-3xl font-bold">
        {helloWorld}
      </h1>
      {isLoggedIn ? (
        <p className="text-green-500">{loggedInText}</p>
      ) : (
        <p className="text-red-500">{loggedOutText}</p>
      )}

      {isDone ?
        <p className="text-blue-500">done</p> :
        <p className="text-yellow-500">not yet</p>
      }
    </div>
  );
}

export default App
