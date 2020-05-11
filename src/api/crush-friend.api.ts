import axios from 'axios';

export const postMessage = (data?: any) => {
    return axios.post('https://crush-friend.herokuapp.com/send', data)
}