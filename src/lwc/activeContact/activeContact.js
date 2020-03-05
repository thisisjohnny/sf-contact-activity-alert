import { LightningElement, track, wire, api } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import DAYS_SINCE_LAST_ACTIVITY from '@salesforce/schema/Contact.Days_Since_Last_Activity__c';
const SLDS_THEME = 'slds-notify slds-notify_alert slds-theme_alert-texture slds-theme_';

export default class ActiveContact extends LightningElement {
    @api recordId;
    @api threshold;
    @api message;
    @api iconName;
    @api altText;
    @api theme;
    @track isActive = true;
    @track bannerTheme;

    @wire(getRecord, { recordId: '$recordId', fields: [DAYS_SINCE_LAST_ACTIVITY] })
    wiredRecord({ data, error }) {
        if (data) {
            let daysSince = getFieldValue(data, DAYS_SINCE_LAST_ACTIVITY);
            if(daysSince > this.threshold || daysSince === null){
                this.isActive = false;
            } else {
                this.isActive = true;
            }
        } else if (error) {
            console.log('oops! it broke');
        } else {
            console.log('this really isn\'t working out well');
        }
    }

    connectedCallback() {
        this.bannerTheme =  SLDS_THEME + this.theme;
    }
}
