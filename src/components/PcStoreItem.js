import { ImageSize, List, PriceSize } from "../styles";

const PcStoreItem = (props) => {
  const product = props.product;
  return (
    <List>
      <ImageSize src={product.image} alt="" />
      <h2>{product.name}</h2>
      <PriceSize>{product.price}</PriceSize>
      {/* <Button>

      <Button/>  */}
    </List>
  );
};

export default PcStoreItem;
