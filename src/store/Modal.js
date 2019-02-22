import { observable, computed } from 'mobx';

export class Modal {
   @observable header = ''
   @observable content = null;


   @observable saveButtonTitle = 'Save';
   @observable saveButtonHandler = null;

   @observable withRemoveButton = true;
   @observable removeButtonTitle = 'Remove';
   @observable removeButtonHandler = null;

   @observable editedObjectCopy = null;

   
   
}
