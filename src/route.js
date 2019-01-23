import React , { Component } from  'react'
import { Route, Switch } from 'react-router-dom'
import Login from './view/login'
import Home from './view/home'

const NotFoundPage = () => <div>
    <section className="main-block">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <center><font color="red" size="20">ไม่พบหน้า 404</font></center>
                </div>  
            </div>
        </div>
    </section>
</div>


class Routers extends  Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={ Login } />
                <Route exact path="/home" component={ Home } />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }

}

export default Routers