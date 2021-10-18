import React from 'react'
import {orginal,action} from './Url'//used for category setting
import Banner from './Banner';
import NavBar from './NavBar';
import RowPost from './RowPost';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        
  <div class="row">
    <div class="col-sm-3">
    < RowPost URL={orginal}  title="TRENDING"/>
    <RowPost URL={action} title="ACTION"  Isamll />
    </div>
    </div>
    
        
        
    </div>
  );
}

export default App;