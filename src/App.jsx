import { useState } from 'react'
import './App.css'
import Navigationbar from './components/Navigation-bar/index.jsx'
import ProductCard from './components/product-card'
import ProductContainer from './components/Products-container'
function App() {


  return (
    <>
    <Navigationbar/>
    <ProductContainer/>
   
    </>
  )
}

export default App
