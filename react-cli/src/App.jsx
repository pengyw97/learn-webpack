import { useEffect, lazy, Suspense } from "react"
import User from "./utils/common"
import User2 from "./utils/common2"
import { Button } from 'antd'

// import Home from './pages/Home'
// import About from './pages/About'
import { Link, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import(/* webpackChunkName: 'home' */ './pages/Home'))
const About = lazy(() => import(/* webpackChunkName: 'about' */ './pages/About'))

const Loading = () => {
  return <div>loading</div>
}

const App = () => {

  useEffect(() => {
    const min = new User('ming', 24)
    console.log(min.getName())
    console.log(min.getAge())

    const min2 = new User2('ming', 24)
    console.log(min2.getName())
    console.log(min2.getAge())
  }, [])

  return (
    <>
      <div>App</div>
      <div className="image"></div>
      <ul>
        <li><Link to={'/home'}><Button type="primary">home</Button></Link></li>
        <li><Link to={'/about'}><Button type="primary">about</Button></Link></li>
      </ul>

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App
