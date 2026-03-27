import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Blog, BlogDetails, Blogs, BlogSidebar, Contact, Error, ExtraFeatures, Features, FeedBack, Footer, Header, Help, Hero, Pricing, SectionsInfo, SignIn, SignUp, Support, VeryExtraFeatures } from './import'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/'
            element={
              <><Hero /><Features /><Help /><ExtraFeatures /><VeryExtraFeatures /><FeedBack /><Pricing /><Blogs className="bg-(--bg-secound) " abcde="flex flex-col"/><Contact /></>
            }
          />
          <Route path='/About'
            element={
              <><SectionsInfo title="About Page" link="/About" linkTitle="About Page"/><ExtraFeatures /><VeryExtraFeatures /></>
            }
          />
          <Route path='/Blog'
            element={
              <><SectionsInfo title="Blog Grid" link="/Blog" linkTitle="Blog Grid"/><Blogs /></>
            }
          />
          <Route path='/Support'
            element={
              <><SectionsInfo title="Contact Page" link="/Support" linkTitle="Contact Page"/><Contact /></>
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