const getElementFromTemplate = (element) => {
  let newElement = document.createElement(`div`);
  newElement.innerHTML = element;
  return newElement;
};

export default getElementFromTemplate;
