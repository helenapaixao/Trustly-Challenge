import axios from 'axios';


export const api = axios.create({
baseURL:"https://voliveira.s3-sa-east-1.amazonaws.com"
})

export const getSneakers = async () => {
  const result = await api
    .get('/sneakers/index.json')
    .then(res => res)
    .catch(err => {
      console.log(err.response);
      return err.response;
    });
  return result;
};
