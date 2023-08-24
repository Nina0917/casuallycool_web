import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
const Gallery = (props) => {
  //   <a href="https://ibb.co/tPFVcNN"><img src="https://i.ibb.co/Hp35YMM/image1.jpg" alt="image1" border="0"></a>
  // <a href="https://ibb.co/G08H4Zr"><img src="https://i.ibb.co/bPCbM4G/image2.jpg" alt="image2" border="0"></a>
  // <a href="https://ibb.co/ypSYB7P"><img src="https://i.ibb.co/qC5WFVj/image3.jpg" alt="image3" border="0"></a>
  // <a href="https://ibb.co/N98TKz6"><img src="https://i.ibb.co/Jvf3HPR/image4.jpg" alt="image4" border="0"></a>
  // <a href="https://ibb.co/mBQ5ymQ"><img src="https://i.ibb.co/W3SvzQS/image5.jpg" alt="image5" border="0"></a>
  // <a href="https://ibb.co/p4SCdfs"><img src="https://i.ibb.co/gtxsJSX/image6.jpg" alt="image6" border="0"></a>
  // <a href="https://ibb.co/PMNWnLY"><img src="https://i.ibb.co/xYDg0ks/image7.jpg" alt="image7" border="0"></a>
  // <a href="https://ibb.co/H7msgHk"><img src="https://i.ibb.co/D43yKRS/image8.jpg" alt="image8" border="0"></a>
  // <a href="https://ibb.co/M21rF3p"><img src="https://i.ibb.co/kHDjNW0/image9.jpg" alt="image9" border="0"></a>
  // <a href="https://ibb.co/zrcSGgm"><img src="https://i.ibb.co/bPhrzV6/image10.jpg" alt="image10" border="0"></a>
  // <a href="https://ibb.co/GtQrZh2"><img src="https://i.ibb.co/dL4HNh2/image11.jpg" alt="image11" border="0"></a>
  // <a href="https://ibb.co/VLcRqRj"><img src="https://i.ibb.co/3T92C2r/image12.jpg" alt="image12" border="0"></a>
  // <a href="https://ibb.co/xz2WyQX"><img src="https://i.ibb.co/frXfb7q/image13.jpg" alt="image13" border="0"></a>
  // <a href="https://ibb.co/74Ld0YW"><img src="https://i.ibb.co/Zm7pbL8/image14.jpg" alt="image14" border="0"></a>
  // <a href="https://ibb.co/0rr5BT3"><img src="https://i.ibb.co/CQQLJgF/image15.jpg" alt="image15" border="0"></a>
  // <a href="https://ibb.co/KVWKmLd"><img src="https://i.ibb.co/DwQrL8h/image16.jpg" alt="image16" border="0"></a>
  // <a href="https://ibb.co/JrbLwxw"><img src="https://i.ibb.co/Dw6XHGH/image17.jpg" alt="image17" border="0"></a>
  // <a href="https://ibb.co/xh8RKC1"><img src="https://i.ibb.co/BLKSHzy/image18.jpg" alt="image18" border="0"></a>
  // <a href="https://ibb.co/6Y9g536"><img src="https://i.ibb.co/PxXw87B/image19.jpg" alt="image19" border="0"></a>
  // <a href="https://ibb.co/fNzGPfF"><img src="https://i.ibb.co/xgt8RWL/image20.jpg" alt="image20" border="0"></a>
  // <a href="https://ibb.co/9VNy5Fc"><img src="https://i.ibb.co/KLXVvMb/image21.jpg" alt="image21" border="0"></a>
  // <a href="https://ibb.co/Tbs15PF"><img src="https://i.ibb.co/SdzcpV9/image22.jpg" alt="image22" border="0"></a>
  // <a href="https://ibb.co/X7Z5K6B"><img src="https://i.ibb.co/GWvM8Gw/image23.jpg" alt="image23" border="0"></a>
  // <a href="https://ibb.co/cxNrkBx"><img src="https://i.ibb.co/Wsc2Ghs/image24.jpg" alt="image24" border="0"></a>
  // <a href="https://ibb.co/m8FTsK4"><img src="https://i.ibb.co/vYvq5Wk/image25.jpg" alt="image25" border="0"></a>
  // <a href="https://ibb.co/TrW7CzY"><img src="https://i.ibb.co/GFH8hgn/image26.jpg" alt="image26" border="0"></a>
  // <a href="https://ibb.co/wgJnWrY"><img src="https://i.ibb.co/GpsZ23F/image27.jpg" alt="image27" border="0"></a>
  // <a href="https://ibb.co/HqjB4HD"><img src="https://i.ibb.co/VTsJ9qW/image28.jpg" alt="image28" border="0"></a>
  // <a href="https://ibb.co/j3F9ZD1"><img src="https://i.ibb.co/DwnPgQS/image29.jpg" alt="image29" border="0"></a>
  // <a href="https://ibb.co/0XDBwjz"><img src="https://i.ibb.co/yRfh3nx/image30.jpg" alt="image30" border="0"></a>
  // <a href="https://ibb.co/VCpB87K"><img src="https://i.ibb.co/YdTjGzr/image31.jpg" alt="image31" border="0"></a>
  // <a href="https://ibb.co/pyn4gQh"><img src="https://i.ibb.co/16bR3Mz/image32.jpg" alt="image32" border="0"></a>
  // <a href="https://ibb.co/9Ts1J11"><img src="https://i.ibb.co/qskczcc/image33.jpg" alt="image33" border="0"></a>
  const images_1 = [
    {
      img: "https://i.ibb.co/Hp35YMM/image1.jpg",
      alt: "image1",
    },
    {
      img: "https://i.ibb.co/bPCbM4G/image2.jpg",
      alt: "image2",
    },
    {
      img: "https://i.ibb.co/qC5WFVj/image3.jpg",
      alt: "image3",
    },
    {
      img: "https://i.ibb.co/Jvf3HPR/image4.jpg",
      alt: "image4",
    },
    {
      img: "https://i.ibb.co/W3SvzQS/image5.jpg",
      alt: "image5",
    },
    {
      img: "https://i.ibb.co/gtxsJSX/image6.jpg",
      alt: "image6",
    },
    {
      img: "https://i.ibb.co/Hp35YMM/image1.jpg",
      alt: "image1",
    },
    {
      img: "https://i.ibb.co/bPCbM4G/image2.jpg",
      alt: "image2",
    },
    {
      img: "https://i.ibb.co/qC5WFVj/image3.jpg",
      alt: "image3",
    },
    {
      img: "https://i.ibb.co/Jvf3HPR/image4.jpg",
      alt: "image4",
    },
    {
      img: "https://i.ibb.co/W3SvzQS/image5.jpg",
      alt: "image5",
    },
    {
      img: "https://i.ibb.co/gtxsJSX/image6.jpg",
      alt: "image6",
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
      <div className="relative flex items-center py-14">
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
              class="w-[320px] h-[240px] overflow-hidden inline-block p-2 cursor-pointer hover:scale-105  ease-in-out duration-300"
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
