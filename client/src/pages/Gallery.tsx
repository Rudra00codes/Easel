import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "../components/eldoraui/3d-card";
import { GradualSpacing } from "../components/eldoraui/GradualSpacing";
// import { SmoothCursor } from "../components/common/SmoothCursor";

// Types
interface Artwork {
  _id: string;
  title: string;
  artist: string;
  price: number;
  category: string;
  imageUrl: string;
  status: "available" | "sold";
  featured?: boolean;
}

const categories = [
  "All",
  "Digital Art",
  "Photography",
  "Paintings",
  "Sculptures",
  "NFTs",
];

const Gallery = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchArtworks();
  }, [selectedCategory, priceRange, searchQuery, currentPage]);

  const fetchArtworks = async () => {
    try {
      setLoading(true);
      const queryParams = new URLSearchParams({
        page: currentPage.toString(),
        limit: "12",
        ...(selectedCategory !== "All" && { category: selectedCategory }),
        ...(priceRange.min > 0 && { minPrice: priceRange.min.toString() }),
        ...(priceRange.max < 10000 && { maxPrice: priceRange.max.toString() }),
        ...(searchQuery && { search: searchQuery }),
      });

      const response = await fetch(`/api/artworks?${queryParams}`);
      const data = await response.json();
      
      setArtworks(data.artworks);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching artworks:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Background Gradient */}
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}

      {/* <SmoothCursor 
        cursor={<SmoothCursor />}
        springConfig={{
          damping: 45,
          stiffness: 400,
          mass: 1,
          restDelta: 0.001
        }}
      /> */}

      {/* Hero Section */}
      <section className="relative py-20 px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <GradualSpacing
            text="Explore Our Gallery"
            className="font-bold mb-6 text-center text-white text-5xl md:text-7xl"
          />
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Discover unique artworks from talented artists around the world
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search artworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 rounded-full bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
              />
            </div>

            {/* Price Range */}
            <div className="flex gap-4 items-center">
              <input
                type="number"
                placeholder="Min Price"
                value={priceRange.min}
                onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                className="w-24 px-3 py-2 rounded-full bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max Price"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                className="w-24 px-3 py-2 rounded-full bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artworks Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-square bg-white/10 rounded-2xl" />
                  <div className="h-4 bg-white/10 rounded mt-4 w-3/4" />
                  <div className="h-4 bg-white/10 rounded mt-2 w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artworks.map((artwork) => (
                <CardContainer key={artwork._id} className="group">
                  <CardBody className="relative">
                    <CardItem>
                      <img
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className="w-full aspect-square object-cover rounded-2xl"
                        loading="lazy"
                      />
                    </CardItem>
                    <CardItem
                      translateZ={60}
                      className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl"
                    >
                      <h3 className="text-xl font-bold mb-2">{artwork.title}</h3>
                      <p className="text-sm text-gray-300 mb-2">by {artwork.artist}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          ${artwork.price.toLocaleString()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          artwork.status === "available" 
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}>
                          {artwork.status}
                        </span>
                      </div>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-12">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === i + 1
                      ? "bg-white text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery; 