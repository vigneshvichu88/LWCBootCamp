import { LightningElement, track, wire } from 'lwc';
import allContacts from '@salesforce/apex/loopingDemoController.getAllContacts';

export default class LoopingDemo extends LightningElement {
    @wire(allContacts) contList;

    get responseReceived() {
        if( this.contList ) {
            return true;
        } return false;
    }
}