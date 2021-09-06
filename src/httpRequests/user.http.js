import axios from "axios";

export const httpLoginUser = (data) => {
    const url = 'https://run.mocky.io/v3/a80ad091-88b6-45e3-b4bb-cdf229730272'
    return axios.post(url, {first_name: data.name, last_name: data.lastName})
}
