import { LightningElement, track } from 'lwc';

import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

import CONTACT_NAME from '@salesforce/schema/Contact.Name';
import ACCOUNT_ID from '@salesforce/schema/Contact.AccountId';

import OPP_NAME from '@salesforce/schema/Opportunity.Name';
import OPP_STAGE from '@salesforce/schema/Opportunity.StageName';
import OPP_CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

//export default class QuickCreate extends LightningElement {
export default class QuickCreate extends NavigationMixin(LightningElement) {
    accFields = [ACCOUNT_NAME];
    contFields = [CONTACT_NAME, ACCOUNT_ID];
    oppFields = [OPP_NAME, OPP_STAGE, OPP_CLOSE_DATE];

    @track showFullAccounts = false;
    @track showFullConts = false;
    @track showFullOpps = false;

     

    navigateToNewAccountPage() {
        const defaultValues = encodeDefaultFieldValues({
            Rating: 'Hot',
            Type: 'Prospect',
            Industry: 'Banking'	
        });
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }
    navigateToNewContactPage() {
        const defaultValues = encodeDefaultFieldValues({
            LeadSource: 'Web',
            Level__c: 'Primary',
            LastName: 'LWCBootCamp'	
        });
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }

    navigateToNewOpportunityPage() {
        const defaultValues = encodeDefaultFieldValues({
            LeadSource: 'Web',
            Type: 'New Customer',
            StageName: 'Prospecting'	
        });
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        });
    }

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
