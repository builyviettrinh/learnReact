import React, { Component } from 'react'

export default class Product extends Component {
    // thuộc tính

    //Phương thức
    render() {

        //nội dung thẻ được định nghĩa trong hàm render
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src="/././logo512.png" height="350" alt />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Body</p>
                </div>
            </div>

        )
    }
}
