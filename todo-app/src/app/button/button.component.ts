import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  
  constructor() { }

  @Input() title : string;
  @Output() btnClick = new EventEmitter();

  ngOnInit(): void {
  }

  onClick()  {
    this.btnClick.emit();
  }

}
