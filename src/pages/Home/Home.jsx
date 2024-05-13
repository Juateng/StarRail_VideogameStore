import React, {useState}from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ProductsDisplay from '../../components/ProductsDisplay/ProductsDisplay'

const Home = () => {

  const [category] = useState("All");

  return (
    <div>
      <Header/>
      <ProductsDisplay category={category}/>
    </div>
  )
}

export default Home