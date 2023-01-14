import { useState, useEffect } from "react";
import axios from "axios";
import { Spin } from 'antd';
 
const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";
 
function IronbnbList() {
  const [fetching, setFetching] = useState(true);
  const [apartments, setApartments] = useState([]);
 
  useEffect(() => {
    console.log("useEffect - Initial render (Mounting)");
    setTimeout(()=>{
        axios.get(apiURL).then((response) => {
            console.log('response data', response.data)
            setApartments(response.data); // updating the state variable "apartments"
            setFetching(false); // remove the "loading" message
          });
    }, 2000)
  }, []);
 
  return (
    <div>
      <h3>List of apartments</h3>
      {fetching && <Spin />}
 
      {apartments.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Price: {apt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  );
}
 
export default IronbnbList;