import Axios from 'axios';
import { useEffect, useState } from 'react';
import '../assets/Providers.css'
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

    return(
        <>
            <h1>Providers</h1>
            <div className="providers">
                {providers.map((val) => {
                    return(
                        <div className="provider" key={val._id}>
                            
                            <h1>{val.Orgname}</h1>
                            <h4>{val.Location} - {val.Rating}</h4>
                            <h4>{val.Email} - {val.Contact}</h4>
                            <h4>{val.Description}</h4>
                            <button className='button2'>Book</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Providers