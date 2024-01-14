/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, createContext, useState } from 'react';
import data from './data';
import Detail from './page/Detail';
import Cart from './page/Cart';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [click, setClick] = useState(1);
  let [load, setLoad] = useState(false);

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
                navigate('/detail/0');
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/cart');
              }}
            >
              Cart
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
                    return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  setClick(click + 1);
                  console.log(click);

                  if (click == 1) {
                    axios
                      .get('https://codingapple1.github.io/shop/data2.json')
                      .then(data => {
                        setLoad(true);
                        let copy = [...shoes, ...data.data];
                        setShoes(copy);

                        console.log(shoes);
                        setLoad(false);
                      })
                      .catch(() => {
                        console.log('실패');
                      });
                  } else if (click == 2) {
                    axios
                      .get('https://codingapple1.github.io/shop/data3.json')
                      .then(data => {
                        setLoad(true);

                        let copy = [...shoes, ...data.data];

                        setShoes(copy);

                        console.log(shoes);
                        setLoad(false);
                      })
                      .catch(() => {
                        console.log('실패');
                      });
                  } else if (click >= 3) {
                    alert('상품없긴해요');
                  }
                }}
              >
                버튼
              </button>
              {load == true ? <Load></Load> : null}
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>맴버임</div>}></Route>
          <Route path="location" element={<div>위치정보임</div>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

function Load(props) {
  return (
    <div>
      <h4>로딩중입니다</h4>
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

export default App;
