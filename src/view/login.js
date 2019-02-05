import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { 
            user : '',
            password : '',
            client_id :'',
            client_secret : '',
        };

        this.handleUserChange = this.handleUserChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
      }


      handleUserChange(e) {
        this.setState({
            user : e.target.value
        });
    }
    handlePasswordChange(e) {
        this.setState({
            password : e.target.value
        });
    }
    
    //   onSearch = (e) => {
    //     e.preventDefault();
    
    //     const { value } = this.input;
    
    //     if (value === '') {
    //       return;
    //     }
    
    //     const cachedHits = localStorage.getItem(value);
    //     if (cachedHits) {
    //       this.setState({ hits: JSON.parse(cachedHits) });
    //       return;
    //     }
    
    //     fetch('https://hn.algolia.com/api/v1/search?query=' + value)
    //       .then(response => response.json())
    //       .then(result => this.onSetResult(result, value));
    //   }
    
    //   onSetResult = (result, key) => {
    //     localStorage.setItem(key, JSON.stringify(result.hits));
    //     this.setState({ hits: result.hits });
    //   }

    handleSubmit(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append('user', this.state.user);
        formData.append('pass', this.state.password);

        axios.post('http://35.229.124.154/api/token/authLogin', formData, {
            onUploadProgress: ProgressEvent => {

            },
        }).then(res => {
            if(res.data.status == 200){
                localStorage.setItem('token' , res.data.token);
                this.props.history.push("/home");
            }else{
                alert("เข้าสู่ระบบไม่สำเร็จ " + res.data.status)
                this.setState({ user : ''})
                this.setState({ password : ''})
            }
            
        })

    }


    render() {
        return (
            <div className="home-bg">
                <br />
                <br />
                <br />

                <div className="login-box">
                   
                    <div className="login-box-body">
                        <br />
                            <center><img className="company_logo" src="company_logo.png" alt="images" /></center>
                            <br />
                            <br />
                            <form onSubmit={this.handleSubmit} >
                                <div className="form-group has-feedback">
                                    <input type="text" className="form-control" value={this.state.user } onChange={this.handleUserChange}  placeholder="Email" />
                                    <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
                                </div>
                                <div className="form-group has-feedback">
                                    <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange}    placeholder="Password" />
                                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                                </div>
                                <div className="row">
                                    <div className="col-xs-4"></div>
                                    <div className="col-xs-4">
                                    <center><button type="submit" className="btn btn-primary btn-block btn-flat ">Sign In</button></center> 
                                    </div>
                                    <div className="col-xs-4"></div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                )
            }
        
        }
        
export default Home