import { observable, computed } from 'mobx';

const testLeads = [
    {
        databaseId: 20729,
        providerId: "3300061",
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

export class Leads {
    @observable leads = [];
    // @observable leads = testLeads;
    @observable totalLeadsAmmount = null;
    @observable leadsFetched = false;

    @observable activeLeads = [];
    @observable currentLead = null;
}
