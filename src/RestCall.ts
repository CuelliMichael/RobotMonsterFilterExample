import axios from 'axios';

export const DEFAULT_URL = 'https://jsonplaceholder.typicode.com/users';


export const axiosGet = (
    url: string,
    onResult:(data:any, headers: any) => void,
    onError:(error: any) => void
) => {
    
    axios.get(url)
    .then(
        result => result ? onResult(result.data,result.headers) : undefined
    )
    .catch(
        error => onError(error)
    );
}