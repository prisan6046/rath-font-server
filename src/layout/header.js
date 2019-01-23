import React, { Component } from 'react'

class Header extends Component {

    render() {
        return (
            <div>
                <header className="main-header">
                    <a href="/" className="logo">
                        <span className="logo-mini"><b>Sys</b>tem</span>
                        <span className="logo-lg"><b>System</b> Car</span>
                    </a>
                    <nav className="navbar navbar-static-top">
                        <a href="/" className="sidebar-toggle" data-toggle="push-menu" role="button">
                            <span className="sr-only">Toggle navigation</span>
                        </a>
                        <div className="navbar-custom-menu">
                            <ul className="nav navbar-nav">

                                <li className="dropdown user user-menu">
                                    <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                                        <img src="dist/img/user2-160x160.jpg" className="user-image" alt="name6" />
                                        <span className="hidden-xs">Alexander Pierce</span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="user-header">
                                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="name7" />

                                            <p>
                                                Alexander Pierce - Web Developer
                                            </p>
                                        </li>
                                        <li className="user-body">
                                            <div className="row">
                                                <div className="col-xs-4 text-center">
                                                    <a href="/">Followers</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="/">Sales</a>
                                                </div>
                                                <div className="col-xs-4 text-center">
                                                    <a href="/">Friends</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="user-footer">
                                            <div className="pull-left">
                                                <a href="/" className="btn btn-default btn-flat">ตั้งค่าข้อมูล</a>
                                            </div>
                                            <div className="pull-right">
                                                <a href="/" className="btn btn-default btn-flat">ออกจากระบบ</a>
                                            </div>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </nav>
                </header>
                <aside className="main-sidebar">
                    <section className="sidebar">
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="name1" />
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="/"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        <ul className="sidebar-menu" data-widget="tree">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="treeview"><a href="/"><i className="fa fa-book"></i> <span>หน้าหลัก</span></a></li>
                            <li className="treeview">
                                <a href="/">
                                    <i className="fa fa-dashboard"></i> <span>ลงข้อมูลแบบ คพ.</span>
                                    <span className="pull-right-container">
                                        <i className="fa fa-angle-left pull-right"></i>
                                    </span>
                                </a>
                                <ul className="treeview-menu">
                                    <li className="active"><a href="/sheet1"><i className="fa fa-circle-o"></i>ห้ามใช้ชั่วคราว</a></li>
                                    <li><a href="/sheet2"><i className="fa fa-circle-o"></i>ห้ามใช้ชั่วคราวแต่ใกล้ครบกำหนดเวลา</a></li>
                                    <li><a href="/sheet3"><i className="fa fa-circle-o"></i>ยกเลิกคำสั่งห้ามใช้ชั่วคราว</a></li>
                                    <li><a href="/sheet4"><i className="fa fa-circle-o"></i>ห้ามใช้ชั่วคราวและเกินกำหนดเวลา 30 วัน</a></li>
                                    <li><a href="/sheet5"><i className="fa fa-circle-o"></i>ห้ามใช้เด็ดขาด</a></li>
                                    <li><a href="/sheet6"><i className="fa fa-circle-o"></i>ห้ามใช้ชั่วคราวและกำลังปรับปรุง</a></li>
                                    <li><a href="/sheet7"><i className="fa fa-circle-o"></i>ยกเลิกคำสั่งห้ามใช้เด็ดขาด</a></li>
                                </ul>
                            </li>
                            <li><a href="/chart"><i className="fa fa-book"></i> <span>สถิติ</span></a></li>
                        </ul>
                    </section>
                </aside>


            </div>
        )
    }

}

export default Header