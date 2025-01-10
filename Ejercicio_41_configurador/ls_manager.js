function storeData(key, value) {
    localStorage.setItem(key, value);
}

function getData(key) {
    if (!localStorage.getItem(key)) {
        return null;
    }
    return localStorage.getItem(key);
}