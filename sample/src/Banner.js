import React, { useEffect, useState } from 'react'
import './banner.css'
import {Api_id,ImgUrl} from './Constants/Constance'
import axios from './Axios'//here axios instance created by file
function Banner() {

    const [state, setstate] = useState()

    useEffect(() => {
    axios.get(`trending/all/week?api_key=${Api_id}&language=en-US`).then((responce)=>
    //here axios==baseurl+trendng movies link+api id from (constnce folder)
    {
        console.log(responce.data.results[0]);
        setstate(responce.data.results[0])
        
    })
    }, [])
    

    return (
        <div 
        style= {{backgroundImage:` url(${state ? ImgUrl+state.backdrop_path:""})`}}
        
         className='banner' >
           
            <div className='content' >
                <h1 className='title'>{state ? state.name:""} </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{state?state.overview:""}</h1>
            </div>
        <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner