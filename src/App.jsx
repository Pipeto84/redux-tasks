import './App.css'
import { useSelector } from 'react-redux'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'

function App() {
const tasks = useSelector(store=> store.tasks)
console.log(tasks)

  return (
    <div className='App'>
      <h1>Pipeto</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
