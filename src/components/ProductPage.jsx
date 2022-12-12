import { useParams } from "react-router";

const ProductPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
      상품의 이름으로 상품 페이지를 출력하고 있습니다.
    </div>
  );
};

export default ProductPage;
