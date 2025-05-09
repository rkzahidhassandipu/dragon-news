import React from 'react'
import './App.css'
import Navbar from './Layout/Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router'
import Header from './Components/Header/Header'
import NewMarque from './Components/newsMarque/NewMarque'
import LeftAside from './Components/LeftAside/LeftAside'
import RightAside from './Components/RightAside/RightAside'
import Loader from './Components/IsLoader/Loader'


function App() {
  const {state} = useNavigation();
  return (
    <div>
      <header>
        <Header />
        <section>
          <NewMarque />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className='w-4/5 mx-auto grid grid-cols-12 gap-5 mt-10'>
        <aside className='col-span-3'>
          <LeftAside />
        </aside>
        <section className='main col-span-6'>
          {state == "loading" ? <Loader /> : <Outlet />}  
        </section>
        <section className='col-span-3'>
          <RightAside />
        </section>
      </main>
    </div>
  )
}

export default App
