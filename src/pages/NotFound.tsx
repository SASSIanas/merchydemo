import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
    <Navbar/>
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">

        
          <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-xl text-muted-foreground mb-4">
              Oops! Page not found
            </p>
            <Link to="/">
              <Button>Retour à l'accueil</Button>
            </Link>
          
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;
