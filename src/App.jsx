import "./App.css";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Header from "./components/Header";

function App() {
  return (
    <div className="max-w-xl m-0 mx-auto bg-white min-h-screen">
      <Header />
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default App;
