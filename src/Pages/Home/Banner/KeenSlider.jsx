import React, { useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import './style.css'
import banner1 from "../../../../public/banner/banner (1).jpeg";
import banner2 from "../../../../public/banner/banner (1).jpg";
import banner3 from "../../../../public/banner/banner (2).jpg";
import banner4 from "../../../../public/banner/banner (3).jpg";
import banner5 from "../../../../public/banner/banner (4).jpg";
import banner6 from "../../../../public/banner/banner (5).jpg";

const images = [banner1, banner2, banner3, banner4, banner5, banner6];

const KeenSlider = () => {
    const [details, setDetails] = React.useState(null)

  const [sliderRef] = useKeenSlider({
    loop: true,
    detailsChanged(s) {
      setDetails(s.track.details)
    },
    initial: 2,
  })

  function scaleStyle(idx) {
    if (!details) return {}
    const slide = details.slides[idx]
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * slide.portion)
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    }
  }

    return (
        <div ref={sliderRef} className="keen-slider zoom-out">
      {images.map((src, idx) => (
        <div key={idx} className="keen-slider__slide zoom-out__slide">
          <div style={scaleStyle(idx)}>
            <img src={src} />
          </div>
        </div>
      ))}
    </div>
    );
};

export default KeenSlider;
