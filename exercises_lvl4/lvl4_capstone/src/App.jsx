import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Search from "./components/Search"
import RecAreasList from "./components/RecAreasList"


export default function App() {
  return(
    <div>
      <Header />

      <Search />
      
      <RecAreasList />

      <Footer />
    </div>
  )
}
