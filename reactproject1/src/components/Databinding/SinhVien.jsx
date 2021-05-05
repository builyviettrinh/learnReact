import React, { Component } from 'react'

export default class SinhVien extends Component {

    // thuộc tính
    fullName = "Trinh bui";
    company = "Binding data";

    renderInfoSV = (teamName) => {
        return (
            <ul>
                <li>Full name: {this.fullName}</li>
                <li>Class: {this.company}</li>
                <li>Team name: {teamName}</li>

            </ul>
        )
    }

    //phương thức
    render() {
        // biến trong phương thức thì không cần + this
        const teamName = "abc";
        return (
            <div className="container">
                {this.renderInfoSV(teamName)}


            </div>
        )
    }
}
