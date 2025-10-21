// efek ubah tab aktif
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navItems.forEach(i => i.classList.remove('text-emerald-500', 'font-semibold'));
    item.classList.add('text-emerald-500', 'font-semibold');
  });
});