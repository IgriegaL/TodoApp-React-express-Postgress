import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem"
import { useEffect, useState } from "react";

const App = () => {
  const userEmail = 'ania@test.cl'
  const [tasks, setTasks] = useState(null)


  const getData = async () => {
    const userEmail = 'ania@test.cl';
    try {
      // Se usan Backsticks para colocarle el parametro
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json)
    } catch (error) {
      console.error(error);
    }
  };
  // hacer correr nuestro data
  useEffect(() => getData,[]);

  // ordenar task,  ? si existe
  const sortedTask = tasks?.sort((a,b) => new Date(a.date) + new Date(b.date))

  return (
    <div className="app">
      <ListHeader listName={"🏝️ Holiday tick list"} />
      {sortedTask?.map((task) => <ListItem key={task.id} task={task}/>)}
    </div>
  );
};

export default App;
