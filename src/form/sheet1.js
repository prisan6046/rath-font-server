import React, { Component } from 'react'
import Header from '../layout/header'
import Footer from '../layout/footer'

class SheetOne extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>
                            Sheet 1
                        <small>Preview</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="/"><i className="fa fa-dashboard"></i> Home</a></li>
                            <li><a href="/">Forms</a></li>
                            <li className="active">General Elements</li>
                        </ol>
                    </section>

                    <section className="content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="box box-info">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">รายละเอียดคำสั่ง (คพ.๓)</h3>
                                    </div>
                                    <form className="form-horizontal">
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label for="inputEmail3" className="col-sm-2 control-label">เล่มที่</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">เลขที่</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">วันที่ตรวจสอบ</label>
                                                <div className="col-sm-10">
                                                    <input type="date" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">สถานที่ตรวจสอบ</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                                <div className="col-sm-10">
                                                    <select className="form-control select2">
                                                        <option>กรุณาเลือก</option>
                                                        <option>นาย</option>
                                                        <option>นาง</option>
                                                        <option>นางสาว</option>
                                                        <option>ยศ</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">ตำแหน่ง</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label for="inputPassword3" className="col-sm-2 control-label">สังกัด</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="box box-info">
                                        <div className="box-header with-border">
                                            <h3 className="box-title">ผลการตรวจสอบ</h3>
                                        </div>

                                        <form className="form-horizontal">
                                            <div className="box-body">
                                                <div className="form-group">
                                                    <label for="inputEmail3" className="col-sm-2 control-label">ประเภทการตรวจ</label>
                                                    <div className="col-sm-10">
                                                        <select className="form-control select2">
                                                                <option>กรุณาเลือก</option>
                                                                <option>ควันดำ</option>
                                                                <option>เสียงดัง</option>
                                                                <option>ไฮโดรคาร์บอน</option>
                                                                <option>คาร์บอนไดออกไซด์</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="inputPassword3" className="col-sm-2 control-label">ค่าที่วัดได้</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="inputPassword3" className="col-sm-2 control-label">ผลการตรวจสอบ</label>
                                                    <div className="col-sm-10">
                                                        <select className="form-control select2">
                                                            <option>กรุณาเลือก</option>
                                                            <option>ห้ามใช้ยานพาหนะชั่วคราว</option>
                                                            <option>ห้ามใช้ยานพาหนะเด็ดขาด</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label for="inputPassword3" className="col-sm-2 control-label">วันที่ห้ามใช้ยานพาหนะ</label>
                                                    <div className="col-sm-10">
                                                        <input type="date" className="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </section>


                    <section className="content">
                        <div className="box box-default">
                            <div className="box-header with-border">
                                <h3 className="box-title">ข้อมูลยานพาหนะ</h3>
                                <div className="box-tools pull-right">
                                    <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                                    <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-remove"></i></button>
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>ประเภทยานพาหนะ</label>
                                            <select className="form-control select2">
                                                <option>กรุณาเลือก</option>
                                                <option>รถยนต์</option>
                                                <option>รถยนต์สามล้อใช้งาน</option>
                                                <option>รถจักรยานยนต์</option>
                                                <option>เรือ</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>ทะเบียนรถ</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>ทะเบียนรถจังหวัด</label>
                                            <input type="date" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>ยี่ห้อยานพาหนะ</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>สี</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>ยี่ห้อเครื่องยนต์</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                                <label>ประเภทเครื่องยนต์</label>
                                                <select className="form-control select2">
                                                    <option>กรุณาเลือก</option>
                                                    <option>น้ำมันดีเซล</option>
                                                    <option>น้ำมันเบนซิน</option>
                                                    <option>ไฟฟ้า</option>
                                                    <option>ฮบริด</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>ประเภทเชื้อเพลิง</label>
                                                <select className="form-control select2">
                                                    <option>กรุณาเลือก</option>
                                                    <option>น้ำมันดีเซล</option>
                                                    <option>น้ำมันเบนซิน</option>
                                                    <option>ก๊าซธรรมชาติ</option>
                                                    <option>ไฟฟ้า</option>
                                                    <option>ไฮบริด</option>
                                                </select>
                                            </div>
                                        <div className="form-group">
                                            <label>ผู้ขับ</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>ที่อยู่</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>เบอร์ติดต่อ</label>
                                            <input type="text" className="form-control" />
                                        </div>
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

export default SheetOne; 