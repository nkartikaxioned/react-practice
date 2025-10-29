import { StrictMode } from 'react'
import './App.css'
// import { ImageSlider } from './Components/Image-Slider'
// import { LoadMore } from './Components/Load-More'
import { Menu } from './Components/Nav-Bar/menu'
import { PrimaryNav } from './Components/Nav-Bar'


function App() {

  return (
    // <LoadMore url={`https://dummyjson.com/products`} limit={10}/>
    
    <PrimaryNav menu = {Menu} />
  )
}

export default App
