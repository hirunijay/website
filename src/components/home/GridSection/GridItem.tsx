import React from "react";
import Image from "next/image";

interface GridItemProps {
  title: string;
  height: string;
  subtitle: string;
  subtitleTextSize?: string;
  description?: any;
  descriptionString?: string;
  image?: any;
  actions?: React.ReactNode;
  backgroundImage: any;
  titleTextColour: string;
  descriptionTextColour?: string;
  imageSize?: any;
  descFontSize?: string;
  descLineHeight?: string;
  descFontWeight?: string;
}

const GridItem = ({
  title,
  subtitle,
  subtitleTextSize,
  descLineHeight,
  descFontWeight,
  descFontSize,
  description,
  actions,
  backgroundImage,
  titleTextColour,
  descriptionTextColour,
  height = "h-[600px]",
}: GridItemProps) => {
  return (
    <div className="relative flex flex-col justify-start h-full overflow-hidden grid_card">
      <div className={`grid_card__image ${height} w-full`}>
        <Image
          src={backgroundImage}
          alt={`${title}`}
          placeholder="blur"
          fill
          className="object-fit"
        />
      </div>
      {/* absolute content */}
      <div className="absolute flex flex-col items-center justify-center w-full px-3 mt-10 grid_card__content">
        <div className="flex flex-col gap-3 text-center text_content mx-7 lg:mx-5 xl:mx-5 2xl:mx-8 ">
          <h1 className="font-[700] text-white text-7xl">{title}</h1>
          <h3
            className="font-[510] leading-normal lg:text-xl md:text-xl"
            style={{
              color: titleTextColour,
            }}
          >
            {subtitle}
          </h3>

          {description && (
            <p
              className="absolute font-normal right-[140px] top-[500px] text-md"
              style={{
                color: descriptionTextColour,
                lineHeight: descLineHeight,
                fontSize: descFontSize,
                fontWeight: descFontSize,
              }}
            >
              {description}
            </p>
          )}

          <div className="flex flex-row justify-around links">{actions}</div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
