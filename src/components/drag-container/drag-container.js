import React, { useEffect, useState } from "react";
import DragList from "../drag-list/drag-list";
import DropTarget from "../drop-target/drop-target";
import puzzleImage from "../../images/puzzle.png";

export default function DragContainer() {
  const [sourceElements, setSourceElements] = useState([]);
  const [draggedElements, setDraggedElements] = useState([]);
  const [draggedElement, setDraggedElement] = useState(null);

  const handleDrag = (e, currentElement) => {
    e.preventDefault();
    setDraggedElement(currentElement);
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    setSourceElements([
      ...sourceElements.filter((elem) => elem.id !== draggedElement.id),
    ]);
    setDraggedElements(
      draggedElements.map((elem, elemIndex) =>
        elem.id === draggedElement.id
          ? {}
          : index === elemIndex
          ? draggedElement
          : elem
      )
    );

    setDraggedElement(null);
  };

  useEffect(() => {
    const parts = [...Array(25)]
      .map((element, index) => ({
        elementSrc: `puzzle-piece-${index}.png`,
        id: index,
      }))
      .sort(() => Math.random() - 0.5);
    const emptyPuzzleData = [...Array(25)].map(() => ({}));

    setSourceElements([...parts]);
    setDraggedElements([...emptyPuzzleData]);
  }, []);

  return (
    <section className="container">
      <ul className="list">
        {sourceElements.map((item) => (
          <DragList
            key={item.id}
            puzzleElement={item}
            handleDrag={handleDrag}
          />
        ))}
      </ul>

      <ul className="list" style={{ backgroundImage: `url(${puzzleImage})` }}>
        {draggedElements.map((item, index) => (
          <DropTarget
            key={index}
            dropTargetIndex={index}
            puzzleElement={item}
            handleDrop={handleDrop}
            handleDrag={handleDrag}
          />
        ))}
      </ul>
    </section>
  );
}
