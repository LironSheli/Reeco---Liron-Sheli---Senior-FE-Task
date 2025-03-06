import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  gap: 8px;
  border-radius: 8px;
  padding: 8px;
  background: #e4e9ee;
  width: 200px;

  img {
    padding: 24px;
    height: 152px;
    width: 152px;
    border-radius: 4px;
    background-color: white;
  }

  h3 {
    margin: 0;
    color: #2a323b;
  }

  span {
    background: #c4d2e1;
    color: red;
    padding: 2px 8px;
    border-radius: 4px;
    color: #2a323b;
  }

  p {
    margin: 4px 0;
    color: #4e5863;
    min-height: 80px;
    max-height: 80px;
    overflow: auto;
  }
`;

export const CategoryChipWrapper = styled.button`
  padding: 8px 24px;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #31465c;
  color: #31465c;
`;
