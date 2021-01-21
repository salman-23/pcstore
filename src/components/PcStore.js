import products from "../products";
import { Button } from "../styles";
import PcStoreItem from "./PcStoreItem";

const PcStore = () => {
  const productsList = products.map((product) => {
    return <PcStoreItem key={product.id} product={product} />;
  });
  return <div>{productsList}</div>;
};

export default PcStore;
