import React, { Component } from 'react';

class Home extends Component {

    render() {
        return (
            <div className="home-bg">
                <br />
                <br />
                <br />

                <div className="login-box">
                   
                    <div className="login-box-body">
                        <br />
                            <center><img class="company_logo" src="company_logo.png" alt="images" /></center>
                            <br />
                            <br />
                            <div className="form-group has-feedback">
                                <input type="email" className="form-control" placeholder="Email" />
                                <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                            </div>
                            <div className="form-group has-feedback">
                                <input type="password" className="form-control" placeholder="Password" />
                                <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                            </div>
                            <div className="row">
                                <div className="col-xs-4"></div>
                                <div className="col-xs-4">
                                   <center><a href="/home"><button type="submit" className="btn btn-primary btn-block btn-flat ">Sign In</button></a></center> 
                                </div>
                                <div className="col-xs-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        
        }
        
export default Home