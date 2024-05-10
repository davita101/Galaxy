import { Route, Routes } from "react-router-dom"
import NavBar from "./components/Navbar"
import Home from "./components/Home"
import Crew from "./components/Crew"
import Technology from "./components/Technology"
import Description from "./components/Description"
import NotFound from "./components/NotFound"

function App() {

  return (
    <div>
      {/* <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/book/'><li>Books</li></Link>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book/:id" element={<BookList />} />
        <Route path="/book/new  " element={<NewBook />} />
      </Routes> */}
      {/* 
      <NavBar />
      <Routes>
        <Route path="/hero" element={<Hero />} />
      </Routes> */}

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>

    </div>
  )

}

export default App
