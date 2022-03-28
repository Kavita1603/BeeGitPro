import React from "react";
import './App.css';
import SearchBar from "./component/search";

function App() {
  return (
    <div className="App">
      <div className="container my-5" >
            <div className="row mt-auto">
                
                <h1 className="display-4 mb-3">GitHub Public Repositories with React JS</h1>
                
            </div>
            <div className="row">
                
                <div className="col-md-6 mx-auto text-center">
                    <div className="row mb-5 justify-content-center">
                        <form id="myform" >
                          
                          <SearchBar />
                          
                          <div id="main-div">
                          
                            <div id="d1">
                                <a href=" https://github.com/Kavita1603/To-DO-List" target="_blank"><p>To Do List App<span>Public</span>
                                  <div class="py"><div class="circle1"></div>Python</div></p></a><br></br>
                            </div>

                            <div id="d2">
                                <a href=" https://github.com/Kavita1603/Train-Ticket-Booking" target="_blank" ><p>Train Ticket Booking App<span>Public</span>
                                  <div class="html"><div class="circle2"></div>HTML</div></p></a><br></br>
                            </div>

                            <div id="d3">
                                <a href=" https://github.com/Kavita1603/Sigma-ToDoList" target="_blank" ><p>Sigma-To do List App<span>Public</span>
                                  <div class="js"><div class="circle3"></div>JavaScript</div></p></a><br></br>
                            </div>

                            <div id="d4">
                                <a href=" https://github.com/Kavita1603/Online-Order-Food-App" target="_blank"><p>Online Order Food App<span>Public</span>
                                  <div class="onf"><div class="circle4"></div>React</div></p></a>
                            </div>

                          </div>
                  
                        </form>                     
                    </div>       
                </div>
            </div>
        </div>
                        
    </div>
    
  );
}

export default App;
