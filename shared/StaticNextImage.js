import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { getMediaQueriesFromSrcList } from "../utils/imageUtils";

const StaticNextImage = ({
  loading = "lazy",
  srcList = [],
  alt = "image",
  src = "",
  className,
  onClick = () => {},
}) => {
  const { width = "100px", height = "100px" } =
    srcList.find(({ width, height }) => width && height) || {};

  const sizes = getMediaQueriesFromSrcList(srcList, width);

  return (
    <Image
      src={src}
      loading={loading}
      alt={alt}
      width={parseInt(width, 10)}
      height={parseInt(height, 10)}
      onClick={onClick}
      className={className}
      sizes={sizes}
      quality={100}
    />
  );
};

StaticNextImage.propTypes = {
  srcList: PropTypes.array,
  loading: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
};

export default StaticNextImage;
