import { ProductCardWrapper } from "./styles";

interface ProductProps {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

export const ProductCard = ({ product }: { product: ProductProps }) => (
  <ProductCardWrapper>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <span>{product.category}</span>
    <p>{product.description}</p>
  </ProductCardWrapper>
);
