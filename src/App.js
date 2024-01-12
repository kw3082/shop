import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data';
import Detail from './detail';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
    let [shoes, setshoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark" className="">
                <Container>
                    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>

                    <Nav className="ms-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => {
                                navigate('/detail');
                            }}
                        >
                            Detail
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <div className="container">
                                <div className="row">
                                    {shoes.map((a, i) => {
                                        return <Card shoes={shoes[i]} i={i}></Card>;
                                    })}
                                </div>
                            </div>
                        </>
                    }
                ></Route>
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

                <Route path="/event" element={<Event />}>
                    <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
                </Route>

                <Route path="/about" element={<About />}>
                    <Route path="member" element={<div>맴버임</div>}></Route>
                    <Route path="location" element={<div>위치정보임</div>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function About() {
    return (
        <div>
            <h4>회사정보임</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img
                src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
                width="80%"
            ></img>
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    );
}

export default App;
