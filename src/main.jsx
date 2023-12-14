import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Component1 from './Component/Component1'
import Editor from './Component/Editor'
import Resume from './Component/Resume'
import './index.css'
import Personal from './Component/personal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Editor/>
  </React.StrictMode>
)
