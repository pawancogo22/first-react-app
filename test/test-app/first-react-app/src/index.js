import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const arr = [
    {
        id :1,
        title: "ABC",
        seller: "abc",
        price: 200,
        img: "https://images.pexels.com/photos/4185963/pexels-photo-4185963.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"

    },
    {
        id :2,
        title: "CDE",
        seller: "cde",
        price: 2200,
        img: "https://images.pexels.com/photos/1029807/pexels-photo-1029807.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }

]
function Booklist() {
    var a = 200;
    return (
        <>
            {/* var a = 200; */}
            <h1 className="title">Booklist components </h1>
            {/* <Book  title= "ABC" seller="abc" price={a}/> */}
            {/* <Book title= "" seller="" price=""/> */}

            {/* this is already a javascript so  */}
            {arr.map(item =>
                <Book id ={item.id} titile={item.title} seller={item.seller} price={item.price} img ={item.img}></Book>
            )}
        </>
    );
}
function Book({ id, title, seller, price , img }) {//WE CAN PASS DEFAULT VALUE 
    return (
        <>
            <div className='card'>
                <div>#{id}</div>
                <img src={img} alt="img1"></img>
                <h2>{title} </h2>
                <p>{seller}</p>
                <p>{price + 19}</p>
            </div>
        </>
    );
}
ReactDOM.render(<Booklist />, document.getElementById("root"));