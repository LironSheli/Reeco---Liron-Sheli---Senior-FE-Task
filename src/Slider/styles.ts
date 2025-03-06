import styled from "styled-components";

export const ITEM_GAP = 24;

interface SliderWrapperProps {
  layout?: "horizontal" | "vertical"; // You can add more layouts if needed
}

export const SliderWrapper = styled.div<SliderWrapperProps>`
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 16px;

  .ls-slider-button {
    width: 40px;
    button {
      height: 40px;
      width: 40px;
      z-index: 1;
      position: relative;
      background: #324a63;
      border: none;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      color: white;
      font-weight: 800;
      cursor: pointer;

      &.ls-button-prev svg {
        margin-right: -8px;
      }

      &.ls-button-next svg {
        margin-right: -4px;
      }

      &:hover {
        background: rgb(23, 48, 74);
      }

      &:active {
        background: rgb(8, 28, 49);
      }
    }
  }

  .ls-slider-content {
    position: relative;
    display: flex;
    gap: ${ITEM_GAP}px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    width: 100%;
    overflow-x: auto;
    overflow-y: visible;

    .ls-slider-item {
      width: fit-content;
    }

    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  ${({ layout }) =>
    layout === "vertical"
      ? `
  .ls-slider-content {
    max-height: 50vh;
    width: fit-content;
    flex-direction: column;
    align-items: flex-start;
  }
  `
      : ""}
`;
