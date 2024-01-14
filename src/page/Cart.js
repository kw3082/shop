import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from './../store/userSlice.js';
import { upCount } from '../store/cartSlice.js';

function Cart() {
  let state = useSelector(state => {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <div>
      <h4>
        {state.user.name} ({state.user.age})의 장바구니
      </h4>
      <button
        onClick={() => {
          return dispatch(increase(1));
        }}
      >
        버튼
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>

        <tbody>
          {state.cart.map((a, i) => {
            console.log();
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(upCount(i));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
