class ListsUsers {
    static API = "https://jsonplaceholder.typicode.com";
    static CLASSES = {
        BUTTON: $('button'),
        USER_NAME: $('username'),
        USER_POSTS: $('user-posts'),
        USER_TITLE: $('user-title'),
        CONTAINER_USER: $("container-user"),
    };

    static ENVIRONMENT = {
        USERS: {
            getUser: "/users",
        },
        POSTS: {
            getUserPost: "/posts?userId=",
        },
    };
    $_mainContainer = null;

    constructor(className) {
        this.$_mainContainer = ListsUsers.getByClassName(className);
        this.init();
        // console.log(this.$_mainContainer)
    };

    init() {
        this.downloadUsers();
        this.setListener(this.$_mainContainer, 'click', this.onButtonClick);
    };

    static getByClassName(className) {
        return $(this.$_mainContainer).addClass(className)
    };

    getData(data, key) {
        return data.data[key];
    };

    setListener(element, event, callBack) {
        $(element).on(event, callBack);
    };

    createElements(listUsers) {
        listUsers.forEach(user => {
            this.createElement(user.name, this.$_mainContainer, 'div', ListsUsers.CLASSES.USER_NAME)
                // this.createElementButton(this.$_mainContainer, 'button', ListsUsers.CLASSES.BUTTON, user.id);
        });
    };

    onButtonClick = (userId) => {
        if (userId.target.className !== ListsUsers.CLASSES.BUTTON) {
            return;
        };
        fetch(ListsUsers.API + ListsUsers.ENVIRONMENT.POSTS.getUserPost + `${userId.target.id}`)
            .then((response) => response.json())
            .then((data) => {
                if (getData.getContainer().children.length !== 0) {
                    getData.deleteElements();
                }
                return data;
            })
            .then((data) => data.forEach(element => {;
                this.createElement(`${element.title}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_TITLE);
                this.createElement(`${element.body}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_POSTS);
            }));
    };
    get $onButtonClick() {
        return this._$onButtonClick;
    }
    set $onButtonClick(value) {
        this._$onButtonClick = value;
    }

    downloadUsers = () => {
        fetch(ListsUsers.API + ListsUsers.ENVIRONMENT.USERS.getUser)
            .then((response) => response.json())
            .then((listsUsers) => this.createElements(listsUsers))
    };

    createElement(data, containerEl, tag, classList) {
        const element = $("el").add(tag).addClass(classList);

        // $(tag).append(element)
        // element.appendTo(containerEl);
        // console.log(containerEl.children.length)
    };

    createElementButton(containerEl, tag, $classList, Id) {

        // const $element = add(tag);
        // $element.text('Show Posts');
        // $element.addClass($classList);;
        // $element.id = Id;
        // containerEl.append($element);
    };
}