import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Blog, BlogDetails, Blogs, BlogSidebar, Contact, Error, ExtraFeatures, Features, FeedBack, Footer, Header, Help, Hero, Pricing, SignIn, SignUp, Support, VeryExtraFeatures } from './import'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'
            element={
              <><Hero /><Features /><Help /><ExtraFeatures /><VeryExtraFeatures /><FeedBack /><Pricing /><Blogs /><Contact /></>
            }
          />
          <Route path='/About'
            element={
              <><About /><ExtraFeatures /><VeryExtraFeatures /></>
            }
          />
          <Route path='/Blog'
            element={
              <><Blog /><Blogs /></>
            }
          />
          <Route path='/Support'
            element={
              <><Support /><Contact /></>
            }
          />
          <Route path='/BlogSidebar'
            element={
              <><BlogSidebar /></>
            }
          />
          <Route path='/BlogDetails'
            element={
              <><BlogDetails /></>
            }
          />
          <Route path='/BlogDetails'
            element={
              <><BlogDetails /></>
            }
          />
          <Route path='/SignUp'
            element={
              <><SignUp /></>
            }
          />
          <Route path='/SignIn'
            element={
              <><SignIn /></>
            }
          />
          <Route path='/Error'
            element={
              <><Error /></>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App