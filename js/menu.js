// Espera-se que tenha um elemento com ID "menu-trigger"
var MenuController = (function() {

    var menuController = {
        menuContainer: undefined,
        open: false,
        trigger: undefined,
        toggleFn: undefined,

        init: function () {
            this.open = false;
            this.toggleFn = this.toggleMenu.bind(this);
            this.prepareMenuComponent();
            this.prepareMenuTrigger();
        },

        prepareMenuComponent: function () {
            this.menuContainer = document.querySelector('.menu-container');
            if (!this.menuContainer) {
                this.createMenuContainer();
                document.body.appendChild(this.menuContainer);
            }
        },

        prepareMenuTrigger: function () {
            this.trigger = document.getElementById('menu-trigger');
            this.trigger.removeEventListener('click', this.toggleFn);
            this.trigger.addEventListener('click', this.toggleFn);
        },

        createMenuContainer: function () {
            this.menuContainer = document.createElement('div');
            this.menuContainer.className = 'menu-container';

            var menu = document.createElement('div');
            menu.className = 'main-menu';
            this.menuContainer.appendChild(menu);

            this.createMenuItems();

            this.menuContainer.addEventListener('click', this.toggleFn);
        },

        createMenuItems: function () {
            var itemsList = document.createElement('ul');
            itemsList.className = 'menu-items-list';
            this.menuContainer.appendChild(itemsList);

            itemsList.appendChild(this.createItem('menu-i-map', 'mapa'));
            itemsList.appendChild(this.createItem('menu-i-profile', 'perfil'));
            itemsList.appendChild(this.createItem('menu-i-graffiti', 'grafitti'));
            itemsList.appendChild(this.createItem('menu-i-planning', 'planejador'));
            itemsList.appendChild(this.createItem('menu-i-friends', 'amigos'));
            itemsList.appendChild(this.createItem('menu-i-panic', 'pânico', 'panico'));
        },

        createItem: function (className, linkName, pageName) {
            var item = document.createElement('li');
            item.className = 'menu-item ' + className;

            if (!pageName) {
                pageName = linkName;
            }

            var link = `<a href="/virada-cultural/pages/${pageName}.html" 
                           class="menu-link" data-transition="slide-in">${linkName}</a>`;
            item.innerHTML = link;

            return item;
        },

        toggleMenu: function () {
            this.open = !this.open;
            if (this.open) {
                this.menuContainer.classList.add('menu-open');
            } else {
                this.menuContainer.classList.remove('menu-open');
            }
        },

        closeMenu: function () {
            this.open = false;
            this.menuContainer.classList.remove('menu-open');
        }
    };

    menuController.init();
    window.addEventListener('push', function () {
        menuController.closeMenu();
        menuController.init();
    });

    return menuController;
})();