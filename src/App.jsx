import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import { CarrinhoProvider } from "./Context/CarrinhoContext"
import CarrinhoPage from "./Pages/CarrinhoPage"

function App() {
  

  return (
    <>
    <CarrinhoProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/carrinho" element={<CarrinhoPage />} />
    </Routes>
    </BrowserRouter>
    </CarrinhoProvider>
    
    </>
  )
}

export default App
