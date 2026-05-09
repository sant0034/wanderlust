import { useState } from "react";

const useCarousel = (length, itemsPerView) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + itemsPerView) % length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0
        ? Math.max(length - itemsPerView, 0)
        : prev - itemsPerView
    );
  };

  return { index, next, prev };
};

export default useCarousel;