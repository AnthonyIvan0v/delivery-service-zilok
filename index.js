window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".button-scroll-up").style.display = "block";
    } else {
        document.querySelector(".button-scroll-up").style.display = "none";
    }
}


function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
};

const buttonScrollUp = document.querySelector(".button-scroll-up");
buttonScrollUp.addEventListener('click', topFunction);


(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  const links = document.querySelectorAll('.mobile-menu-link');
  links.forEach(element => element.addEventListener('click', toggleModal));

  refs.openMenuBtn.addEventListener('click', toggleModal);
  refs.closeMenuBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();


