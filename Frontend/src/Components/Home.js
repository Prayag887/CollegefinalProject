import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import '../css/main.css'
import '../css/product.css'
import '../css/exprience.css'
import '../css/education_timeline.css'

import energy from '../assets/energy.gif'
import dam from '../assets/dam.png'
import solarcell from '../assets/solar-cell.png'
import windmill from '../assets/wind-mill.png'
import geothermal from '../assets/geothermal.png'
import Body from './Body'
import Footerlink from './Footerlink'

const Home = () => {
  const divStyle = {
    backgroundColor: '#1c0522',
    important: 'true', // Creating a custom property to indicate importance
    // Add any other styles you want here
  };

  return (
    <>
    

<Body/>
    <div className="sec" id='sec' style={{zIndex:100, border:0,margin:0}}>
        <div className="container">
            <div className="row"> 
                <div className="col-sm-8">
                    <h2 className= "intro_name">Renewable/Alternative <br/><span className= "span_for_name"> Sources of Energy</span></h2>
                    <p className="intro_desc">Generating energy through alternative sources refers to the production of electricity using methods that are different from traditional fossil fuels like coal, oil, and natural gas. These alternative sources offer numerous advantages, including reduced environmental impact, diversification of energy supply, and often, long-term sustainability.
                    </p>
                </div>
                <div className="col-sm-4">
                    <img src={energy}  style={{height:300, width:350 , borderRadius:30}}  alt='energy'/>
                </div>
            </div>
        </div>   
        
        {/* this start from resources */}
        <div className="services-area" style={divStyle}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center services-title">
                    <h2 className= "intro_name"><span className= "span_for_name">Sources</span></h2>
                    <p className="para">
                        Wind power harnesses the kinetic energy from the wind, converting it into electricity through turbines, offering a clean and renewable energy source. Hydroelectric power utilizes the energy of flowing water or dams to generate electricity, providing a reliable and established renewable energy option. Biogas, derived from organic materials like agricultural waste or sewage, produces methane for electricity or heat, offering a renewable and versatile energy source. Geothermal energy taps into the Earth's heat to generate power, providing a consistent and low-emission source of electricity. Solar power harnesses sunlight through photovoltaic cells, offering a widely accessible and clean renewable energy source that can be utilized on a small or large scale. These diverse alternative energy sources collectively contribute to reducing carbon emissions, mitigating climate change, and fostering a more sustainable energy landscape.
                    </p>
                </div>
            </div>
             <div className="container services-list" id="card" >
                <div className="row" style={{justifyContent:'center'}}>
                    <div className="col-lg-3" id="services">
                        <div className="services">
                            <div className="sevices-img text-center py-lg-5">
                                <img src={dam} alt="Services-1" className="service_area_image" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Hydro Power</h5>
                                <p className="card-text text-secondary">
                                    Generating electricity from the movement of water, often using dams or flowing rivers. It's a reliable and well-established renewable energy source, but damming rivers can have ecological impacts.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" id="services">
                        <div className="services">
                            <div className="sevices-img text-center py-lg-5">
                                <img src={solarcell} alt="Services-2" className="service_area_image" />
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Solar Power</h5>
                                <p className="card-text text-secondary">
                                    Harnessing energy from the sun using photovoltaic cells or solar panels. Solar power is abundant, renewable, and produces no greenhouse gas emissions during operation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" id="services">
                        <div className="services">
                            <div className="sevices-img text-center py-lg-5">
                                <img src={windmill} alt="Services-3" className="service_area_image"/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Wind Power</h5>
                                <p className="card-text text-secondary">
                                    Harnessing energy from the sun using photovoltaic cells or solar panels. Solar power is abundant, renewable, and produces no greenhouse gas emissions during operation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3" id="services">
                        <div className="services">
                            <div className="sevices-img text-center py-lg-5">
                                <img src={geothermal} alt="Services-4" className="service_area_image"/>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase font-roboto">Bio-Energy</h5>
                                <p className="card-text text-secondary">
                                    Using organic materials like wood, agricultural residues, or waste to produce heat or electricity. While renewable, biomass can raise concerns about deforestation and emissions.
                                </p>
                            </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
<Footerlink/>
        
        </div>
    </div>   
    </>
  )
}

export default Home