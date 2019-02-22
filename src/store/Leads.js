import { observable, computed } from 'mobx';

const testLeads = [
    {
        databaseId: 81424,
        providerId: "81424",
        legalBusName: "B R G CHEMISTS INC",
        dba: "LAFAYETTE PHARMACY",
        plCity: "WILLISTON PARK",
        plState: "NY",
        plZipcode: 115962195,
        plPhone: "516-746-0646"
    },
    {
        databaseId: 20741,
        providerId: "3300338",
        legalBusName: "INDEPENDENT OTC CORPORATION",
        dba: "FRIENDLY DRUGS",
        plCity: "HOLBROOK",
        plState: "NY",
        plZipcode: 11741,
        plPhone: "631-585-8585"
    },
    {
        databaseId: 20765,
        providerId: "3300857",
        legalBusName: "PARKWAY DRUGS OF ONEIDA COUNTY INC",
        dba: "PARKWAY DRUGS",
        plCity: "UTICA",
        plState: "NY",
        plZipcode: 135014252,
        plPhone: "315-735-3525"
    }
]

const testCurrentLead = {
        "databaseId": 81424,
        "providerId": "",
        "legalBusName": "MedMax",
        "dba": "Some dba value",
        "relationType": null,
        "plAddress1": null,
        "plAddress2": null,
        "plCity": null,
        "plState": null,
        "plZipcode": null,
        "plPhone": "844-777-4700",
        "plExt": 1212,
        "plFax": null,
        "plEmail": null,
        "contactLName": null,
        "contactFName": null,
        "contactMInitial": null,
        "contactTitle": null,
        "contactPhone": null,
        "contactExt": null,
        "contactEmail": null,
        "typeOfBusiness": null,
        "typeOfBusinessData": null,
        "typeOfBusinessOthers": null,
        "drugLicenseType": null,
        "typeOfDrugLicenseData": null,
        "drugLicenseTypeOthers": null,
        "slpcode": 1,
        "salesReps": [
            {
                "id": 44,
                "username": "JessicaC",
                "name": "Jessica Courey",
                "email": "jcourey@ipgpharmaceuticals.com",
                "slpcode": 1,
                "status": 1
            }
        ],
        "license": null,
        "licenseExpDate": null,
        "customerCreated": null,
        "cardcode": null,
        "groupId": null,
        "providerGroup": null,
        "active": true,
        "createdManually": true
}

export class Leads {
    // @observable leads = [];
    @observable leads = testLeads;
    @observable totalLeadsAmount = null;
    @observable leadsFetched = false;

    @observable activeLeads = [];
    // @observable currentLead = null;
    @observable currentLead = testCurrentLead;
}
