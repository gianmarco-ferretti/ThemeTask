const getTheme = () => {
    return localStorage.getItem('theme');
}

const setTheme = (theme) => {
    return localStorage.setItem('theme', theme);
}

const getUser = () => {
    return localStorage.getItem('user');
}

const setUser = (user) => {
    return localStorage.setItem('user', user);
}

const removeUser = () => {
    return localStorage.removeItem('user');
}

export const LocalStorageManager = {
    getTheme,
    setTheme,
    getUser,
    setUser,
    removeUser,
}

