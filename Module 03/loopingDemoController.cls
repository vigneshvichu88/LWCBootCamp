public with sharing class loopingDemoController {

    @AuraEnabled(cacheable = true)
    public static list<Contact> getAllContacts() {
        return [ SELECT Id, FirstName, LastName, Email FROM Contact WHERE Email != Null LIMIT 4 ];
    }
}
