import { useEffect, useState } from "react";
import axios from "axios";
import authHeader from "@/services/auth-header";
import loadingImg from "@/assets/loading.svg";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const ImageWithAuth = (param: any) => {
  const { url } = param;
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fetchImage = async () => {
    try {
      const response = await axios.get(`${API_URL}${url}`, {
        headers: authHeader(),
        responseType: "blob",
      });
      const blob = response.data;
      setImageSrc(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>{imageSrc ? <img src={imageSrc} /> : <img src={loadingImg} />}</div>
  );
};

export default ImageWithAuth;
