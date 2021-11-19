class ListsData {
    _container = null;

    constructor(className) {
        this._container = className;
    };

    // static getByClassName(className) {
    //     return $(this._containern).addClass(className);
    // };

    getContainer() {
        return this._container;
    };

    deleteElements() {
        this._container.innerHTML = "";
    };
}