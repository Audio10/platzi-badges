// REACT
import React from 'react'
import ReactDom from 'react-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// COMPONENTES
import App from './components/App';

const container = document.getElementById('app')

ReactDom.render(
<App/>, container)