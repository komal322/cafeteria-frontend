import React from 'react'
import Navbar from './component/Navbar/navbar.jsx'
import Second from './component/Secondservice/second.jsx'
import Firstservice from './component/Firstservice/firstservice.jsx'
import Footer from './component/Footer/footer.jsx'
import Letstalk from './component/Letstalk/letstalk.jsx'
import MyCarousel from './component/Carousel/carousel.jsx'
import Whytoserve from './component/Whytoserve/whytoserve.jsx'
import Login from './component/Login/login.jsx'

function App() {
    return (
        <div>


            <Navbar />
            <MyCarousel />
            <Firstservice />
            <Second />
            <Whytoserve />
            <Letstalk />
            <Footer />

            <Login />


        </div>
    )
}

export default App
