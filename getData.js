class GetData {
    _container = null;

    constructor(className) {
        this._container = GetData.getByClassName(className);
    };

    // static getByClassName(className) {
    //     return document.querySelector(`.${className}`);
    // };

    static getByClassName(className) {
        return $(this._containern).addClass(className)
    };

    getContainer() {
        return this._container
    };

    deleteElements() {
        this._container.innerHTML = "";
    };
}