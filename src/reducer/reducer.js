const reducer = (count, action) => {
  switch (action.type) {
    case "INC":
      return (count = count + 1);
      break;
    case "DEC":
      if (count !== 0) return (count = count - 1);
      else return count;
      break;
    default:
      count = 0;
      break;
  }
  return count;
};
export default reducer;
