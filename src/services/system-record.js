import axios from './axios'
export async function getRecords(start, end) {
    const { data } = await axios.get(`/data?start=${start}&end=${end}`);
    return data;
}