import React, { useState } from 'react';
import './App.css';
import Breadcrumb from './components/Breadcrumb';
import FolderTree, { testData } from 'react-folder-tree';
import Welcome from './components/Welcome';
import axios from 'axios';

function App() {

  const [crumbs, setCrumbs] = useState(['ROOT','Home', 'myname', 'Sub Category', 'projects', 'mysupersecretproject','mysupersecretfile']);


  
  const [show, setShow] = useState(false);

  const axios = require('axios');

  axios.get('/ROOT')
  .then(function (response) {
    
    console.log(response);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  .then(function () {
    
  });


  

  const selected = crumb => {
    console.log(crumb);
    
    setShow(!show)
    
  }



  





  return (
    <div className="App container">

      <Breadcrumb crumbs={crumbs} selected={selected} />

      {/* <button onClick={() => setShow(!show)}>Toggle</button> */}

      {show && <Welcome/>}

      {/* <Welcome/> */}
      
      

      

    




      
    </div>
  );
}

export default App;
