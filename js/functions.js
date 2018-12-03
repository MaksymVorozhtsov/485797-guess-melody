const getElementFromTemplate = (element) => {
  document.querySelector(`.main`).innerHTML = element;
}

export default getElementFromTemplate;