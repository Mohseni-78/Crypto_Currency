const shortenDes = (description) => {
  const newDes = description.split(". ");
  return `${newDes[0]}
  `;
};

export { shortenDes };
