import React, { Component } from 'react'

export default class DemoIf extends Component {
    // thuoc tinh state
    constructor(props) {
        super(props);
        // this.state là thuộc tính có sẵn của component
        // chứa các thuộc tính có khả năng thay đổi bởi 1 event nào đó
        this.state = {
            //thuoc tinh
            isLogin: false,
            userName: ""
        }
    }



    // cach 1:  dùng phương thức kết hợp if để xác nhận nội dung render
    // renderContent = () => {
    //     // isLogin === true => da dang nhap
    //     if (this.isLogin) {
    //         return (
    //             <div>
    //                 Hello Trinh Bui
    //                 <button>Logout</button>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div>
    //             <button>Login</button>
    //         </div>
    //     )
    // }

    login = () => {
        // this.setState là phương thức kế thừa từ class component
        // giúp thay đổi giá trị state và gọi hàm render
        // render lại giao diện, là phương thức bất đồng bộ
        this.setState({
            isLogin: true,
            userName: "Trinh Bui"

        })

        console.log(this.state);
    }

    logout = () => {
        // this.setState là phương thức kế thừa từ class component
        // giúp thay đổi giá trị state và gọi hàm render
        // render lại giao diện, là phương thức bất đồng bộ
        this.setState({
            isLogin: false,
            userName: ""
        })

        console.log(this.state);
    }

    // phuong thuc render cua component DemoIf
    render() {
        return (
            <div>
                {/* {this.renderContent()} */}
                {this.state.isLogin ? <div>Hello {this.state.userName}<button onClick={this.logout}>Logout</button></div> :
                    <button onClick={this.login}>Login</button>
                }
            </div>
        )
    }
}
