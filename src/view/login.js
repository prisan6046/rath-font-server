import React , { Component } from 'react';

class Home extends Component{

    render(){
        return(
            <div className="home-bg">
                <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-md-offset-4">
                                <div class="login-panel panel panel-default">
                                    
                                    <div class="panel-body">
                                            <fieldset>
                                                <div class="form-group">
                                                    <center><img src="company_logo.png" /></center>
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus />
                                                </div>
                                                <div class="form-group">
                                                    <input class="form-control" placeholder="Password" name="password" type="password" value="" />
                                                </div>
                                                <div class="checkbox">
                                                    <label>
                                                        <input name="remember" type="checkbox" value="Remember Me" />Remember Me
                                                    </label>
                                                </div>
                                            
                                                <a href="/home" class="btn btn-lg btn-success btn-block">Login</a>
                                            </fieldset>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Home