import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'
const Footerlink = () => {
  return (

    <div className="container">
        <div className="row">
            <div className="col-sm-4">
                <p className="para">LOGO</p>
            </div>

            <div className="col-sm-4">
                <Link to="/">Home</Link>
                
            </div>

            <div className="col-sm-4">

                <Link to="/contact">CONTACT US</Link>
                
            </div>
            
        </div>


        <div className="row">
            <div className="col-sm-4">
                <p className="para">LOGO</p>
            </div>

            <div className="col-sm-4">
                <Link to="/prediction">Prediction</Link>
            </div>

            <div className="col-sm-4">
                <Link to='/about'>ABOUT US</Link>
        
            </div>
            
        </div>


</div>
        
  )
}

export default Footerlink