import { useState } from 'react'
import './App.css'
import Todo from './components/Todo.jsx';
import img1 from './components/images/f3.png';
import img2 from './components/images/f4.png';
import img3 from './components/images/f5.png';

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount((prevCount)=>{
      return prevCount +1;
    })
    setCount(prev=>prev)
  }

  function decrement(){
    setCount((prevCount)=>{
      return prevCount -1;
    })
    setCount(prev=>prev)
  }

  return (
    <>
      <div className='text'>Что вам нужно?</div>
      <div className="todo_list">
        <Todo title='первый' img={img1} text='текс текст текст'/>
        <Todo title='второй' img={img2} text='текс текст текст'/>
        <Todo title='третий' img={img3} text='текс текст текст'/>
      </div>
      
    </>
  )
}

export default App