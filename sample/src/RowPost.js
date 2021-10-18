import React, { useEffect,useState } from 'react'
import axios from './Axios'
import { ImgUrl,Api_id } from './Constants/Constance'
import './RowPost.css'
import Youtube from 'react-youtube'
import { Card,CardColumns,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function RowPost(props) {//all function included in here
    const [state, setstate] = useState([]) //ysed for inside useeffect to set data in row manner by index number

  useEffect(() => {//need to study
     //axios is created by me it contain base url of constants contain and transeferd to Axios.js to create instance 
      axios.get(props.URL).then((respone)=>
      //props.url is trem to identify which category of action trnding etc.. and set to respone baseurl+actionurl
      {
          console.log(respone.data.results);//call data. resultds array item alle fetched
          setstate(respone.data.results)
      }).catch(err=>{
          alert("error in api key")
      })      
  }, [])

  const opts = { //is used to generate video  copy paste
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    
    }
}
//another state used for video setting
const [urlyoutube, seturlyoutube] = useState()
//here presing row images onclicke seted so it delivers an id 
const handleMovie = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${Api_id}&language=en-US`).then((respone)=>
    //axios instance +video contain details url =id from onclick api id responce set
    {
        console.log(respone.data);

        //by length contition  trailer contain videos played
     if(respone.data.results.length!==0)
     {
        seturlyoutube(respone.data.results[0])
     }
     else{
         console.log('empty');
     }

       
    })
}

    return (
        

           
  
    <div class="col-sm-3">

    <h2>{props.title}</h2>
    <CardColumns>
      {state.map((obj) => (
        <Card className="m-4" key={obj.id} style={{ width: "20rem" }}>
          <Card.Img variant="top"onClick={()=>
                    {
                        handleMovie(obj.id)
                    }} src={`${ImgUrl+obj.backdrop_path}`}/>

          <Card.Body>
            <Card.Title variant="danger">{obj.name}</Card.Title>
            <Card.Text>{obj.overview}</Card.Text>
            <Button variant="primary" href={obj.url} target="_blank">
              Watch
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
      
    </div>  
    
    
               
           
       
    )
}

export default RowPost