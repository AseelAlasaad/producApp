'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useTranslation } from "next-i18next";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductsPage = () => {
  const { t } = useTranslation("common");

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getProduct = async () => {
    try {
      const response = await axios.get("http://localhost:4002/product");
      if (response.data) {
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      setError(t("failedToFetchProducts"));  // translated error message
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (loading) return <div className="text-center mt-10">{t("loading")}...</div>;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{t("productList")}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/components/products/${product.id}`} key={product.id}>
            <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition cursor-pointer flex flex-col h-full">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-green-600 font-bold mb-4">
                {t("price")}: ${product.price}
              </p>

              <p className="mt-auto inline-block bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition">
                {t("showMoreDetails")} →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
