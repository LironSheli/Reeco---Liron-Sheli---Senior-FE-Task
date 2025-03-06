import React, { useRef, useState } from "react";
import products from "./dummyData/products.json";
import categories from "./dummyData/categories.json";
import { ControlsWrapper } from "./styles";
import { Slider } from "../Slider";
import { ProductCard } from "./items/ProductCard";
import { CategoryChip } from "./items/CategoryChip";

export const App: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [movement, setMovement] = useState(0);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("horizontal");

  const handleSetMovement = () => {
    const value = inputRef.current?.value || 0;
    setMovement(Number(value));
  };

  return (
    <div className="app">
      <ControlsWrapper>
        <h5>Select your prop settings</h5>
        <div>
          <input type="number" ref={inputRef} />
          <button onClick={handleSetMovement}>Set movement</button>
        </div>
        <div>
          <input
            type="radio"
            onClick={() => setLayout("horizontal")}
            checked={layout === "horizontal"}
          />
          <label>Horizontal</label>{" "}
          <input
            type="radio"
            onClick={() => setLayout("vertical")}
            checked={layout === "vertical"}
          />
          <label>Vertical</label>
        </div>
      </ControlsWrapper>
      <Slider
        movement={movement}
        layout={layout}
        items={categories.map((categoryName) => (
          <CategoryChip name={categoryName} />
        ))}
      />
      <Slider
        movement={movement}
        layout={layout}
        items={products.map((product) => (
          <ProductCard product={product} />
        ))}
      />
    </div>
  );
};
