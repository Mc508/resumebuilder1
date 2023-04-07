import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Component1 from './Component/Component1'
import Editor from './Component/Editor'
// import Image from './Component/image'
import Resume from './Component/Resume'
import './index.css'
import Personal from './Component/personal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Component1/> */}
    {/* <Editor/> */}
    {/* <Image/> */}
    {/* <Personal/> */}
    <Resume />
  </React.StrictMode>
)
