import { LightningElement, track } from 'lwc';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';

import OPP_NAME from '@salesforce/schema/Opportunity.Name';
import OPP_STAGE from '@salesforce/schema/Opportunity.StageName';
import OPP_CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';

export default class QuickCreate extends LightningElement {
    accFields = [ACCOUNT_NAME];
    contFields = [CONTACT_NAME, ACCOUNT_ID];
    oppFields = [OPP_NAME, OPP_STAGE, OPP_CLOSE_DATE];

    @track showFullAccounts = false;
    @track showFullConts = false;
    @track showFullOpps = false;

    showAllFields(event) {
        let objName = event.currentTarget.dataset.key;
        alert(objName);

        if( objName == 'Account' )
            this.showFullAccounts == false ? this.showFullAccounts = true : this.showFullAccounts = false;
        else if( objName == 'Contact' )
            this.showFullConts == false ? this.showFullConts = true : this.showFullConts = false;
        else
            this.showFullOpps == false ? this.showFullOpps = true : this.showFullOpps = false;
    }
}
