import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css'

const modalTemplate = document.querySelector('#modal');
const openModalBtnRef = document.querySelector('button[data-open-modal]');

const instance = basicLightbox.create(modalTemplate, {
  onShow(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.addEventListener('click', instance.close);

    window.addEventListener('keydown', closeByEscape)
  },
  onClose(instance) {
    const closeModalBtnRef = getCloseModalBtnRef(instance);
    closeModalBtnRef.removeEventListener('click', instance.close);
    window.removeEventListener('keydown', closeByEscape)
  }

});

openModalBtnRef.addEventListener('click', instance.show);

function getCloseModalBtnRef(parent) {
  return parent
      .element()
      .querySelector('button[data-close-modal]');
};

function closeByEscape(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
};