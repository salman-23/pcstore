import "../App.css";

const PcStoreItem = (props) => {
  const product = props.product;
  return (
    <div className="list">
      <img className="image-size items-images" src={product.image} alt="" />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default PcStoreItem;
