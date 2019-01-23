import React , { Component }from 'react'

class Footer extends Component{

    render(){
        return(
            <div>
                <footer className="main-footer">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.2
                    </div>
                    <strong>ระบบจัดการยานพาหนะ กรมควบคุมมลพิษ</strong>
                </footer>
            </div>
        )
    }

}

export default Footer