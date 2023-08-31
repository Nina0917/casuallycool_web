import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Gallery = (props) => {
  const images_1 = [
    {
      img: "https://i.ibb.co/L0Zcnnq/image1.jpg",
      alt: "image3",
    },
    {
      img: "https://i.ibb.co/MpHfDbv/image24.jpg",
      alt: "image6",
    },
    {
      img: "https://i.ibb.co/RH7PFYG/image25.jpg",
      alt: "image3",
    },
    {
      img: "https://i.ibb.co/TbQkP58/image18.jpg",
      alt: "image4",
    },
    {
      img: "https://i.ibb.co/4dNZ12n/image17.jpg",
      alt: "image5",
    },

    {
      img: "https://i.ibb.co/6wW939s/image23.jpg",
      alt: "image1",
    },
    {
      img: "https://i.ibb.co/9gfyCtR/image4.jpg",
      alt: "image2",
    },
    {
      img: "https://i.ibb.co/rG65Nqw/image19.jpg",
      alt: "image1",
    },
    {
      img: "https://i.ibb.co/xJWpSYR/image20.jpg",
      alt: "image2",
    },
  ];

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <>
      <div className="relative flex items-center py-32 px-28">
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideLeft}
          size={40}
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {images_1.map(({ img, alt }) => (
            <img
              class="w-[280px] h-[280px] overflow-hidden inline-block p-2 cursor-pointer hover:scale-105  ease-in-out duration-300"
              src={img}
              alt={alt}
            />
          ))}
        </div>
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100"
          onClick={slideRight}
          size={40}
        />
      </div>
    </>
  );
};

export default Gallery;
