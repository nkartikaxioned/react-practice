import { StrictMode } from 'react'
import './App.css'
// import { ImageSlider } from './Components/Image-Slider'
import { LoadMore } from './Components/Load-More'


function App() {

  return (
    <LoadMore url={`https://dummyjson.com/products`} limit={10}/>
  )
}

export default App
