import React, { Component } from 'react'

export default class DemoLoop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productarr: [
                { maSP: 1, tenSP: "Iphone X", gia: 100000 },
                { maSP: 2, tenSP: "Samsung galaxy note 10", gia: 45000 },
                { maSP: 3, tenSP: "Nokia", gia: 30000 }
            ]
        }
    }
    //viết phương thức render các sản phẩm
    renderSP = () => {
        //cach 1
        // let contentTable = [];
        // for (let i = 0; i < this.state.productarr.length; i++) {
        //     const product = this.state.productarr[i];

        //     console.log(product);
        //     contentTable.push(
        //         <tr key={i}>
        //             <td>{product.maSP}</td>
        //             <td>{product.tenSP}</td>
        //             <td>{product.gia}</td>
        //         </tr>
        //     );
        // }
        // console.log(contentTable);
        // return contentTable;

        //cach 2: su dung ham map. hàm map sẽ tạo ra giá trị mới và put vào mảng kết quả cuối cùng
        // sau đó mảng đó sẽ gán cho contentTable
        let contentTable = [];
        contentTable = this.state.productarr.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.maSP}</td>
                    <td>{product.tenSP}</td>
                    <td>{product.gia}</td>
                </tr>)
        })
        console.log(contentTable);
        return contentTable;
    }

    render() {
        return (
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma sp</th>
                            <th>Ten sp</th>
                            <th>Gia sp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSP()}
                    </tbody>

                </table>
            </div>
        )
    }
}
