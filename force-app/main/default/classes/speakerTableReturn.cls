public with sharing class speakerTableReturn {
    @AuraEnabled(cacheable=true)
    public static List<Speaker__c> speakerTable(ID recordId) {

        List<Session_Speaker__c> speakerInSession = new List<Session_Speaker__c>();
        Set<Id> SpeakerId = new Set<Id>();

        speakerInSession = [SELECT Speaker__r.Id FROM Session_Speaker__c WHERE Session__r.Id =:recordId];

        
        for(Integer i=0; i<speakerInSession.size(); i++)
        {
            SpeakerId.add(speakerInSession[i].Speaker__c);
        }
		System.debug(SpeakerId);
        
        List<Speaker__c> relSpeak = new List<Speaker__c>();
        relSpeak = [SELECT Name,
                            Email__c,
                            Phone__c,
                            Company_Name__c,
                            Id
                    FROM Speaker__c WHERE Id IN:SpeakerId];
        System.debug(relSpeak);
        return relSpeak;
    }
}