/* Add Iteams In Card */
export const ADD = (item) => {
  return {
      type: "ADD_CART",
      payload: item
  }
}

/* Remove Iteams In Card */
export const DLT = (_id) => {
  return {
      type: "RMV_CART",
      payload: _id
  }
}