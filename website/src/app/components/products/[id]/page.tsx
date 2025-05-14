'use client';
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:4002/product/${productId}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const toggleDescription = () => {
    setShowMore((prev) => !prev);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;
  if (!product) return <div className="text-center mt-10">Product not found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="max-w-md bg-white p-6 rounded-xl shadow-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

        <p className="text-gray-700 mb-2">
          {showMore ? product.description : product.description.slice(0, 200)}
          {product.description.length > 200 && (
            <button
              onClick={toggleDescription}
              className="ml-2 text-blue-600 underline text-sm"
            >
              {showMore ? "Show less" : "Show more"}
            </button>
          )}
        </p>

        <p className="text-green-600 font-bold text-lg">Price: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
