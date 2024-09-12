import React from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash/isEmpty";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const mediaQueryWidths = {
  web: {
    min: "1280px",
  },
  tablet: {
    min: "768px",
    max: "1279px",
  },
  phone: {
    max: "767px",
  },
};

const StaticNextImage = ({
  loading = "lazy",
  srcList = [],
  alt = "image",
  src = "",
  className,
  onClick = () => {},
}) => {
  function getMediaQueriesFromSrcList(srcList, width) {
    const mediaQueries = [];

    for (let i = 0; i < srcList.length; i++) {
      const item = srcList[i];

      if (item.type && item.width && mediaQueryWidths[item.type]) {
        const widthRange = mediaQueryWidths[item.type];
        const minMediaWidth = widthRange.min
          ? `(min-width: ${widthRange.min})`
          : "";
        const maxMediaWidth = widthRange.max
          ? `(max-width: ${widthRange.max})`
          : "";

        const sourceMediaQuery = `${minMediaWidth}${
          [minMediaWidth, maxMediaWidth].includes("") ? "" : " and "
        }${maxMediaWidth} ${item.width}`;

        mediaQueries.push(sourceMediaQuery);
      }
    }

    mediaQueries.push(width); // adding fallback width
    return mediaQueries.join(", ");
  }

  function createStyling(srcList, className, defaultWidth) {
    let styles = [];
    styles.push(`w-[${defaultWidth}]`);
    srcList.map((item) => {
      switch (item.type) {
        case "web":
          styles.push(
            item.width ? `web:w-[${item.width}] tablet:w-[${item.width}]` : ""
          );
          break;
        case "tablet":
          styles.push(
            item.width ? `tablet:w-[${item.width}] w-[${item.width}]` : ""
          );
          break;
        case "phone":
          styles.push(item.width ? `w-[${item.width}]` : "");
          break;
        default:
          break;
      }
    });

    return twMerge(className, styles.join(" "));
  }

  const { width, height } = srcList.find(
    ({ width, height }) => width && height
  ) || { width: "100px", height: "100px" };

  const sizes = getMediaQueriesFromSrcList(srcList, width);

  const styles = createStyling(srcList, className, width);

  console.log(styles);
  console.log(sizes);

  return (
    <Image
      src={src}
      loading={loading}
      alt={alt}
      width={parseInt(width, 10)}
      height={parseInt(height, 10)}
      onClick={onClick}
      className={styles}
      sizes={sizes}
      quality={100}
    />
  );
};

StaticNextImage.propTypes = {
  srcList: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
};

export default StaticNextImage;
