import axios from 'axios';

export const getServerData = async (data) => {
    const res = await axios({
        method: 'post',
        url: 'http://localhost:5000/API/contact',
        data,
        headers: { 'Content-Type': 'multipart/form-data' },
    })
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log('err', err);
            return 'error';
        });

    return res;
};
