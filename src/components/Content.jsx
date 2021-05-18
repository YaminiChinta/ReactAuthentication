import React from 'react'
import  './Auth.css'


class Content extends React.Component{
    
    render(){
        return(
            <div>
               <div class="authentication">
              <h1>Authentication</h1>
              <img src="data:image/jpeg;base64,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" alt="qestion mark " width="30px" height="25px"/>
          </div>
          <div class="topnav">
              <a class="User" href="#">user</a>
              <a href="#">Sign-in method</a>
              <a href="#">Templates</a>
              <a href="#about">usage</a>
            </div>
            <form>
              <div class="card">
                  <div class="card-header">
                      <div class="adduser">
                          <ul>
                          <input type="text" class="search" placeholder="search...."/>
                         <li> <button>Add user</button></li>
                         <li><img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-reload-vector-icon-png-image_696434.jpg" alt="reload" width="25px" height="25px"/></li>
                         <li><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEX///9+fn5ubm57e3t0dHR4eHh8fHz5+flsbGyAgIDr6+ugoKD09PSKioru7u6zs7Otra3FxcWQkJCampqmpqbV1dXl5eXc3NzNzc15YLGdAAACy0lEQVR4nO3d25KiMBSFYRISIIocPGC//5MO6HSP4wBeyFTKlf+7sKvv9i7MkWSbZQAAAAAAAAAAAAAAAAAAAAAAAIilHPrz6XQ690MZO5T/om6DdT7Pc+/soa1jh7O91joTjAnF9GGcbWMHtLEh3PIz5ufThSF2UFu6uPye3D2/25/cXWKHtZ2rM3PcNXZgW6l9MZth4VX6m6MPsxkGf4wd2jYu1XyCY4qVRlM8LOQ3OcQObgtDtZJhpTBkdH4lQ9/FDu995TFfyTA/fv4UtfZmqaOZRn6BAaOxywmOKdomdoBv273IcBc7wLft7EqCxghk2LzI8PO/pfXClO33t1Sgp8nkR4vVET8ojPjZsNYQJWZt+jPvBFZP2WlxBXyKHdpGaj/fneYKQ8Xd1RfjJPvxQU7/FV5mJ2psijNPMfcijfBuOLi/22JwB4mB4kFbPY78vlLb1R+VbVG5fOKqohWYrM3Z9d15f+76z18xAQCAFXXT7JpGZs30rOz3wVlrXdj3ipO2srPfBzJM7mwnl+OX9T9L39viwn7FDmlbZ/f0ji0Yd44d1JZO7t+9qOBU9qFG+5kEpxT3sQPbytf8kShjnEhbLJe39a1Gj9otvl/TeDEzPsI/ZxKfulMTJB5iv9QKby2xjx3eBvarb0gFutM6zB+9vCvC50/Dm7Uv6fg1/fyTCvpnMfRPDOk/Q/12qN+X6o+HCcxp9Oel+muLBNaH+mv8BPZpEthrS2C/NIE97wTeW2T6755uxN8fAgCAifgZYflz3upn9eXvW8jfmZG/96R/d03+/qH+HVL5e8Crd7mtwpAhX4HnVU2F2OG9T78uhv5ZDP36NCmcGFKvE7Va68so1PrSr9eWwIivXzdRf+adwOpJvwZtAnWE9WtBP9XzDoL1vBOoyZ7p19XPEvhthEz/9y0AAAAAAAAAAAAAAAAAAAAAAAA+wy9GYx8xWE4/5gAAAABJRU5ErkJggg==" alt="menu" width="30px" height="30px"/></li>
                      </ul>
                    </div>
                  </div>
                  <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Identifier</th>
                          <th>Providers</th>
                          <th>Created</th>
                          <th>Signed In</th>
                          <th>User UID</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>john@example.com</td>
                          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google" width="20px" height="20px"/></td>
                          <td>sep 29,2020</td>
                          <td>sep 29,2020</td>
                          <td>fuehfhw'FPEI\FPWEIfjejf03I\mk|LFmdg</td>
                        </tr>
                        <tr>
                          <td>toni@example.com</td>
                          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google" width="20px" height="20px"/></td>
                          <td>Dec 26,2020</td>
                          <td>Dec 29,2020</td>
                          <td>fgbuhdhfshdghfhbfsa257efww6eefg6</td>
                        </tr>
                        <tr>
                          <td>rob@example.com</td>
                          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google" width="20px" height="20px"/></td>
                          <td>sep 30,2020</td>
                          <td>sep 30,2020</td>
                          <td>fuehfhw'FPEI\hdghfhbfsa2573I\mk|LFmdg</td>
                        </tr>
                        <tr>
                          <td>sunny@example.com</td>
                          <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" alt="google" width="20px" height="20px"/></td>
                          <td>sep 17,2020</td>
                          <td>sep 17,2020</td>
                          <td>fuehfhw'FPEI\FPWEIfjejf03I\mk|LFmdg</td>
                        </tr>
                      </tbody>
                    </table>
                  <div class="card-body">
                    <p class="card-text">No more users for this project yet.</p>
                  </div>
                </div>
            </form>
            </div>
            
    )
}
}
export default Content