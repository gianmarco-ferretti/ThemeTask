import axios from "axios";

export const httpThemeOptions = () => {
    const url = 'https://run.mocky.io/v3/cffb6fdb-1d59-4a18-af95-7bcc44db28e6'
    return axios.get(url)
}
