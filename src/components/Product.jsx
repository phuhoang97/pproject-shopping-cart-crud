import "./Product.css";

function Product({ elementProduct }) {
  return (
    <div className='item'>
      <img src={`/image/${elementProduct.image}`} />
      <div className='title'>{elementProduct.name}</div>
      <div className='price'>{elementProduct.price}</div>
      <button>Add To Cart</button>
    </div>
  );
}

export default Product;
