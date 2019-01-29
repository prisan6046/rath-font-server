import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'


class Chart extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Simple Tables
                        <small>preview of simple tables</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="/">Tables</a></li>
                            <li className="active">Simple</li>
                        </ol>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">สถิติ</h3>
                                    </div>
                                    <div className="box-body table-responsive no-padding">
                                    <table className="table">
                                            <thead>
                                            <tr>
                                                <th>เดือน</th>
                                                <th>จำนวน</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>มกราคม</td>
                                                <td>23</td>
                                            </tr>
                                            <tr>
                                                <td>กุมภาพันธ์</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>มีนาคม</td>
                                                <td>6</td>
                                            </tr>
                                            <tr>
                                                <td>เมษายน </td>
                                                <td>33</td>
                                            </tr>
                                            <tr>
                                                <td>พฤษภาคม </td>
                                                <td>2</td>
                                            </tr>
                                            <tr>
                                                <td>มิถุนายน</td>
                                                <td>66</td>
                                            </tr>
                                            <tr>
                                                <td>กรกฎาคม</td>
                                                <td>12</td>
                                            </tr>
                                            <tr>
                                                <td>สิงหาคม</td>
                                                <td>99</td>
                                            </tr>
                                            <tr>
                                                <td>กันยายน </td>
                                                <td>32</td>
                                            </tr><tr>
                                                <td>ตุลาคม</td>
                                                <td>65</td>
                                            </tr><tr>
                                                <td>พฤศจิกายน</td>
                                                <td>22</td>
                                            </tr><tr>
                                                <td>ธันวาคม </td>
                                                <td>99</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>

                <Footer />
            </div>
        )
    }

}

export default Chart