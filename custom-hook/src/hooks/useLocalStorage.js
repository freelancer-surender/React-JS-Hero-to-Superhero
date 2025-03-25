function useLocalStorage(key) {

    const saveData = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const getData = () => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    return { saveData, getData };

}

export default useLocalStorage;