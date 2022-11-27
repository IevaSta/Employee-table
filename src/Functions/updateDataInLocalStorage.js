function updateDataInLocalStorage(data) {
    localStorage.setItem('data', JSON.stringify(data));
}

export default updateDataInLocalStorage;