import { LightningElement, track } from 'lwc';
import My_Resource from '@salesforce/resourceUrl/LWCImage';
import My_Resource2 from '@salesforce/resourceUrl/LWCImageJerry';
export default class IfElseDemo extends LightningElement {
    @track showVisible = false;    
    tomlogo = My_Resource;
    Jerrylogo = My_Resource2;

    showJerry() {
        this.showVisible = false;      
    }

    showTom() {
        this.showVisible = true;       
    }
}