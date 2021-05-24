import React, { Component } from 'react';
import DetailList from './DetailList';
import Users from './Users';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {username:'',value:''};
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({username: this.state.value});    
    event.preventDefault();
  }

  render() {
    const userName = this.state.username;   
    return (
      <div className="col-md-12">       
          <div className="row user-banner"> 
            {userName ==='' ? (
              <div className="front">
                        <div className = "row nav-bar">
            <div className = "col-md-12 app-title ada"><h1 className="headdd">ALL BIDS</h1></div>
          </div>
              <div className="col-md-12  label-center front-content"> 
                 <h3>Please Enter Your Name To Bid</h3>       
                  <form className="form-inline a-form" onSubmit={this.handleSubmit}>
                    <div className="form-group mx-sm-3" >                                       
                      <input id="inputUsername" placeholder="User Name" className="form-control abc" type="text" value={this.state.value} onChange={this.handleChange} />
                     
                    </div>
                    <br></br>
                    <input type="submit" className="btn btn-primary bid-submit-btn-1" value="Submit" />
                    <p>
                      OR
                    </p>
                    <h4>See bids</h4>
                    {/* Link with Users.js call class Users */}
                  </form>
                  
              </div>
              </div>
              ):(
                <div className="col-md-12  label-center">
                  <h2>HI! {userName} </h2>   
                  <div className="row">          
          <div className="col-md-12 product-detail-div"> 
             {this.props.details.length !== 0 && 
             <DetailList data={this.props.details}  userName={userName} />
           }
           {/* Change Detailist with Users to chk changes */}
          </div>
        </div>                
                </div>
                
              )}
           
          </div>
      
             
        
      </div>
    );
  }
}


export default Welcome;
