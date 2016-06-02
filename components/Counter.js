import React from 'react'
class Counter extends React.Component {
	constructor() {
		super()
		this.incrementAsync = this.incrementAsync.bind(this)
		this.incrementIfOdd = this.incrementIfOdd.bind(this)
	}
	incrementIfOdd() {
		if(this.props.value %2 !== 0) {
			this.props.onIncrement()
		}
	}
	incrementAsync() {
		setTimeout(this.props.onIncrement, 3000)
	}
	render(){
		const { value, onIncrement, onDecrement } = this.props
		return (
			<div>
				<h1>{value}</h1>
				<button onClick={onIncrement}>+</button>
				<button onClick={onDecrement}>-</button>
				<button onClick={this.incrementIfOdd}>if Odd</button>
				<button onClick={this.incrementAsync}>async</button>
			</div>
		)
	}
}
export default Counter
