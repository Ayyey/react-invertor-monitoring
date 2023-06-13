import React from 'react'
import './error-signature.css'
export default function ErrorSignature({ errorName, timestamp }) {
    const error = mapNameToError(errorName);
    const statusColor = error.status == 'fault' ? 'red' : 'gold'
    return (
        <div className='error-signature'>
            <div className="error-status" style={{ backgroundColor: statusColor }}></div>
            <div className="error-name">
                {error.text}
            </div>
            <div className="error-time">
                {new Date(timestamp).toLocaleTimeString('ru').substring(0, 5)}
            </div>
        </div>
    )
}
function mapNameToError(errorName) {
    switch (errorName) {
        case 'inverterFault': return { text: 'Неисправность инвертора', status: 'fault' }
        case 'busOver': return { text: 'Перенапряжение шины', status: 'fault' }
        case 'busUnder': return { text: 'Малое напряжение шины', status: 'fault' }
        case 'busSoftFail': return { text: 'Ошибка шины', status: 'fault' }
        case 'lineFail': return { text: 'Ошибка линии', status: 'warning' }
        case 'OPVShort': return { text: 'КЗ OPVS', status: 'warning' }
        case 'inverterVoltageTooLow': return { text: 'Низкое напряжение инвертора', status: 'fault' }
        case 'inverterVoltageTooHigh': return { text: 'Высокое напряжение инвертора', status: 'fault' }
        case 'overTemperature': return { text: 'Перегрев', status: 'fault' }
        case 'fanLocked': return { text: 'Вентилятор охлаждения заблокирован', status: 'fault' }
        case 'batteryVoltageTooHigh': return { text: 'Высокое напряжение батареи', status: 'fault' }
        case 'batteryLowAlarm': return { text: 'Низкое напряжение батареи', status: 'warning' }
        case 'batteryUnderShutdown': return { text: 'Батарея отключена', status: 'warning' }
        case 'overload': return { text: 'Перегрузка', status: 'warning' }
        case 'EEPROMFault': return { text: 'Ошибка памяти EEPROM', status: 'warning' }
        case 'inverterOverCurrent': return { text: 'Высокое значение тока в инверторе', status: 'fault' }
        case 'inverterSoftFail': return { text: 'Программная ошибка инвертора', status: 'fault' }
        case 'selfTestFail': return { text: 'Ошибка самопроверки инвертора', status: 'fault' }
        case 'OPDCVoltageOver': return { text: 'Неизвестная ошибка', status: 'fault' }
        case 'batteryOpen': return { text: 'Неизвестная ошибка', status: 'fault' }
        case 'currentSensorFail': return { text: 'Ошибка сенсора тока', status: 'fault' }
        case 'batteryShort': return { text: 'КЗ Батареи', status: 'fault' }
        case 'powerLimit': return { text: 'Предел мощности', status: 'warning' }
        case 'PVVoltageHigh': return { text: 'Высокое напряжение солнечных батареи', status: 'warning' }
        case 'MPPTOverloadFault': return { text: 'Перегрузка MPPT', status: 'warning' }
        case 'MPPTOverload': return { text: 'Перегрузка MPPT', status: 'warning' }
        case 'BatteryTooLowToCharge': return { text: 'Низкое напряжение батареи', status: 'warning' }
        default: return { text: 'Неизвестная ошибка', status: 'warning' }
    }
}