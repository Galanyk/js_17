class ListsUsers {
    static API = "https://jsonplaceholder.typicode.com";
    static CLASSES = {
        BUTTON: 'button',
        USER_NAME: 'username',
        USER_POSTS: 'user-posts',
        USER_TITLE: 'user-title',
        CONTAINER_USER: 'container-user',
    };

    static ENVIRONMENT = {
        USERS: {
            getUser: "/users",
        },
        POSTS: {
            getUserPost: "/posts?userId=",
        },
    };
    _mainContainer = null;

    constructor(className) {
        this._mainContainer = className;
        //console.log('cons', className);
        this.init();
    };

    init() {
        this.downloadUsers();
        this.setListener(this._mainContainer, 'click', this.onButtonClick);
    };

    // static getByClassName(className) {
    //     return $(this._mainContainer).addClass(className)
    // };

    getData(data, key) {
        console.log(data, key)
        return data.data[key];

    };

    setListener(element, event, callBack) {
        $(element).on(event, callBack);
    };

    createElements(listUsers) {
        listUsers.forEach(user => {
            this.createElement(user.name, this._mainContainer, 'div', ListsUsers.CLASSES.USER_NAME)
            this.createElementButton(this._mainContainer, 'button', ListsUsers.CLASSES.BUTTON, user.id);
        });
    };

    onButtonClick = (userId) => {
        // console.log('listData: ', listsData)
        if (userId.target.className !== ListsUsers.CLASSES.BUTTON) {
            return;
        };
        fetch(ListsUsers.API + ListsUsers.ENVIRONMENT.POSTS.getUserPost + `${userId.target.id}`)
            .then((response) => response.json())
            .then((data) => {
                if (listsData.getContainer().children.length !== 0) {
                    listsData.deleteElements();
                }
                return data;
            })
            .then((data) => data.forEach(element => {;
                this.createElement(`${element.title}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_TITLE);
                this.createElement(`${element.body}`, getData.getContainer(), 'div', ListsUsers.CLASSES.USER_POSTS);
            }));
    };
    get onButtonClick() {
        return this._onButtonClick;
    }
    set onButtonClick(value) {
        this._onButtonClick = value;
    }

    downloadUsers = () => {
        fetch(ListsUsers.API + ListsUsers.ENVIRONMENT.USERS.getUser)
            .then((response) => response.json())
            .then((listsUsers) => this.createElements(listsUsers))
    };

    createElement(data, containerEl, tag, classList) {
        const element = $('<' + `${ tag }` + ' class=' + `${ classList }` + '>' + `${ data }` + '</' + `${ tag }` + '>');
        $(element).appendTo(containerEl);
    };

    createElementButton(containerEl, tag, classList, Id) {
        const element = $('<' + `${ tag }` + ' class=' + `${ classList }` + ' id=' + `${ Id }` + '>' + `Show Posts` + '</' + `${ tag }` + '>');
        $(element).appendTo(containerEl);
    };
}


//const element = $('<div class="alert-message">Новый текст сообщения.</div>')
//const element = $("el").add(tag).addClass(classList);

// const element = $(`${ <tag class = "${classList}">$ { data }</tag> }`)
//     // class = "${classList}" > < /${">"}
//     // $ { data } < /${tag}&gt;;
// containerEl.append(element)
// console.log(containerEl)
// const element = `< $ { tag }
//         class = "${classList}" >
//             $ { data } < /${tag}>`;




// const element = `${<{ tag }
//     class = "${classList}" >
//     $ { data } < /${tag}>}`;