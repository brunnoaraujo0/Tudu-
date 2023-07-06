import { Component } from '@angular/core';


const extra: any = {
  '2017/07/15': { info: 'Disable', disable: true }
};

const now: any = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  state: any = {
    en: false,
    date: null,
    show: false,
    pickTime: false,
    now: new Date(),
    type: 'range',
    enterDirection: '',
    rowSize: 'normal',
    showShortcut: false,
    infinite: true,
    defaultValue: undefined,
    minDate: new Date(+now - 5184000000),
    maxDate: new Date(+now + 31536000000),
    onSelect: undefined,
   
  };

  constructor() {}

  initPara() {
    this.state = {
      ...this.state,
      ...{
        show: true,
        date: null,
        pickTime: false,
        now: new Date(),
        type: 'range',
        rowSize: 'normal',
        infinite: true,
        enterDirection: '',
        onSelect: undefined,
        showShortcut: false,
        defaultValue: undefined,
        minDate: new Date(+now - 5184000000),
        maxDate: new Date(+now + 31536000000),
        
      }
    };
  }

  changeLanguage() {
    this.state.en = !this.state.en;
  }

  onClick_0(){
    this.initPara()
  }

  triggerCancel() {
    this.state.show = false;
  }

  triggerConfirm(value: any) {
    const { startDate, endDate } = value;
    this.state = {
      ...this.state,
      ...{ show: false, startDate, endDate }
    };
    this.triggerCancel();
    console.log('onConfirm', startDate, endDate);
  }

  triggerSelectHasDisableDate(dates: any) {
    console.warn('onSelectHasDisableDate', dates);
  }
}
