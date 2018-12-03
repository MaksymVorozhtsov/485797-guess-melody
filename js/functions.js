export default function getElementFromTemplate(element) {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = element;
  return newElement;
};
