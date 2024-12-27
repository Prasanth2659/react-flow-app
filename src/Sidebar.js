import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNode, addEdge } from './actions';

const Sidebar = () => {
  const [node, setNode] = useState({ id: '', label: '', position: { x: 0, y: 0 } });
  const [edge, setEdge] = useState({ id: '', source: '', target: '' });
  const dispatch = useDispatch();

  const handleAddNode = () => {
    dispatch(addNode(node));
    setNode({ id: '', label: '', position: { x: 0, y: 0 } });
  };

  const handleAddEdge = () => {
    dispatch(addEdge(edge));
    setEdge({ id: '', source: '', target: '' });
  };

  return (
    <div className="sidebar">
      <h2>Add Node</h2>
      <input
        type="text"
        placeholder="ID"
        value={node.id}
        onChange={(e) => setNode({ ...node, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Label"
        value={node.label}
        onChange={(e) => setNode({ ...node, label: e.target.value })}
      />
      <input
        type="number"
        placeholder="X Position"
        value={node.position.x}
        onChange={(e) => setNode({ ...node, position: { ...node.position, x: +e.target.value } })}
      />
      <input
        type="number"
        placeholder="Y Position"
        value={node.position.y}
        onChange={(e) => setNode({ ...node, position: { ...node.position, y: +e.target.value } })}
      />
      <button onClick={handleAddNode}>Add Node</button>

      <h2>Add Edge</h2>
      <input
        type="text"
        placeholder="ID"
        value={edge.id}
        onChange={(e) => setEdge({ ...edge, id: e.target.value })}
      />
      <input
        type="text"
        placeholder="Source"
        value={edge.source}
        onChange={(e) => setEdge({ ...edge, source: e.target.value })}
      />
      <input
        type="text"
        placeholder="Target"
        value={edge.target}
        onChange={(e) => setEdge({ ...edge, target: e.target.value })}
      />
      <button onClick={handleAddEdge}>Add Edge</button>
    </div>
  );
};

export default Sidebar;
