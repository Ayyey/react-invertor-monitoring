import axios from "./axios";
export async function importData(start, end) { //receive data for client
    const { data } = axios.get(`/export?start=${start}&end=${end}`, {
        responseType: 'blob',
    }).then((response) => {
        const href = window.URL.createObjectURL(response.data);
        const anchorElement = document.createElement('a');

        anchorElement.href = href;
        anchorElement.download = (start.toLocaleDateString('ru') + '-' + end.toLocaleDateString('ru')).replaceAll('.', '-') + '.xlsx';
        document.body.appendChild(anchorElement);
        anchorElement.click();
        document.body.removeChild(anchorElement);
        window.URL.revokeObjectURL(href);
    })
}
export async function exportData(data) { //send data to server
    const response = await axios.post('/export', data, { headers: { 'Content-Type': 'multipart/form-data' } });
    return response
}