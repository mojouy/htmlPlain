const link = document.getElementsByClassName('btn--icon-download')[0];
const downloadList = document.getElementsByClassName('links-list')[0];
const hamburgerIcon = document.getElementsByClassName('burger-menu')[0];
const mainMenu = document.getElementsByClassName('nav__menu')[0];

(function () {
  const doc = document.documentElement;

  doc.classList.remove('no-js');
  doc.classList.add('js');
  bindClickAndTarget(link, downloadList);
  bindClickAndTarget(hamburgerIcon, mainMenu);
}());

function bindClickAndTarget(trigger, target) {
  const classToggle = 'hide--small-only';
  const activeClass = 'active';

  trigger.addEventListener('click', function (ev) {
    ev.preventDefault();
    target.classList.toggle(classToggle);
    target.classList.contains(classToggle)
      ? trigger.classList.remove(activeClass) : trigger.classList.add(activeClass);
  });
};
