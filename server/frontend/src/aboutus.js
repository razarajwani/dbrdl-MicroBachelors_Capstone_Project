import './bootstrap.min.css';
import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div class="container-fluid px-0 mb-3" >
    <img src="https://source.unsplash.com/1200x400/?business" class="d-block w-100 mx-0" alt="...">
</div>

        <div style={{display:"flex"}}>
        <img src='/contatus.jpeg' style={{width: "300px"}}/>
        <div style={{margin:"100px"}}>
             <span style={{margin:"60px"}}>
             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
               </span >
           </div>

        </div>
        
      </div>
    );
  }
}

export default AboutUs;
