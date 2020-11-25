import { LightningElement, api } from 'lwc';

import NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import Account_FIELD from '@salesforce/schema/Contact.AccountId';
import LAST_NAME from '@salesforce/schema/Contact.LastName';

import ACC_NAME from '@salesforce/schema/Account.Name';

export default class QuickCreate extends LightningElement {
    
    fields = [NAME_FIELD, Account_FIELD, LAST_NAME];
    accFields = [ACC_NAME];
    handleReset(event) {       
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {                
                field.reset();
            });
        }
        
    }
    handleSubmit(event){
        //you can change values from here
        //const fields = event.detail.fields;
        //fields.Name = 'My Custom  Name'; // modify a field
        console.log('Contact detail : ',event.detail.fields);
        console.log('Contact name : ',event.detail.fields.Name);
    }
}
