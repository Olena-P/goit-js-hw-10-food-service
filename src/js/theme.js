
const refs = {
    changeTheme: document.querySelector('#theme-switch-toggle'),
    
    body: document.querySelector('body'),
};
console.log(refs.changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function addClassList(e) {
    const checkTheme = refs.changeTheme.checked;
    if (checkTheme) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);

    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    };
};

refs.changeTheme.addEventListener('change', addClassList);
refs.changeTheme.addEventListener('change', clikCheckTheme);

function clikCheckTheme(e) {
    const checkTheme = refs.changeTheme.checked;
    if (checkTheme) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
};


const themeInLocal = localStorage.getItem('theme');

if (themeInLocal === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.changeTheme.checked = true;
};
