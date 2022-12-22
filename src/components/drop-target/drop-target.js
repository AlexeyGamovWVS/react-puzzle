import React from "react";

export default function DropTarget(props) {
  const { puzzleElement, handleDrop, dropTargetIndex, handleDrag } = props;
  return (
    <li
      className="listItem"
      onDragOver={(e) => e.preventDefault()}
      {...(!puzzleElement.id && {
        onDrop: (e) => handleDrop(e, dropTargetIndex),
      })}
    >
      {puzzleElement.elementSrc && (
        <img
					draggable
          onDrag={(e) => handleDrag(e, puzzleElement)}
          src={`./${puzzleElement.elementSrc}`}
        />
      )}
    </li>
  );
}
