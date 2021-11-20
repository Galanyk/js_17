class ListData {
    _container = null;

    constructor(className) {
        this._container = className;
        console.log('listData: ', this._container);
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