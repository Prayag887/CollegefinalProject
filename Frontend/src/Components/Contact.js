import React from 'react'
import './contact.css'
// import '../css/main.css'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

 import '../css/style.css'
const Contact = () => {
  return (
   <>
  <section id="contact" style={{marginTop:100}}>
  
  <h1 className="section-header">Contact</h1>
  
  <div className="contact-wrapper">
  
  {/* <!-- Left contact page -->  */}
    
    <form id="contact-form" className="form-horizontal" role="form">
       
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="" required/>
        </div>
      </div>

      <div className="form-group">
        <div className="col-sm-12">
          <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="" required/>
        </div>
      </div>

      <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div className="alt-send-button">
          <span><i className='fa fa-paper-plane'></i> <p className='send-text'>SEND</p></span>
         
        </div>
      
      </button>
      
    </form>

    
      <div className="direct-contact-container">

        <ul className="contact-list">
          <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Gaushala, Kathmandu</span></i></li>
          
          <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><Link to='#' title="Give me a call">(977) 3214213</Link></span></i></li>
          
          <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><Link to="mail.to:#" title="Send me an email">prayagdhakal123@gmail.com</Link></span></i></li>

<li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><Link to="#" title="Send me an email">bilishkharbuja@gmail.com</Link></span></i></li>

<li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><Link to="#" title="Send me an email">binayalimbu@gmail.com</Link></span></i></li>
          
        </ul>

        <hr/>
        <ul className="social-media-list">
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" className="contact-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>
        <hr/>
      </div>
    
  </div>
  
</section>
  
      <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                      <h4 className="title">CONTENT:</h4><br/>
<p className='title'>                      Due to limited fossil fuel supplies and environmental concerns, alternate energy sources are desperately needed. Making the switch to sustainable energy sources like hydropower, wind, and solar is essential to preventing climate change, cutting pollution, and securing a reliable supply of energy in the future.
</p>                    </div>
                    <div className="col-sm-4">
                        <h4 className="title">FOLLOW ME:</h4><br/>
                        <ul>
                            <li><Link to="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-github" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link></li>
                         
                        </ul>
                    </div><br/><br/>
                    <div className="col-sm-4">
                        <h4 className="title" id="contact">CONTACT ME:</h4><br/>
                        <p>prayagdhakal123@gmail.com</p>
                        <p>binayalimbu300@gmail.com</p>
                        <p>kharbujakwatermelon190@gmail.com</p>
                    </div>    
                </div>
            </div>
        </footer>
        </>
  )
}

export default Contact