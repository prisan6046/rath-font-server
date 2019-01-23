import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'


class Home extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Dashboard
                        <small>Control panel</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-lg-3 col-xs-6">
                                <div className="small-box bg-aqua">
                                    <div className="inner">
                                        <h3>150</h3>

                                        <p>New Orders</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-bag"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xs-6">
                                <div className="small-box bg-green">
                                    <div className="inner">
                                        <h3>53<sup >%</sup></h3>

                                        <p>Bounce Rate</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xs-6">
                                <div className="small-box bg-yellow">
                                    <div className="inner">
                                        <h3>44</h3>

                                        <p>User Registrations</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xs-6">
                                <div className="small-box bg-red">
                                    <div className="inner">
                                        <h3>65</h3>

                                        <p>Unique Visitors</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-pie-graph"></i>
                                    </div>
                                    <a href="/" className="small-box-footer">More info <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <section className="col-lg-7 connectedSortable">
                                <div className="nav-tabs-custom">
                                    <ul className="nav nav-tabs pull-right">
                                        <li className="active"><a href="#revenue-chart" data-toggle="tab">Area</a></li>
                                        <li><a href="#sales-chart" data-toggle="tab">Donut</a></li>
                                        <li className="pull-left header"><i className="fa fa-inbox"></i> Sales</li>
                                    </ul>
                                    <div className="tab-content no-padding">
                                        <div className="chart tab-pane active" id="revenue-chart" ></div>
                                        <div className="chart tab-pane" id="sales-chart" ></div>
                                    </div>
                                </div>
                            </section>

                            <section className="col-lg-5 connectedSortable">
                                <div className="box box-solid bg-green-gradient">
                                    <div className="box-header">
                                        <i className="fa fa-calendar"></i>
                                        <h3 className="box-title">Calendar</h3>
                                        <div className="pull-right box-tools">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-success btn-sm dropdown-toggle" data-toggle="dropdown">
                                                    <i className="fa fa-bars"></i></button>
                                                <ul className="dropdown-menu pull-right" role="menu">
                                                    <li><a href="/">Add new event</a></li>
                                                    <li><a href="/">Clear events</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="/">View calendar</a></li>
                                                </ul>
                                            </div>
                                            <button type="button" className="btn btn-success btn-sm" data-widget="collapse"><i class="fa fa-minus"></i>
                                            </button>
                                            <button type="button" className="btn btn-success btn-sm" data-widget="remove"><i class="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="box-body no-padding">
                                        <div id="calendar" ></div>
                                    </div>
                                    <div className="box-footer text-black">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="clearfix">
                                                    <span className="pull-left">Task #1</span>
                                                    <small className="pull-right">90%</small>
                                                </div>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" ></div>
                                                </div>

                                                <div className="clearfix">
                                                    <span className="pull-left">Task #2</span>
                                                    <small className="pull-right">70%</small>
                                                </div>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" ></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="clearfix">
                                                    <span className="pull-left">Task #3</span>
                                                    <small className="pull-right">60%</small>
                                                </div>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green" ></div>
                                                </div>
                                                <div className="clearfix">
                                                    <span className="pull-left">Task #4</span>
                                                    <small className="pull-right">40%</small>
                                                </div>
                                                <div className="progress xs">
                                                    <div className="progress-bar progress-bar-green"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }

}

export default Home