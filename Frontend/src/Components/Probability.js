import React,{useState} from 'react'
import '../css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import moon from '../assets/moon.png'
import star from '../assets/stars.png'
import cloud from '../assets/cloud2.png'
import mountainback from '../assets/mountains_behind.png'
import countrydata from './countries.json';
import './Probability.css'
const Probability= () => {
  const URL="http://127.0.0.1:5000"
 const [data, setData]=useState([])
  const [selectedCountry, setSelectedCountry] = useState('');


  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const fetchData = async () => {
    try {
      const entityName =selectedCountry; 
      const response = await fetch(`${URL}/get_confidence_level`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ entity_name: entityName })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
      console.log(data)
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 
  const onSubmit=(event)=>{
    event.preventDefault();
    fetchData();
  }
  return (
    <div>
     
    <section className="animation_moon position-relative">
        <img src={star} className="stars"alt='stars'/>
        <img src={moon} className="moon" alt='moons'/>
        <img src={mountainback} className="mountains_behind" alt='mountainback'/>
        <img src={cloud} className="cloud1" style={{paddingRight:"-50px !important"}} alt='cloud' />
       
        <h1 style= {{zIndex:"1000", color:"aliceblue", left:'44%', fontSize:"50px",fontFamily:"Metal Mania"}} ></h1>
    </section>
    <div className="sec" id='sec' style={{zIndex:"100", border:"none", margin:"none"}}>     
    </div>    

    <div className="services-area" style= {{backgroundClip:"#1c0522 !important",zIndex:"100"}}  >
    
    </div>



    <div className="container bg-for-probability">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
        <form action="">
        <div className='inputs'>
            <label htmlFor='country' className='label-color-input'>
              Country
            </label>
            <select
  name='country'
  className='input-field'
  onChange={handleCountryChange}
  value={selectedCountry}
>
  <option value="" disabled >Select a country</option>
  {countrydata.map((getcountry, index) => (
    <option value={getcountry.country_name} key={index}>
      {getcountry.country_name}
    </option>
  ))}
</select>

          </div>
        </form>
        </div>
      </div>
    </div>
    <form  method="get">
    <div className='inputs'>
            <button type='submit' className='bt' onClick={onSubmit}>
              Predict Now
            </button>
          </div>
    </form>

<div className="Probability bg-for-probability">
  <div className="date-and-probability bg-for-probability ">
 
        <table class="table  bg-for-probability">
        <thead>
          <tr>
          
            <th scope="col">Year</th>
            <th scope="col">Probablity %</th>
           
          </tr>
        </thead>
       
        <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Year}</td>
            <td>Probability_Percentage={item.Probability_Percentage}</td>
          </tr>
        ))}
      </tbody>
      </table>

  </div>
</div>
   

    </div>
  )
}

export default Probability
