import React, { useState } from "react";
import "../../style/Coruosal.css"; // Import your custom CSS
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
const CustomCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://s3-alpha-sig.figma.com/img/69bc/b07d/a469f5f482c2728b8b4927294d78c4dc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZuO5Is54HdJac1-NBJMLg36hmUYOZ1~VY4m0M6aX965pitmP-9eZn57yhfjYjF5QVbmnS1HE1NVjV6CktoZhKDQDZ0pGWB7XZJPD64a8h7mH7n~bR4v38bJCH7iClg0-cIVCom~XroGWSiduTRwPuWiT3lexiO~3JlfK1KaBnd4hX~5ros9gy2VTQUPCNQAoTZ5tpZGE3NX3-nPoZWKSu0gk~hsWf7n6TxOejc0vOn-A1dKul2xRYp2nQ~yyxD~~unBzq~vwL5soTlk4aYl8rv14ZrTYOoz~fuZvVEb1kXWASVagruE~8BsDWgqqPdUG2RYb6DWYQrCF5-Ly3HjivQ__",
    "https://s3-alpha-sig.figma.com/img/b52b/09c7/3d494cc315827f1c59f42506e6bc1e1b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDsad5WxL0n-LbNAhL78PbMe7o5kkS5d1wQl9575WsmRTGlmB5X4w2o0RANTbLy4eUE8Q2cj0amVYr5bOFeRncItG~fpXNWJxUoO6PuLObmkIihU3BwfadNCUXlp3JkVnbCZUpfMOvdDGBPzg0fiLuotzfekd5OhUbzVS7yA5M~5TEoRwOQF24MOvEEBQIzCNUqbFcHKbCtIBHXq9jlW2x7Y3ecsbsBCDTpFnS2hFbGryxthtP4zP4FLJvViMtY0yY98W6vP~hVjzqKtsSpnTeiSc6yqAQxNDMs~brzpYc4ZgdsfgLnpB2U9yAfXvLxA8ZgtAynZrYBgQe7kgChZeQ__",
    "https://s3-alpha-sig.figma.com/img/3e04/9759/1c3dd9afa467650aee24a8777204b52b?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWzUdJqFkd1B-xdDzYneGYWIQD4LAI6ZC6H2BIJ6gszIQuU3prommUa35ps55N44m7x~TMGaPDl-TE7dGo1TTW-CEejpPRxl6sse1gbijH4Zcylez0jEOu88WvtHw0IgPDMAI5Cuvi3RStB33n1kUfHTDVMSYTTry44GClgxqgAZ53pH5btZcdrBApWinK-S5kEFCEukAEoyOt3VMK0uYq5MjHka1aLc63v87urQJ5Z7vVGTmXkZ6RbiJf7lpHzIPmcr~m2qq672CZqW9E1ubMJdNN-s2IJ5Bw~qK0Wo7gT2He-6fg8qRW65kR~WLNB3sKVrARSXXJ-rwyq920f4vg__",
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container ">
      <div className="carousel">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentImage ? "center" : ""
            } ${index === (currentImage + 1) % images.length ? "right mt-60 ml-64" : ""} ${
              index === (currentImage - 1 + images.length) % images.length
                ? "left mt-60 mr-64"
                : ""
            }`}
          >
            <img src={src} alt={`carousel ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevImage}>
      <FaChevronLeft className="ml-2"/> 
      
        
      </button>
      <button className="next" onClick={nextImage}>
      <FaChevronRight className="ml-2" /> 
      </button>
    </div>
  );
};

export default CustomCarousel;
