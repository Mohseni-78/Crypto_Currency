const isInCart = (state, id) => {
  return !!state.selectedItem.find((item) => item.id === id);
};
const quantityCount = (state, id) => {
  const index = state.selectedItem.findIndex((item) => item.id === id);

  if (index === -1) {
    return false;
  } else {
    return state.selectedItem[index].quantity;
  }
};

const shorten = (title) => {
  const newTitle = title.split(" ")[0];
  return newTitle;
};

export { isInCart, quantityCount, shorten };
