import { createComponent as createInputListComponent } from './input-list-component.js';

/**
 * Create input-list component.
 *
 * @param {HTMLElement} container
 */

export default function (container) {
  const templateElem = container.querySelector('.app-tmp-section-component');

  if (templateElem === null) {
    throw new Error('Template .app-tmp-section-component is not found');
  }

  const sectionListContainer = templateElem.parentElement;

  if (sectionListContainer === null) {
    throw new Error('Template .app-tmp-section-component does not have parent');
  }

  const regenerateTitleSectionsAndStatus = () => {
    [...sectionListContainer.querySelectorAll('.app-cmp-section')].forEach(
      (sectionContainer, index, items) => {
        [...sectionContainer.querySelectorAll('.app-title-section')].forEach(
          (elem) => (elem.textContent = `${index + 1}`),
        );

        [
          ...sectionContainer.querySelectorAll('.app-cmd-remove-section'),
        ].forEach((elem) => (elem.disabled = items.length === 1));
      },
    );
  };

  const createSectionContainer = () => {
    const sectionContainer =
      templateElem.content.cloneNode(true).firstElementChild;

    sectionContainer.addEventListener('click', (ev) => {
      if (ev.target?.matches('.app-cmd-remove-section') ?? false) {
        sectionContainer.remove();

        regenerateTitleSectionsAndStatus();
      }
    });

    
    createInputListComponent(sectionContainer);
    
    sectionListContainer.append(sectionContainer);
    regenerateTitleSectionsAndStatus();
  };

  container.addEventListener('click', (ev) => {
    if (ev.target?.matches?.('.app-cmd-add-section') ?? false) {
        createSectionContainer();
    }
  });

  createSectionContainer();
}
