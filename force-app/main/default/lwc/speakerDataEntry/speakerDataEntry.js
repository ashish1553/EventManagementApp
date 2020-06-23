import { LightningElement, api } from 'lwc';



export default class SpeakerDataEntry extends LightningElement {

    @api Sess = []; //data to be display in the table
    @api selectedSess;
    
    
    handleChangeEvent(event){
        Array.from(this.template.querySelectorAll('lightning-input'))
        .forEach(element => {
            element.checked=false;
        });
        const checkbox = this.template.querySelector('lightning-input[data-value="'+event.target.dataset.value+'"]');
        checkbox.checked=true;
    }
    
       

}