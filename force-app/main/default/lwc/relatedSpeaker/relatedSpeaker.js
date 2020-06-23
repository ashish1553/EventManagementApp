import { LightningElement, track, api, wire } from 'lwc';
import speakerTable from '@salesforce/apex/speakerTableReturn.speakerTable';

const columns = [
    { label: 'Name', fieldName: 'Name', sortable: true},
    { label: 'Email', fieldName: 'Email__c' },
    { label: 'Phone', fieldName: 'Phone__c' },
    { label: 'Company Name', fieldName: 'Company_Name__c' }
];

export default class BasicDatatable extends LightningElement {
    
    @track error;
    @track columns = columns;
    @track data = []; //data to be display in the table
    @api recordId;

    @wire(speakerTable , { recordId: '$recordId' })
    wiredRecordsMethod({ error, data }) {
        if (data) {
            this.data  = data;
            this.error = undefined;
            console.log('hey');
            
        } else if (error) {
            this.error = error;
            this.data  = undefined;
        }
    }

    
}