import './sass/app.scss';
import Header from './header/header'
import Main from './main/Main';

function App() {
  const DATA = [
    { id: "todo-0", name: "Complete online Javascript course", completed: true },
    { id: "todo-1", name: "Jog around the park 3x", completed: false },
    { id: "todo-2", name: "10 minutes meditation", completed: false },
    { id: "todo-3", name: "Read for 1 hour", completed: false },
    { id: "todo-4", name: "Pick up groceries", completed: false },
    { id: "todo-5", name: "Complete Frontend Mentor challenges", completed: false }
  ]

 

  return (
    <div className="app">
      <Header/>
      <Main tasks={DATA} />
    </div>
  );
}

export default App;
