const Menu = document.getElementById('menu-bar');

function closeMenu(){
  Menu.style.top="-100vh"
  document.getElementById('close-icon').style.right="10%"
  document.querySelectorAll('.close').style.backgroundColor="green"
  // document.getElementById('close-icon').style.overflow='none'

    // Menu.style.display = 'block';
}

function openMenu(){
  Menu.style.top="0"
}