import { observable, computed } from 'mobx';

const testNotes = [
    {
        "id": 1,
        "comment": "Call for more info",
        "providerId": 22,
        "createdByUserId": null,
        "updatedByUserId": null,
        "hidden": 0,
        "createdAt": "2017-08-15T23:09:30.000Z",
        "updatedAt": "2017-08-16T20:09:46.000Z"
    },
    {
        "id": 2,
        "comment": "Call for more info",
        "providerId": 22,
        "createdByUserId": null,
        "updatedByUserId": null,
        "hidden": 0,
        "createdAt": "2017-08-15T23:09:56.000Z",
        "updatedAt": "2017-08-16T20:09:46.000Z"
    },
    {
        "id": 4,
        "comment": "Call for more info",
        "providerId": 22,
        "createdByUserId": 47,
        "updatedByUserId": null,
        "hidden": 0,
        "createdAt": "2017-08-16T20:07:51.000Z",
        "updatedAt": "2017-08-16T20:09:46.000Z"
    }
]

const testPR = [
    {
        cardcode: null,
        complete: true,
        createdAt: "2017-10-24T15:16:04.000Z",
        createdByUser: {id: 44, name: "Jessica Courey", username: "JessicaC", email: "jcourey@ipgpharmaceuticals.com"},
        createdByUserId: 44,
        id: 4,
        note: null,
        provider: null,
        providerId: 75742,
        updatedAt: "2017-10-25T13:29:07.000Z",
    },
    {
        cardcode: null,
        complete: true,
        createdAt: "2017-10-24T15:16:04.000Z",
        createdByUser: {id: 44, name: "Jessica Courey", username: "JessicaC", email: "jcourey@ipgpharmaceuticals.com"},
        createdByUserId: 44,
        id: 4,
        note: null,
        provider: null,
        providerId: 75742,
        updatedAt: "2017-10-25T13:29:07.000Z",
    }
]

const testFiles = [
    {
        "id": 1,
        "providerId": 1,
        "fileName": "File 1.png",
        "fileTitle": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        "fileType": "image/png",
        "createdAt": "2017-08-29T20:40:42.000Z",
        "updatedAt": "2017-08-29T20:40:42.000Z",
        "fileLink": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    },
    {
        "id": 2,
        "providerId": 1,
        "fileName": "File 2.png",
        "fileTitle": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        "fileType": "image/png",
        "createdAt": "2017-08-29T20:41:53.000Z",
        "updatedAt": "2017-08-29T20:41:53.000Z",
        "fileLink": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    },
    {
        "id": 3,
        "providerId": 1,
        "fileName": "File 3.png",
        "fileTitle": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png",
        "fileType": "image/png",
        "createdAt": "2017-08-29T20:42:19.000Z",
        "updatedAt": "2017-08-29T20:42:19.000Z",
        "fileLink": "https://www.qualiscare.com/wp-content/uploads/2017/08/default-user.png"
    },
]


export class CustomerTabs {
    @observable activities = [];
    @observable totalActivitiesLength = null;
    @observable activitiesFetched = false;
    @computed get allActivities() {
        return this.activities;
    }

    // @observable pricingRequests = [];
    @observable pricingRequests = testPR;
    @observable totalPRLength = null;
    // @observable pricingRequestsFetched = false;
    @observable pricingRequestsFetched = true;
    @computed get allPricingRequests() {
        return this.pricingRequests;
    }

    // @observable notes = [];
    @observable notes = testNotes;
    @observable totalNotesLength = null;
    // @observable notesFetched = false;
    @observable notesFetched = true;
    @computed get allNotes() {
        return this.notes;
    }

    // @observable files = [];
    @observable files = testFiles;
    @observable totalFilesLength = null;
    // @observable filesFetched = false;
    @observable filesFetched = true;
    @computed get allFiles() {
        return this.files;
    }

}