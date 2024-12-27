import React, { useState } from 'react';
import ReactFlow, {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Controls,
  MiniMap
} from 'react-flow-renderer';
import initialElements from './initialElements.json';

const DiagramFlow = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) => {
    const nodeChanges = elementsToRemove.filter((e) => e.type === 'node').map((e) => ({ id: e.id, type: 'remove' }));
    const edgeChanges = elementsToRemove.filter((e) => e.type === 'edge').map((e) => ({ id: e.id, type: 'remove' }));
    
    setElements((els) => {
      const updatedNodes = applyNodeChanges(nodeChanges, els);
      const updatedEdges = applyEdgeChanges(edgeChanges, updatedNodes);
      return updatedEdges;
    });
  };

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46} /* 'delete' key */
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default DiagramFlow;
