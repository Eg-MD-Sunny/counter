import { useState } from 'react';
import './App.css';
import Counter from './Counter/Counter';

function App() {
	const [counters,setCounter]=useState(0);
	const valueIncrease = ()=>{
		const newValue = counters + 1;
		setCounter(newValue)
	}

  return (
    <div className="App">
		<h1>Counter:{counters}</h1>
		<button onClick={valueIncrease}>Increase</button>
		<Counter valueIncrease={valueIncrease}></Counter>
    </div>
  );
}

export default App;
