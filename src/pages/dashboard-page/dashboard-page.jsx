import { React, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from 'mobx';
import systemRecordStore from "../../store/system-record";
import './index.css';
import CustomLinechart from "../../components/custom-linechart/custom-linechart";
import ValueSignature from "../../components/value-signature/value-signature";
import ErrorSignature from "../../components/error-signature/error-signature";

const DasboardPage = observer(() => {
    useEffect(() => {
        systemRecordStore.fetchSystemRecords();
    }, [])
    const systemRecords = toJS(systemRecordStore.systemRecords) ?? [];
    const lastRecord = systemRecords?.length > 0 ? systemRecords[systemRecords.length - 1] : {};
    const lastUpdate = systemRecords.length > 0 ?
        systemRecords[systemRecords.length - 1].timestamp :
        'Загрузка'
    const errors = toJS(systemRecordStore.erorrs) ?? [];
    return (
        <div className="dashboard-page mx-auto container d-flex flex-wrap">
            <div className="graphics-container">
                <div className="graphics-period dashboard-block">
                    {
                        "Последнее обновление: " +
                        new Date(lastUpdate).toLocaleDateString('ru') + ' ' +
                        new Date(lastUpdate).toLocaleTimeString('ru')
                    }
                </div>
                <CustomLinechart
                    keyName={'Напряжение сети'}
                    unitName={'Вольт'}
                    valueKey={'gridVoltage'}
                    data={systemRecords}
                ></CustomLinechart>
                <CustomLinechart
                    keyName={'Выходное напряжение'}
                    unitName={'Вольт'}
                    valueKey={'outputVoltage'}
                    data={systemRecords}
                ></CustomLinechart>
                <CustomLinechart
                    keyName={'Напряжение PV'}
                    unitName={'Вольт'}
                    valueKey={'solarVoltage'}
                    data={systemRecords}
                ></CustomLinechart>

                <CustomLinechart
                    keyName={'Ток PV'}
                    unitName={'Ампер'}
                    valueKey={'solarCurrent'}
                    data={systemRecords}
                ></CustomLinechart>
                {/* <CustomLinechart></CustomLinechart> */}
            </div>
            <div className="value-signatures-container dashboard-block">
                <div className="value-signatures-headline">
                    Статус системы
                </div>
                <div>
                    <ValueSignature valueData={lastRecord} valueKey={'gridFreq'} valueName={'Частота сети'} unitName={'Гц'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'outputFreq'} valueName={'Выходная частота'} unitName={'Гц'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'batteryVoltage'} valueName={'Напряжение АКБ'} unitName={'Вольт'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'batteryDischargeCurrent'} valueName={'Ток разряда АКБ'} unitName={'Ампер'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'busVoltage'} valueName={'Напряжение шины'} unitName={'Вольт'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'temperature'} valueName={'Температура'} unitName={'C'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'outputPowerApparent'} valueName={'Кажущаяся выходная мощность'} unitName={'Ватт'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'outputPowerActive'} valueName={'Активная выходная мощность'} unitName={'Ватт'}></ValueSignature>
                    <ValueSignature valueData={lastRecord} valueKey={'batteryCapacity'} valueName={'Емкость батареи '} unitName={'%'}></ValueSignature>
                </div>
            </div>
            <div className="error-container dashboard-block">
                <div className="value-signatures-headline">
                    Ошибки
                </div>
                {
                    errors.map((value) => {
                        return <ErrorSignature errorName={value.name} timestamp={value.timestamp}></ErrorSignature>
                    })
                }
            </div>
        </div>
    )
})
export default DasboardPage;
