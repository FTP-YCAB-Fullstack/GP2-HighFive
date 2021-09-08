const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const sortArrBestThree = (array, newData) => {
  let isAddToArray = false;
  array.forEach((item, index) => {
    if (newData.score >= item.score) {
      array.splice(index, 0, newData);
      isAddToArray = true;
    }
  });
  if (!isAddToArray) {
    array.push(newData);
  }
  return array.slice(0, 3);
};

export { shuffleArray, sortArrBestThree };
