import { ReactNode, useEffect, useRef, useState } from "react";
import { ITEM_GAP, SliderWrapper } from "./styles";
import { ReactComponent as IconBack } from "./arrow_back.svg";
import { ReactComponent as IconNext } from "./arrow_next.svg";

interface SliderProps {
  items?: ReactNode[];
  layout?: "vertical" | "horizontal";
  movement?: number; // move of px, if 0 - move by item
}

export const Slider = ({
  items = [],
  layout = "horizontal",
  movement = 0,
}: SliderProps) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [sliderPosition, setSliderPosition] = useState({
    start: true,
    end: true,
  });
  const isLayoutHorizontal = layout === "horizontal";

  useEffect(() => {
    if (sliderRef.current) {
      updatePosition(0);
    }
    // eslint-disable-next-line
  }, [sliderRef.current]);

  const getActiveIndex = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollTop } = sliderRef.current;
      const items = sliderRef.current.querySelectorAll(".ls-slider-item");
      let distanceFromStart = 0;
      for (let i = 0; i < items.length - 1; i++) {
        if (isLayoutHorizontal) {
          distanceFromStart += items[i].clientWidth + ITEM_GAP;
          if (distanceFromStart > scrollLeft) {
            return i;
          }
        } else {
          distanceFromStart += items[i].clientHeight + ITEM_GAP;
          if (distanceFromStart > scrollTop) {
            return i;
          }
        }
      }
    }
    return 0;
  };

  const updatePosition = (newOffset: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        ...(isLayoutHorizontal ? { left: newOffset } : { top: newOffset }),
        behavior: "smooth",
      });

      setSliderPosition({
        start: newOffset <= 0,
        end: isLayoutHorizontal
          ? newOffset + sliderRef.current.clientWidth >=
            sliderRef.current.scrollWidth
          : newOffset + sliderRef.current.clientHeight >=
            sliderRef.current.scrollHeight,
      });
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      let newOffset = 0;
      if (movement) {
        newOffset =
          (isLayoutHorizontal
            ? sliderRef.current.scrollLeft
            : sliderRef.current.scrollTop) + movement;
      } else {
        const activeIndex = getActiveIndex();
        if (activeIndex < items.length - 1) {
          const sliderItems =
            sliderRef.current.querySelectorAll(".ls-slider-item");
          const nextItem = sliderItems[activeIndex + 1] as HTMLDivElement;
          newOffset = isLayoutHorizontal
            ? nextItem.offsetLeft
            : nextItem.offsetTop;
        }
      }

      updatePosition(newOffset);
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      let newOffset = 0;

      if (movement) {
        newOffset =
          (isLayoutHorizontal
            ? sliderRef.current.scrollLeft
            : sliderRef.current.scrollTop) - movement;
      } else {
        const activeIndex = getActiveIndex();
        if (activeIndex > 0) {
          const sliderItems =
            sliderRef.current.querySelectorAll(".ls-slider-item");
          const prevItem = sliderItems[activeIndex - 1] as HTMLDivElement;
          prevItem.classList.add("active");
          newOffset = isLayoutHorizontal
            ? prevItem.offsetLeft
            : prevItem.offsetTop;
        }
      }

      updatePosition(newOffset);
    }
  };

  return (
    <SliderWrapper layout={layout}>
      <div className="ls-slider-button">
        {!sliderPosition.start && (
          <button className="ls-button-prev" onClick={handlePrev}>
            <IconBack />
          </button>
        )}
      </div>
      <div ref={sliderRef} className="ls-slider-content">
        {items.map((item, idx) => (
          <div className="ls-slider-item" key={idx}>
            {item}
          </div>
        ))}
      </div>
      <div className="ls-slider-button">
        {!sliderPosition.end && (
          <button className="ls-button-next" onClick={handleNext}>
            <IconNext />
          </button>
        )}
      </div>
    </SliderWrapper>
  );
};
