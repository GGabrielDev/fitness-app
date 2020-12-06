//const element = document.createElement('h1')
//element.innerText = 'Hello React'
//const container = document.getElementById('root')
//container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './components/Card'

const user = {
	firtName: 'Luis',
	lastName: 'Ramos',
	avatar: 'https://cdn0.iconfinder.com/data/icons/medical-solid-take-care-of-yourself/512/Cancer-512.png'
}

function getName(user){
	return `${user.firtName} ${user.lastName}`
}

function getGreeting(user){
	if(user){
		return <h1>Hello {getName(user)}</h1>
	}
	return <h1>Hello Stranger</h1>
}

const element = (
	<div>
		<h1>{getGreeting(user)}</h1>
		<img src={user.avatar} alt='img'/>
	</div>
)

const container = document.getElementById('root')

ReactDOM.render(<Card/>, container)
