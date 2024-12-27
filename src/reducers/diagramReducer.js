const initialState = {
    nodes: [],
    edges: []
  };
  
  const diagramReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NODE':
        return { ...state, nodes: [...state.nodes, action.payload] };
      case 'ADD_EDGE':
        return { ...state, edges: [...state.edges, action.payload] };
      default:
        return state;
    }
  };
  
  export default diagramReducer;
  