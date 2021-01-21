import PcStoreItem from "./PcStoreItem";
import products from "./products";

const ProductsList = products.map((product) => {
  <PcStoreItem key={product.id} product={product} />;
});
<div>{ProductsList}</div>;

export default PcStore;
