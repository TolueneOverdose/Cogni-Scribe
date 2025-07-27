import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PingAppwrite from "./PingAppwrite";

function App() {
  return (
    <div>
      <h1>Blog + Appwrite</h1>
      <PingAppwrite />
    </div>
  );
}

export default App;

