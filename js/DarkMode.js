class DarkMode {

    constructor() {
        let checkbox = document.querySelector('input[name=mode]');
        this.initTheme(checkbox);
        this.checkOption(checkbox);
    }

    checkOption(checkbox) {
        checkbox.addEventListener('change', this.switchTheme.bind(this));
    }

    switchTheme(e) {
        let currentTheme = document.querySelector('input[name=mode]');

        if (currentTheme.checked) {
            console.log(currentTheme);
            this.trans();
            document.documentElement.setAttribute('data-theme', 'darkTheme')
            localStorage.setItem('theme', 'darkTheme');
        } else {
            this.trans();
            document.documentElement.setAttribute('data-theme', 'lightTheme')
            localStorage.setItem('theme', 'lightTheme');
        }

    }

    initTheme(checkbox) {
        const darkThemeSelected =
            localStorage.getItem('theme') !== null &&
            localStorage.getItem('theme') === 'darkTheme';
        checkbox.checked = darkThemeSelected;
        darkThemeSelected ? document.documentElement.setAttribute('data-theme', 'darkTheme') :
            document.documentElement.setAttribute('data-theme', 'lightTheme');
    }

    trans() {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }

}

//Instantiate a new object from a js class
let darkMode = new DarkMode();