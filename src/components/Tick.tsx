import React, { useEffect } from 'react';
import { get2digitsSring } from '../App';

type TickStateType = {
	hours: number
	minutes: number
	seconds: number
}

type TickType = {
	state: TickStateType
	setState: () => void
}

function Tick( {state, setState} : TickType) {

    useEffect(() => {
    	const idInterval = setInterval(()=>{
			setState()
    	}, 500)

    	return () => clearInterval(idInterval)
    }, [setState]
	)

	return (
    	<div >
			{get2digitsSring(state.hours)}:{get2digitsSring(state.minutes)}:{get2digitsSring(state.seconds)}
    	</div>
	);
}

export default Tick;


