import { useState } from 'react'
import './App.css'
function App (){
const [missions, setMissions] = useState([]);
const [sortofImages, setSortofImages] = useState(true);
const [taskInput, setTaskInput] = useState('');
const handleSortClick = () => {
        const sortedMissions = [...missions];
        if (sortofImages) {
            sortedMissions.sort();
        } else {
            sortedMissions.sort().reverse();
        }
        setSortofImages(!sortofImages);
        setMissions(sortedMissions);
    };
const handleAddTask = () => {
    if (taskInput.trim() !== '') {
            setMissions(prev => [...prev,taskInput]);
            setTaskInput('');
}
};
const handleDeleteTask = (task) => {
        const updatedMissions = missions.filter(item => item !== task);
        setMissions(updatedMissions);
    };
return (
<div>
<input className='input1' type="text"  value={taskInput}  onChange={(e) => setTaskInput(e.target.value)}/> <br></br> 
 <button className='button1' onClick={handleAddTask}>Add Task</button>
  <ul>{missions.map((task, index) => (
<li key={index}>
  {index + 1}.{task}
<button className='button2'  onClick={() => handleDeleteTask(task)}>
 X</button>
</li>
   ))}
  </ul>
          <button className='button3' onClick={handleSortClick}>Sort
            </button>
        </div>
    );
};
export default App;