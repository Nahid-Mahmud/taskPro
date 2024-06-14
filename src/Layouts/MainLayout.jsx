import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/shared/Loader";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAllResourcesLoaded = () => {
      setLoading(false);
    };

    // check if all resources are loaded
    if (document.readyState === "complete") {
      handleAllResourcesLoaded();
    }

    const handleLoad = () => {
      handleAllResourcesLoaded();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);



  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
