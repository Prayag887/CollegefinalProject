import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import './chart.css';
import './leftprediction.css'
import animate from '../assets/animation.gif'
const Chart = (props) => {
  const combinedData = props.combinedData;
 
  const Year1=props.date
  // eslint-disable-next-line
  const filteredData = combinedData.filter(item => item.Year ==Year1);

  const item = filteredData.length > 0 ? filteredData[0] : null;

  const electricityFromHydro = item ? item['Electricity from hydro (TWh)'] : 0;
  const otherRenewables = item ? item['Other renewables including bioenergy (TWh)'] : 0;
  const electricityFromSolar = item ? item['Electricity from solar (TWh)'] : 0;
  const electricityFromWind = item ? item['Electricity from wind (TWh)'] : 0;

  const totalValue = electricityFromHydro + electricityFromSolar + electricityFromWind + otherRenewables;

  const shouldRenderChart = totalValue > 0;
  if(!shouldRenderChart){
    return <>
    <div className="outerscreen">
      <div className="innerscreen">
         <img src={animate} alt="notice" />
      </div>
    </div>
    </>
  }

  const data = [
    { name: 'Electricity', value: electricityFromHydro },
    { name: 'Solar', value: electricityFromSolar },
    { name: 'Wind', value: electricityFromWind },
    { name: 'OtherRenewables', value: otherRenewables },
  ];
  const COLORS = ['#FF0000',  '#0000FF', '#00FF00','#FFA500'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    
    <section className='all'>
    <h1 className='heading-pie'> {Year1} ({props.country_name})this is my message</h1>
      
      <div className='pichar-flex'>
        <div className="piechart">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={200}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className='index'>
          <table className='table-background'>
            <tbody>
              <tr>
                <th>Indexes</th>
                <th>Resources</th>
                <th>Values</th>
              </tr>
              <tr>
                <td><div className="indicator-red"></div></td>
                <td>Hydro</td>
                <td>{electricityFromHydro} TWh</td>
              </tr>
              <tr>
                <td><div className="indicator-blue"></div></td>
                <td>Solar</td>
                <td>{electricityFromSolar} TWh</td>
              </tr>
              <tr>
                <td><div className="indicator-green"></div></td>
                <td>Wind</td>
                <td>{electricityFromWind} TWh</td>
              </tr>
              <tr>
                <td><div className="indicator-brown"></div></td>
                <td>Bio</td>
                <td>{otherRenewables} TWh</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      
    </section>
  
  );
};

export default Chart;
