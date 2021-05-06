import React, { Component } from 'react'

export default class BaiTapState extends Component {
    //tao thuoc tinh
    constructor(props) {
        super(props);
        this.state = {
            img: "./img/imgRedCar.jpg"
        }
    }

    changeColor = (color) => {
        let imgSrc = "";
        switch(color) {
            case "red" :{
                imgSrc = "./img/imgRedCar.jpg";
            };      
            break;
            case "sliver":{
                imgSrc = "./img/imgSilverCar.jpg";
            };       
            break;
            case "black":{
                imgSrc = "./img/imgBlackCar.jpg";
            } 
            
        }
        //gọi setState để truyền imgSrc
        this.setState({
            img: imgSrc
        })
    }



    render() {
        const styleButton = {
            color: "#fff",
            marginRight: "10px",
            padding: "5px"
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        {/* hien thi image car */}
                        <h2>Please choose color you like</h2>
                        <img src={this.state.img} width={400} height={200} alt="car" />
                    </div>
                    <div className="col-md-5">
                        <h2>Change color</h2>
                        <button onClick={()=> this.changeColor("red")} className="btn btn-danger" style={styleButton}>Red color</button>
                        <button onClick={()=> this.changeColor("sliver")}  className="btn btn-secondary" style={styleButton}>Sliver color</button>
                        <button onClick={()=> this.changeColor("black")}  className="btn btn-dark" style={styleButton}>Black color</button>
                    </div>
                </div>
            </div>
        )
    }
}
