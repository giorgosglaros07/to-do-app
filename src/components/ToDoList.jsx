import React,{useState} from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { TbHandFinger } from "react-icons/tb";
import { TbHandFingerDown } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

const ToDoList = () => {
 
 const [tasks, setTasks] = useState(["eat breakfast ","go to gym", "study react"]);
 const [newTask, setNewTask] = useState('');
 
 function handleInputChange(event) {
    setNewTask(event.target.value);
 }

 function addTask() {
    if (newTask.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, newTask]);
    setNewTask(''); // Clear input field after adding task
 }
 
 function deleteTask(index) {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
 
 }
 
 function moveTaskUp(index) {
    if (index > 0) {
        const newTasks = [...tasks];
        const temp = newTasks[index - 1];
        newTasks[index - 1] = newTasks[index];
        newTasks[index] = temp;
        setTasks(newTasks);
    }
 }

 function moveTaskDown(index) {
    if (index < tasks.length - 1) {
        const newTasks = [...tasks];
        const temp = newTasks[index + 1];
        newTasks[index + 1] = newTasks[index];
        newTasks[index] = temp;
        setTasks(newTasks);
    }
 }
 
    return (
    <div className='flex flex-col  items-center justify-center  '>
    <h1 className="mt-[100px] text-[#02c775] mb-5 text-5xl font-extrabold uppercase text-center text-accent">To Do List</h1>
    <div className='relative'>
    <input className="flex grow w-150 px-5 caret-[#00FFC4] h-13 text-3xl  rounded-[30px] border-[2px] border-white  text-[#F9F9F9] focus:outline-none focus:ring-2 " type="text" placeholder='Enter a new task...' value={newTask}
        onChange={handleInputChange}></input>
        <label class="custom-checkbox" for="todo-1"></label>
        <button className=' bg-emerald-400  absolute  top-0  right-0 border-3  rounded-[700px] border:none px-10 h-13 w-31 ' onClick={addTask}>
            Add
        </button>
        </div>
       <ol className='flex flex-col items-center p-0 justify-center mt-5 space-y-3 text-2xl text-white'>
        {tasks.map((task, index) => (
          <li className='flex bg-[#1C1D20] rounded-2xl text-3xl w-150 h-12 items-center border-1' key={index}>
          <label className="flex items-center w-full cursor-pointer px-2">
            <input type="checkbox" className="sr-only peer" />
            <FaRegCheckCircle className="text-white peer-checked:text-green-500 transition-colors duration-200 mr-2" />
            <span className="peer-checked:line-through peer-checked:text-gray-500 flex-1">
              {task}
            </span>
          </label>
                    <button className='mr-3 border:none hover:text-sky-700' onClick={() => moveTaskUp(index)} disabled={index === 0}><TbHandFinger /></button>
                    <button className='bg-none mr-3 hover:text-sky-700' onClick={() => moveTaskDown(index)} disabled={index === 0}> <TbHandFingerDown /></button>
                    <button className='bg-none border-none hover:text-red-500 mr-3' onClick={() => deleteTask(index)}><FaRegTrashAlt /></button>
                 </li>
             ))}
       </ol>

    </div>
  )
}

export default ToDoList
