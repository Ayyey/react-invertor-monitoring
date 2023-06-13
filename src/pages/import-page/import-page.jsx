import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { exportData, importData } from '../../services/import-export';
import './import-page.css'
export default function ImportPage() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [file, setFile] = useState();
    const [error, setError] = useState(false);
    const onDownload = () => {
        if (!isNaN(startDate) && !isNaN(endDate)) {
            if (startDate.getTime() < endDate.getTime()) {
                importData(startDate, endDate);
                return;
            }
        }
        setError(true);
    }
    const onExport = () => {
        console.log(file.size)
        if (file.size)
            exportData(file);
    }
    return (
        <div className='container'>
            <div className="dashboard-block date-header">
                Экспорт
                <div className="date-picker">
                    <div className="date">
                        Начало:
                        <input className='' type="date" name="" id="" onChange={(e) => {
                            setStartDate(new Date(e.target.value));
                        }} />
                    </div>
                    <div className="date">
                        Конец:
                        <input className='' type="date" name="" id="" onChange={(e) => {
                            setEndDate(new Date(e.target.value));
                        }} />
                    </div>
                    <div className="btn shadow-button" onClick={onDownload}>
                        сохранить
                    </div>
                    {error ? <div className='error'>Ошибка, проверьте введенную дату</div> : ''}
                </div>
            </div>

            <div className="dashboard-block date-header">
                Импорт
                <div className="file-input">
                    <input type="file" name="" id="" onChange={(e) => {
                        setFile(e.target.files[0]);
                    }} />
                    <div className="btn shadow-button" onClick={onExport}>
                        Загрузить
                    </div>
                </div>

            </div>
        </div>
    )
}
