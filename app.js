const views = {
  home: document.getElementById('homeView'),
  pdf: document.getElementById('pdfView'),
  scanner: document.getElementById('scannerView'),
  calc: document.getElementById('calcView'),
  image: document.getElementById('imageView'),
};

const tabs = Array.from(document.querySelectorAll('.tab'));
const actions = Array.from(document.querySelectorAll('.action'));

function setActive(target) {
  Object.entries(views).forEach(([key, el]) => {
    el.classList.toggle('hidden', key !== target);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.target === target);
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setActive(tab.dataset.target));
});

actions.forEach((btn) => {
  btn.addEventListener('click', () => setActive(btn.dataset.target));
});
