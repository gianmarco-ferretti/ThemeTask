const colors = {
    primary: '#fff',
    secondary: '#000000',
    red: '#ff0000',
    blue: '#0000ff',
    green: '#199419',
}


const theme = (themeSetted) => {
    switch (themeSetted) {
        case 'dark':
            return {
                colors: {
                    primary: '#000',
                    secondary: '#fff'
                }
            }
            break;
        case 'light':
            return {
                colors: {
                    primary: '#fff',
                    secondary: '#000'
                }
            }
            break;
        case 'red':
            return {
                colors: {
                    primary: '#ff0000',
                }
            }
        case 'green':
            return {
                colors: {
                    primary: '#00ff00',
                }
            }
        case 'blue':
            return {
                colors: {
                    primary: '#0000ff',
                }
            }
        default:
            return {
                colors: {
                    primary: '#fff',
                }
            }
    }

}

export default theme
