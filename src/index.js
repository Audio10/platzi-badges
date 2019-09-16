// REACT
import React from 'react'
import ReactDom from 'react-dom'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'

// COMPONENTES
import Bagde from './components/Badge'

const container = document.getElementById('app')

ReactDom.render(<Bagde />, container)