import { useState } from 'react'
import Sidebar from './assets/components/Sidebar'
import Toggle from './assets/components/Toggle'
import Content from './assets/components/Content/index'

import './assets/styles/style.css'
import Footer from './assets/components/Footer'


function App() {

  const [statusSidebar, setSidebar] = useState(false)

  return (
    <>
      <div className="l-app">


        <Toggle statusSidebar={statusSidebar} setSidebar={setSidebar} />

        <Sidebar statusSidebar={statusSidebar} setSidebar={setSidebar} />



        <div className="l-content">

          <Content />


          <Footer />

        </div>

      </div>
    </>
  )
}

export default App
