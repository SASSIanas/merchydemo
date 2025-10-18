import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/merchy-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchShow,setSearchShow] = useState(false);
  const [isAccessoriesOpen, setIsAccessoriesOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { name: "T-Shirts", path: "/category/t-shirt" },
    { name: "Sweatshirt", path: "/category/sweatshirt" },
    { name: "Capuche", path: "/category/hoodie" },
    { name: "Casquette", path: "/category/cap" },
    { 
      name: "Accessoires", 
      path: "/category/accessories",
      subcategories: [
        { name: "Pillow", path: "/category/pillow" },
        { name: "Mug", path: "/category/mug" },
        { name: "Poster-A3", path: "/category/poster-a3" }
      ]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>+212 652 624 996</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/login" className="hover:text-primary-light transition-colors">
              Login
            </Link>
            <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/register" className="hover:text-primary-light transition-colors">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Merchy" className="w-10 h-10" />
              <span className="text-xl font-bold text-foreground"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {categories.map((category) => (
                <div key={category.name} className="relative">
                  {category.subcategories ? (
                    <div>
                      <button
                        onMouseEnter={() => setIsAccessoriesOpen(true)}
                        onMouseLeave={() => setIsAccessoriesOpen(false)}
                        className="flex py-4 items-center text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {category.name} <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {isAccessoriesOpen && (
                        <div 
                          onMouseEnter={() => setIsAccessoriesOpen(true)}
                          onMouseLeave={() => setIsAccessoriesOpen(false)}
                          className="absolute top-[70%] left-0 bg-background border mt-1 shadow-md rounded-md"
                        >
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.name}
                             
                             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                              to={sub.path}
                              className="block px-4 py-2 text-foreground hover:bg-primary hover:text-white"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                     
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    to={category.path}
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            {location.pathname !== '/search' ? 
            
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <Input
                  type="text"
                  placeholder="Search for a product..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10  rounded-full"
                />
                <Button 
                  type="submit"
                  size="sm" 
                  className="absolute right-1 top-1 h-8 w-8 p-0  rounded-full"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
            </div>: null
            }

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              
              <Button onClick={()=> setSearchShow(!searchShow)} variant="ghost" size="sm" className="text-foreground rounded-full sm:hidden border h-10 w-10">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground rounded-full border h-10 w-10">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-foreground relative  rounded-full border h-10 w-10">
                <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/cart" className="flex items-center">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </Link>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden  rounded-full h-10 w-10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchShow && location.pathname !== '/search' ? 
          <div className="md:hidden  pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="text"
                placeholder="Search for a product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10  rounded-full"
              />
              <Button 
                type="submit"
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 p-0  rounded-full"
              >
                <Search className="h-4 w-4 " />
              </Button>
            </form>
          </div>: null
}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="px-4 py-2 space-y-2">
              {categories.map((category) => (
                <div key={category.name}>
                  <Link
                   to={category.path}
                    className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                    onClick={() => (setIsMenuOpen(false), window.scrollTo({ top: 0, behavior: "smooth" }))}
                  >
                    {category.name}
                  </Link>
                  {/* Mobile dropdown */}
                  {category.subcategories && (
                    <div className="pl-4">
                      {category.subcategories.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="block py-1 text-foreground hover:text-primary transition-colors"
                          onClick={() => (setIsMenuOpen(false), window.scrollTo({ top: 0, behavior: "smooth" }))}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
