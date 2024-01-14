/* eslint-disable */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function Detail(props) {
  let [abc, setAbc] = useState(0);
  let { id } = useParams();
  let [count, setCount] = useState(2);
  let [num, setNum] = useState('');
  let [탭, 탭변경] = useState(0);
  let 현재상품 = props.shoes.find((a, i) => {
    return a.id == id;
  });

  let [father, setFather] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFather('end');
    }, 100);

    return () => {
      setFather('');
    };
  }, []);

  // useEffect(() => {
  //   let 타이머 = setInterval(() => {
  //     setCount(count - 1);
  //   }, 1000);
  //   count < 0 ? clearTimeout(타이머) : null;
  //   console.log(2);

  //   return () => {
  //     console.log(1);
  //     clearTimeout(타이머);
  //   };
  // });

  useEffect(() => {
    if (isNaN(num) == true) {
      alert('그러지마슈');
    }
  }, [num]);

  return (
    <>
      <div className={`container start ${father}`}>
        <div>
          {count >= 0 ? (
            <div className="alert alert-warning">{count}초이내 구매시 할인</div>
          ) : null}
          {abc}
          <button
            className="ms-2"
            onClick={() => {
              setAbc(abc + 1);
            }}
          >
            버튼
          </button>
          <input
            className="ms-2"
            onChange={e => {
              setNum(e.target.value);
            }}
          ></input>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes${
                현재상품.id + 1
              }.jpg`}
              width="100%"
            />
          </div>

          <div className="col-md-6">
            <h4 className="pt-5">{현재상품.title}</h4>
            <p>{현재상품.content}</p>
            <p>{현재상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(0);
              }}
              eventKey="link-0"
            >
              버튼0
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(1);
              }}
              eventKey="link-1"
            >
              버튼1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                탭변경(2);
              }}
              eventKey="link-2"
            >
              버튼2
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <TabContent 탭={탭} shoes={props.shoes} />
      </div>
    </>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 100);

    return () => {
      setFade('');
    };
  }, [props.탭]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          ((<div>{props.shoes[0].title}</div>),
          (<div>탭1</div>),
          (<div>탭2</div>)),
        ][props.탭]
      }
    </div>
  );

  // if(탭 == 0){
  //   return <div>탭0</div>
  // }
  // if(탭 == 1){
  //   return <div>탭1</div>
  // }
  // if(탭 == 1){
  //   return <div>탭2</div>
  // }
}

export default Detail;
