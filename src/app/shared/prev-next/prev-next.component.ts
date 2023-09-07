import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prev-next',
  templateUrl: './prev-next.component.html',
  styleUrls: ['./prev-next.component.scss']
})
export class PrevNextComponent implements OnInit {

  constructor() { }

  @Input() title:string;
  @Output() iSend = new EventEmitter<string>();

  getPrev() {
      this.iSend.emit('prev');
  } 
  getNext() {
      this.iSend.emit('next');
  }
  ngOnInit(): void {
  }

}
