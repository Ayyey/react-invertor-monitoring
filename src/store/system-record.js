import { makeAutoObservable } from 'mobx';
import { getRecords } from '../services/system-record'
class SystemRecordStore {
    systemRecords = [];
    erorrs = [];
    constructor() {
        makeAutoObservable(this);
    }
    async fetchSettings() {

    }
    async fetchSystemRecords() {
        const origin = new Date('2023-03-02T16:00:00Z');
        const recordStart = new Date('2023-06-10T17:30:00Z')
        const now = new Date();
        const timePassed = now - recordStart;
        const end = new Date(origin.getTime() + timePassed + new Date(1000 * 60 * 30).getTime());
        const start = new Date(end.getTime() - new Date(1000 * 60 * 30).getTime());

        const records = await getRecords(start, end);
        const sortedRecords = records.sort((a, b) => {
            return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        })
        const errorNames = [];
        sortedRecords.forEach((value, index) => {
            for (const key in value) {
                if (typeof value[key] == 'boolean' && value[key]) {
                    errorNames.push({ name: key, timestamp: value.timestamp });
                }
                if (errorNames.length > 10)
                    break;
            }
        })
        this.erorrs = errorNames;
        const ref = this;
        const timer = setTimeout(() => {
            ref.fetchLastRecord();
        }, 60 * 1000)
        this.systemRecords = sortedRecords;
        return this.systemRecords;
    }
    async fetchLastRecord() {
        const origin = new Date('2023-03-02T16:00:00Z');
        const recordStart = new Date('2023-06-10T17:30:00Z')
        const now = new Date();
        const timePassed = now - recordStart;
        const end = new Date(origin.getTime() + timePassed + new Date(1000 * 60 * 30).getTime());
        const start = new Date(end.getTime() - new Date(1000 * 60).getTime());

        const records = await getRecords(start, end);
        const ref = this;
        const timer = setTimeout(() => {
            ref.fetchLastRecord();
        }, 60 * 1000)
        if (records.length == 0)
            return
        else if (records.length == 1) {
            this.systemRecords.push(records[0]);
        }
        else {
            this.systemRecords.push(records[records.length - 1]);
        }
        this.systemRecords.shift();
    }

}
export default new SystemRecordStore();