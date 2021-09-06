export const getTheme = () => {
    return localStorage.getItem('theme');
}

export const setTheme = (theme) => {
    return localStorage.setItem('theme', theme);
}

export const getUser = () => {
    return localStorage.getItem('user');
}

export const setUser = (user) => {
    return localStorage.setItem('user', user);
}

export const removeUser = (user) => {
    return localStorage.removeItem('user');
}