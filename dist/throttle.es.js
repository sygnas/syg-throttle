function index (timing, func, scope) {
    var id = null;

    return function () {
        if (id !== null) return;
        func.apply(scope);

        id = setTimeout(function () {
            id = null;
        }, timing);
    };
}

export default index;
