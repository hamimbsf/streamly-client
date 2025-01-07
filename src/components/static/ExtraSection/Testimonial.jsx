import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReviewsCard from "./ReviewsCard";
const Testimonial = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      movie: "Inception",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "An absolute masterpiece! The plot twists kept me on the edge of my seat.",
    },
    {
      id: 2,
      name: "Jane Smith",
      movie: "The Dark Knight",
      avatar:
        "https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "Christopher Nolan nailed it again! Heath Ledger's Joker is unforgettable.",
    },
    {
      id: 3,
      name: "Robert Brown",
      movie: "Avatar",
      avatar:
        "https://images.unsplash.com/photo-1636041282783-e218bb0a217b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      review:
        "Visually stunning and immersive. A true pioneer in filmmaking technology.",
    },
    {
      id: 4,
      name: "Emily Davis",
      movie: "Titanic",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "A timeless classic. The love story and the tragedy hit hard every time.",
    },
    {
      id: 5,
      name: "Michael Taylor",
      movie: "Interstellar",
      avatar:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "A brilliant exploration of time and space. The emotional depth is astonishing.",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      movie: "The Shawshank Redemption",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "A profound story of hope and friendship. One of the best movies ever made.",
    },
    {
      id: 7,
      name: "David Johnson",
      movie: "The Godfather",
      avatar:
        "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "A cinematic masterpiece. The story and performances are legendary.",
    },
    {
      id: 8,
      name: "Olivia Martinez",
      movie: "Parasite",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      review:
        "A brilliant critique of class struggle. The storytelling is superb and gripping.",
    },
  ];

  return (
    <>
      <div className=" my-14 ">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {reviews.map((item) => (
            <SwiperSlide key={item.id}>
              <ReviewsCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
