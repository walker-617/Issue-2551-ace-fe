import { MEDIA_QUERY_WIDTHS as mqw } from "./mediaUtils";

const mediaQueryWidths = {
  web: {
    min: mqw.md.max,
  },
  tablet: {
    min: mqw.vsm.max,
    max: mqw.md.max,
  },
  phone: {
    max: mqw.vsm.max,
  },
};

function getMediaQueriesFromSrcList(srcList, fallbackWidth) {
  const mediaQueries = srcList.map(({ type, width }) => {
    const widthRange = mediaQueryWidths[type];
    if (!widthRange || !width) return "";

    const minMediaWidth = widthRange.min
      ? `(min-width: ${widthRange.min})`
      : "";
    const maxMediaWidth = widthRange.max
      ? `(max-width: ${widthRange.max})`
      : "";
    return `${minMediaWidth}${
      minMediaWidth && maxMediaWidth ? " and " : ""
    }${maxMediaWidth} ${width}`;
  });

  mediaQueries.push(fallbackWidth);
  return mediaQueries.join(", ");
}

export { getMediaQueriesFromSrcList };
