import { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

function App() {
  const [goalItems, setGoalItems] = useState(DUMMY_GOALS);

  const goalAddHandler = (goal) => {
    setGoalItems((prevState) => {
      return [goal, ...prevState];
    });
  };

  const goalRemoveHandler = (id) => {
    setGoalItems(prevState => {
      return prevState.filter(goal => goal.id !== id);
    })
  };

  return (
    <div className="App">
      <NewGoal onAddGoal={goalAddHandler} />
      <GoalList items={goalItems} onRemoveGoal={goalRemoveHandler} />
    </div>
  );
}

export default App;

const DUMMY_GOALS = [
  { id: "1", value: "Do all exercises!" },
  { id: "2", value: "Finish the course!" },
];
