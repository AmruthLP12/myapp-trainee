import React from 'react';
import Draggable from 'react-draggable';

const DraggableComponent = () => {
  return (
    <Draggable>
      <div style={draggableStyles}>
        <p>Drag me around!</p>
      </div>
    </Draggable>
  );
};

// Styling for the draggable component
const draggableStyles = {
  border: '1px solid #dddddd',
  padding: '20px',
  backgroundColor: '#f0f0f0',
  cursor: 'move',
};

export default DraggableComponent;
