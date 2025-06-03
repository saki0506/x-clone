import Greeting      from "./components/Greeting";
import WelcomeFunc   from "./components/WelcomeFunc";
import WelcomeClass  from "./components/WelcomeClass";

function App() {
  return (
    <div className="flex flex-col items-center gap-4 mt-16">
      <Greeting />
      <WelcomeFunc />
      <WelcomeClass />
    </div>
  );
}

export default App;
