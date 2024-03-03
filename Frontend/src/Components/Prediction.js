import React, { useState,useEffect } from 'react';
import './Prediction.css';
import countrydata from './countries.json';
import Chart from './Chart';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
const URL="http://127.0.0.1:5000"
const Prediction = () => {
  const navigate=useNavigate()
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [data,setData]=useState([])
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const years = Array.from({ length: 27 }, (_, index) => 2024 + index);
  const handleDateChange = (event) => {
    event.preventDefault();
    const selectedYear = event.target.value;
    setSelectedDate(selectedYear);
  }
  const onSubmit=(event)=>{
    event.preventDefault();
    fetchData();
  }
  // fetching data
  const fetchData = async () => {
    try {
      const entityName =selectedCountry; 
      const response = await fetch(`${URL}/get_predictions`, {
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
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const combinedData = data.flatMap((array) => array);
// for checking user is loggin or not
const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
  }, []);


  return (
    <div className='main-prediction'>
      <div className='left-prediction'>
        <h1 className='prediction-title'>Welcome to Prediction Section</h1>
        <form >
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

          <div className='inputs'>
            <label htmlFor='date' className='label-color-input'>
              DATE
            </label>
            <select id="yearSelector" value={selectedDate} onChange={handleDateChange}>
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
          </div>

          <div className='inputs'>
            {
              isLoggedIn?<button type='submit' className='btn' onClick={onSubmit}>
              Predict Now
            </button>:<button onClick={navigate("/login")} className="btn"> Register Now</button>
            }
            
          </div>
        </form>
      </div>
     
          <Chart combinedData={combinedData} date={selectedDate} country_name={selectedCountry} />
          <p>This is paragraph</p>

    </div>
  );
};

export default Prediction;
