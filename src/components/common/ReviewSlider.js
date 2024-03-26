import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper";
import ReactStars from "react-rating-stars-component";
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";
import { FaStar } from "react-icons/fa";

const ReviewSlider = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAllReviews = async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );

      console.log(data);
      if (data?.success) {
        setReviews(data?.data);
      }
      console.log("pinting reviews", reviews);
    };

    fetchAllReviews();
  }, []);

  return (
    <div>
      <div>
        <Swiper></Swiper>
      </div>
    </div>
  );
};

export default ReviewSlider;
