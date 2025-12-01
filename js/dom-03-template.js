function createInputComponent() {
  const numberInputs = [...document.querySelectorAll('.app-inp-number')];

  const templateElem = document.querySelector('.app-tmp-number-component');

  if (templateElem) {
    const inputContainer = templateElem.content.cloneNode(true).firstElementChild;

    [...inputContainer.querySelectorAll('.app-title-number')].forEach((elem) => (elem.textContent = `${numberInputs.length + 1}:`));

    const inputElem = inputContainer.querySelector('.app-inp-number');

    inputElem?.addEventListener('change', () => {
      const numberInputs = [...document.querySelectorAll('.app-inp-number')];

      const result = numberInputs.reduce(
        (result, elem) =>
          result + (Number.isNaN(elem.valueAsNumber) ? 0 : elem.valueAsNumber),
        0,
      );

      const numberOutputs = [...document.querySelectorAll('.app-out-number')];
      numberOutputs.forEach((elem) => (elem.textContent = result));
    });

    const container = document.querySelector('.app-cmp-number-list');
    if (container) {
      container.append(inputContainer);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const addButton = [...document.querySelectorAll('.app-cmp-add-number-input')];

  addButton.forEach((elem) =>
    elem.addEventListener('click', () => {
      createInputComponent();
    }),
  );

  createInputComponent();
});
