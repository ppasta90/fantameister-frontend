import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import TeamCard from "../components/TeamCard";

const Homepage = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const handleSearch = (e:any) => {
    setSearch(e.target.value);
  }


  return (
    <main className="">
      <h1 className="p-4">FantaMeister</h1>
      <Navbar />
      <input onChange={handleSearch} type="text" placeholder="Search" className="p-4" value={search} />
      <div className="flex flex-wrap gap-4 p-4">
        {products
        .filter((singleProduct:any) => {
          if (search === "") {
            return singleProduct;
          } else {
            return singleProduct.category.toLowerCase().includes(search.toLowerCase());
          }
        })
        .map((singleProduct:any) => (
          <TeamCard key={singleProduct.id} product={singleProduct} />
        ))}
      </div>
    </main>
  );
};

export default Homepage;
