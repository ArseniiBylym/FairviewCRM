import { action } from 'mobx';
import { ModalStore, LeadsStore } from '../store/AllStores';

export class ModalActionsClass { 

    @action configModalData({header, withRemoveButton, content}) {
        ModalStore.header = header;
        ModalStore.withRemoveButton = withRemoveButton;
        ModalStore.content = content;
    }

    @action editCurrentLead(name, value) {
        LeadsStore.currentLead[name] = value;
    }
}

