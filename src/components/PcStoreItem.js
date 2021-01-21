const Item = (props) => {
  <div className="list">
    <img className="image-size items-images" src={props.product.image} alt="" />
    <h2>{props.product.name}</h2>
    <p>{props.product.price}</p>
  </div>;
};

export default PcStoreItem;
