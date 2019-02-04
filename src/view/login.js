import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            email : '',
            password : '',
            client_id :'',
            client_secret : '',
        };
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

    // handleSubmit(event) {
    //     event.preventDefault();
        
    //     var formData = new FormData();
    //     formData.append('name', this.state.name);
    //     formData.append('detail', this.state.detail);

    //     axios.post('http://localhost:3001/', formData, {
    //         onUploadProgress: ProgressEvent => {

    //         },
    //     }).then(res => {
    //         localStorage.setItem(key , JSON.stringify(res));
    //     })

    // }


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
                                <input type="password" className="form-control"   placeholder="Password" />
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