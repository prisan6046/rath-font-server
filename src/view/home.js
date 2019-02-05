import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'


class Home extends Component {

    constructor(){
        super()
        this.state = {
            token : '',
            status : false ,
        }

    }

    componentDidMount(){
        this.state.token = localStorage.getItem('token');
        if(this.state.token == null){
            this.props.history.push("/")
        }
    }


    render() {
        return (
            <div>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            ยานพาหนะ
                        </h1>
                    </section>
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">รายการ</h3>
                                    </div>
                                    <div className="box-body table-responsive no-padding">
                                    <div className="box-body">
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option>กรุณาเลือก</option>
                                                    <option>ห้ามใช้ชั่วคราว</option>
                                                    <option>ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</option>
                                                    <option>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</option>
                                                    <option>ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</option>
                                                    <option>ห้ามใช้เด็ดขาด</option>
                                                    <option>ห้ามใช้ชั่วคราวและกำลังปรับปรุง</option>
                                                    <option>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</option>
                                                </select>
                                            </div>
                                        </div>
                                    <table className="table">
                                            <thead>
                                            <tr>
                                                <th>ทะเบียนรถ</th>
                                                <th>ทะเบียนจังหวัด</th>
                                                <th>ยี่ห้อยานพาหนะ</th>
                                                <th>วันที่ห้ามใช้ยานพาหนะ</th>
                                                <th>วันที่ออกใบอนุญาติ</th>
                                                <th>วันที่ขอให้ตรวจสอบ</th>
                                                <th>วัน/เวลาที่คำสั่งมีผล</th>
                                                <th>สถานะการตรวจ</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>ห้ามใช้ชั่วคราว</td>
                                                <td>23</td>
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

export default Home