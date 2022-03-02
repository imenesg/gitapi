import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Card from '../src/components/Card'
import Modal from '../src/components/Modal'

ReactDOM.render(
  <React.StrictMode>
    <Modal></Modal>
    <Card></Card>
  </React.StrictMode>,
  document.getElementById('root')
)
