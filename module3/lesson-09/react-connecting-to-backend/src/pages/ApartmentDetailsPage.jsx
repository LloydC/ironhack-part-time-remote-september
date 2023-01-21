import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Apartment from '../components/Apartment';

function ApartmentDetailsPage(){
    const [apartment, setApartment] = useState({})

    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5005/apartments/${id}`)
        .then( response => setApartment(response.data))
    }, [id])

        if(Object.keys(apartment).length === 0){
            return <p>Loading...</p>
        }

        return (<Apartment apartment={apartment} />)
}

export default ApartmentDetailsPage;