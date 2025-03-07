'use client'
import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { useEffect, useState } from "react";

export default function PhotosPage() {

  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);

  setTimeout(() => {

    const backendPhotos = [];
    for(let i = 0; i < 10; i++) {
      backendPhotos.push(`https://picsum.photos/200/300?random=${i}`);
    }

    setPhotos(backendPhotos);
  }, 3000)


  useEffect(() => {
    if(photos.length > 0) {
      setLoading(false);
    }
  }, [photos])

  return (
    <div>
        <NavBar/>
        <h1>Photos</h1>
        {loading && <span className="loader"></span>}

        {!loading && <div>
            {photos.map(photo => (
             <img src={photo} key={photo} />
            ))}
          </div>

        }
        <Footer/>
    </div>
  );
}