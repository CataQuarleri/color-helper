import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useColor } from '../contexts/ColorContex'


import useClickOutside from "./useClickOutside";

export const PopoverPicker = ({ currentcolor, onChange }) => {
    console.log("color en popover", currentcolor)
  const popover = useRef();
  const [isOpen, toggle] = useState(false);
  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: currentcolor }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker currentcolor={currentcolor} onChange={onChange} />
        </div>
      )}
    </div>
  );
};