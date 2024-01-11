import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../assets/Providers.css'
import {jwtDecode} from "jwt-decode";
const Providers = () => {

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        console.log("useEffect called")
        Axios.get("http://localhost:3001/providers").then((response) => {
          setProviders(response.data)
          console.log(response.data[0])
        }).catch((err) => {
          console.log(err)
        })
      }, [])

        const BookSwifto = (val) => {
            console.log(val._id)
            if(localStorage.getItem('token') && localStorage.getItem('user')){
                Axios.post('http://localhost:3001/book', {
                    OrgID: val._id,
                    Orgname: val.Orgname,
                    UserName: localStorage.getItem('user')
                }).then((response) => {
                    console.log(response)
                    alert("Booked")
                })
                console.log(localStorage.getItem('user'))
                const token = localStorage.getItem('token');
                const decoded = jwtDecode(token);
                console.log(decoded);
            }

        }

    return(
        <>
            <h1>Providers</h1>
            <div className="providers">
                {providers.map((val) => {
                    return(
                        <div 
                            className="provider" 
                            key={val._id}>

                            <h1>{val.Orgname}</h1>
                            <h4>{val.Location} </h4>
                            <h4>{val.Rating}</h4>
                            <h4>{val.Email}</h4>
                            <h4>{val.Contact}</h4>
                            <h4>{val.Description}</h4>

                            <button             
                                className='book-button' onClick={()=> BookSwifto(val)}>
                                Book
                            </button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Providers