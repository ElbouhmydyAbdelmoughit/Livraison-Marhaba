const INIT_STATE = {
  carts: []
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
      case "ADD_CART":
        const IteamIndex = state.carts.findIndex((iteam) => iteam._id === action.payload._id);
        if(IteamIndex >= 0){
          state.carts[IteamIndex].quantity += 1;
        }else {
          const temp = {...action.payload,quantity:1}
          return {
            ...state,
            carts:[...state.carts,temp]
        }
      }
      case "RMV_CART":
        const data = state.carts.filter((element) => element._id !== action.payload)
        return{
          ...state,
          carts:data
        }
      
      case "RMV_ONE":
        const IteamIndex_dec = state.carts.findIndex((iteam) => iteam._id === action.payload._id);
        if(state.carts[IteamIndex_dec].quantity >= 1){
          const dltItem = state.carts[IteamIndex_dec].quantity -= 1
          console.log([...state.carts,dltItem])
          return{
            ...state,
            carts:[...state.carts]
          }
        }

    default:
      return state
  }
}