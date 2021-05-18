import React from 'react'
import  './Auth.css'


class Sidebar extends React.Component{
    
    render(){
        return(
            
                <div>
                <div class="wrapper">
                    <div class="sidebar col-12">
                        <div class="head">
                            <img src="https://yaminichinta.github.io/machinelearing/logo.png" alt="" class="col-3" style={{width: "60px",height: "60px"}}/><p id="firebase" class="col-2 d-flex align-content-center" style={{color: "white", textAlign: "center"}}> Firebase</p>
                        </div>
                        <div class="projectoverview">
                            <a href="#" ><i class="fas fa-home"></i><p style={{display: "inline-block", fontSize: "18px", fontWeight: "600", lineHeight: "80px", color: "white"}}>Project Overview</p></a>
                        </div>
                        <ul >
                            <li >
                                <a href="#"><p id="build" style={{marginBottom: "0px"}}>Build</p></a>
                                <ul>
                                    <li><a href="/authentication/index.html" ><i class="fas fa-user-friends"  ></i>Authentication</a></li>
                                    <li><a href="/firebase/index.html" ><i class="fas fa-fire"></i>Firestore</a></li>
                                    <li><a href="#" ><i class="fas fa-server"></i>Realtime Database</a></li>
                                    <li><a href="/storage/index.html"><i class="fas fa-folder"></i>Storage</a></li>
                                    <li><a href="/hosting/index.html"><i class="fas fa-globe-americas"></i>Hosting</a></li>
                                    <li><a href="/functions/index.html"><i class="fas fa-code"></i>Functions</a></li>
                                    <li><a href="/machinelearning/index.html"><i class="fas fa-robot"></i>Machine Learning</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                </div>
            
    )
}
}
export default Sidebar