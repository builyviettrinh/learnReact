import React, { Component } from 'react'

export default class Event extends Component {

    //phương thức xử lý cho nút click (tham số)
    handleShowMsg = (msg) => {
        alert(msg);
    }
    render() {
        let msg = "Hi Trinh!";
        return (
            <div className="container">
                {/* cach 1
                <button onClick={this.handleShowMsg.bind(this, msg)}>Show message</button> */}
                {/* cach 2  */}
                <button onClick={() => this.handleShowMsg(msg)}>Show message</button>

            </div>
            // function truyền dưới dạng tham số thì không có dấu đóng mở ngoặc ()
            // chỉ chạy sau khi mình click vào button
            // nếu để this.handleShowMsg() thì ngay khi load nó sẽ hiện msg mà k cần click
            //sử dụng .bind để truyền tham số vào
            // cú pháp .bind(this,thamso)
        )
    }
}
