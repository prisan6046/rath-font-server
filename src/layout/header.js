import React , { Component }from 'react'

class Header extends Component{

    render(){
        return(
            <div>
                <nav className="navbar navbar-default navbar-static-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">ข้อมูลการตรวจสอบยานพาหนะ</a>
                    </div>

                    <ul className="nav navbar-top-links navbar-right">
                        <li className="dropdown">
                            <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-user">
                                <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                                </li>
                                <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                                </li>
                                <li className="divider"></li>
                                <li><a href="/"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="navbar-default sidebar" role="navigation">
                        <div className="sidebar-nav navbar-collapse">
                            <ul className="nav" id="side-menu">
                                <li className="sidebar-search">
                                    <div className="input-group custom-search-form">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">
                                            <i className="fa fa-search" />
                                        </button>
                                    </span>
                                    </div>
                                </li>
                                <li>
                                    <a href="index.html"><i className="fa fa-dashboard fa-fw"></i> แผงควบคุม</a>
                                </li>
                                <li>
                                    <a className="#"><i class="fa fa-table fa-fw"></i> ลงข้อมูลแบบ คพ<span class="fa arrow"></span></a>
                                    <ul class="nav nav-second-level">
                                        <li>
                                            <a href="/">ห้ามใช้ชั่วคราว</a>
                                        </li>
                                        <li>
                                            <a href="/">ใกล้ครบกำหนดคำสั่งห้ามใช้ชั่วคราว</a>
                                        </li>
                                        <li>
                                            <a href="/">ยกเลิกคำสั่งห้ามใช้ชั่วคราว</a>
                                        </li>
                                        <li>
                                            <a href="/">เกินกำหนดเวลา 30 วัน</a>
                                        </li>
                                        <li>
                                            <a href="/">ห้ามใช้เด็ดขาด</a>
                                        </li>
                                        <li>
                                            <a href="/">อยู่ระหว่างการปรับปรุง</a>
                                        </li>

                                        <li>
                                            <a href="/">ยกเลิกคำสั่งห้ามใช้เด็ดขาด</a>
                                        </li>


                                    </ul>
                                </li>
                                <li>
                                    <a href="tables.html"><i className="fa fa-bar-chart-o fa-fw"></i> สถิติ</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

}

export default Header