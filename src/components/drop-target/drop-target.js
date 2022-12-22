import React from "react";

export default function DropTarget(props) {
  const { puzzleElement, handleDrop } = props;
  return (
    <li
      className="listItem"
			onDragOver={(e)=> e.preventDefault()}
			onDrop={handleDrop}
    >
      {puzzleElement.elementSrc && (
        <img
          src={`./${puzzleElement.elementSrc}`}
        />
      )}
    </li>
  );
}
