import { useParams } from 'react-router-dom';

function Detail(props) {
    let { id } = useParams();

    let 현재상품 = props.shoes.find((a, i) => {
        return a.id == id;
    });

    console.log(현재상품);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{현재상품.title}</h4>
                        <p>{현재상품.content}</p>
                        <p>{현재상품.price}</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
