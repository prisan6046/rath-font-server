import React , { Component } from  'react'
import { Route, Switch } from 'react-router-dom'
import Login from './view/login'
import Home from './view/home'
import Sheet1 from './form/sheet1'
import Sheet2 from './form/sheet2'
import Sheet3 from './form/sheet3'
import Sheet4 from './form/sheet4'
import Sheet5 from './form/sheet5'
import Sheet6 from './form/sheet6'
import Sheet7 from './form/sheet7'
import Chart from './view/chart'

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
                <Route exact path="/sheet1" component={ Sheet1 } />
                <Route exact path="/sheet2" component={ Sheet2 } />
                <Route exact path="/sheet3" component={ Sheet3 } />
                <Route exact path="/sheet4" component={ Sheet4 } />
                <Route exact path="/sheet5" component={ Sheet5 } />
                <Route exact path="/sheet6" component={ Sheet6 } />
                <Route exact path="/sheet7" component={ Sheet7 } />
                <Route exact path="/chart" component={ Chart } />
                <Route component={NotFoundPage} />
            </Switch>
        )
    }

}

export default Routers