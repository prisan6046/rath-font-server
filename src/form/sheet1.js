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

                    <section class="content">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="box box-info">
                                    <div class="box-header with-border">
                                        <h3 class="box-title">รายละเอียดคำสั่ง (คพ.๓)</h3>
                                    </div>

                                    <form class="form-horizontal">
                                        <div class="box-body">
                                            <div class="form-group">
                                                <label for="inputEmail3" class="col-sm-2 control-label">เล่มที่</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">เลขที่</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">วันที่ตรวจสอบ</label>
                                                <div class="col-sm-10">
                                                    <input type="date" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">สถานที่ตรวจสอบ</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">เจ้าหน้าที่ผู้ตรวจสอบ</label>
                                                <div class="col-sm-10">
                                                    <select class="form-control select2">
                                                        <option>กรุณาเลือก</option>
                                                        <option>นาย</option>
                                                        <option>นาง</option>
                                                        <option>นางสาว</option>
                                                        <option>ยศ</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">ตำแหน่ง</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword3" class="col-sm-2 control-label">สังกัด</label>
                                                <div class="col-sm-10">
                                                    <input type="text" class="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>
                            <div class="col-md-6">

                                <div class="box box-info">
                                        <div class="box-header with-border">
                                            <h3 class="box-title">ผลการตรวจสอบ</h3>
                                        </div>

                                        <form class="form-horizontal">
                                            <div class="box-body">
                                                <div class="form-group">
                                                    <label for="inputEmail3" class="col-sm-2 control-label">ประเภทการตรวจ</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control select2">
                                                                <option>กรุณาเลือก</option>
                                                                <option>ควันดำ</option>
                                                                <option>เสียงดัง</option>
                                                                <option>ไฮโดรคาร์บอน</option>
                                                                <option>คาร์บอนไดออกไซด์</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword3" class="col-sm-2 control-label">ค่าที่วัดได้</label>
                                                    <div class="col-sm-10">
                                                        <input type="text" class="form-control" />
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="inputPassword3" class="col-sm-2 control-label">ผลการตรวจสอบ</label>
                                                    <div class="col-sm-10">
                                                        <select class="form-control select2">
                                                            <option>กรุณาเลือก</option>
                                                            <option>ห้ามใช้ยานพาหนะชั่วคราว</option>
                                                            <option>ห้ามใช้ยานพาหนะเด็ดขาด</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label for="inputPassword3" class="col-sm-2 control-label">วันที่ห้ามใช้ยานพาหนะ</label>
                                                    <div class="col-sm-10">
                                                        <input type="date" class="form-control" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                            </div>
                        </div>
                    </section>


                    <section class="content">
                        <div class="box box-default">
                            <div class="box-header with-border">
                                <h3 class="box-title">ข้อมูลยานพาหนะ</h3>
                                <div class="box-tools pull-right">
                                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-remove"></i></button>
                                </div>
                            </div>
                            <div class="box-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label>ประเภทยานพาหนะ</label>
                                            <select class="form-control select2">
                                                <option>กรุณาเลือก</option>
                                                <option>รถยนต์</option>
                                                <option>รถยนต์สามล้อใช้งาน</option>
                                                <option>รถจักรยานยนต์</option>
                                                <option>เรือ</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>ทะเบียนรถ</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>ทะเบียนรถจังหวัด</label>
                                            <input type="date" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>ยี่ห้อยานพาหนะ</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>สี</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>ยี่ห้อเครื่องยนต์</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                

                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                                <label>ประเภทเครื่องยนต์</label>
                                                <select class="form-control select2">
                                                    <option>กรุณาเลือก</option>
                                                    <option>น้ำมันดีเซล</option>
                                                    <option>น้ำมันเบนซิน</option>
                                                    <option>ไฟฟ้า</option>
                                                    <option>ฮบริด</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label>ประเภทเชื้อเพลิง</label>
                                                <select class="form-control select2">
                                                    <option>กรุณาเลือก</option>
                                                    <option>น้ำมันดีเซล</option>
                                                    <option>น้ำมันเบนซิน</option>
                                                    <option>ก๊าซธรรมชาติ</option>
                                                    <option>ไฟฟ้า</option>
                                                    <option>ไฮบริด</option>
                                                </select>
                                            </div>
                                        
                                        <div class="form-group">
                                            <label>ผู้ขับ</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>ที่อยู่</label>
                                            <input type="text" class="form-control" />
                                        </div>
                                        <div class="form-group">
                                            <label>เบอร์ติดต่อ</label>
                                            <input type="text" class="form-control" />
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