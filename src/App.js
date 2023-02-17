import { useState } from 'react';
import './App.css';
import Counter from './Counter/Counter';
import Counter2 from './Counter2/Counter2';

function App() {
	const [counters,setCounter]=useState(0);
	const valueIncrease = ()=>{
		const newValue = counters + 1;
		setCounter(newValue)
	}

  return (
    <div className="App">
		<h1>Counter:{counters}</h1>
		<div className="button_area">
			<button onClick={valueIncrease}>Increase</button>
			<Counter valueIncrease={valueIncrease}></Counter>
			<Counter2 valueIncrease={valueIncrease}></Counter2>
		</div>
    </div>
  );
}

export default App;
