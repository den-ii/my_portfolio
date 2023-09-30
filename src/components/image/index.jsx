import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = ({ alt, src }) => {
  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      src={src}
      className="rounded h-[100]"
    />
  );
};

export default Image;
