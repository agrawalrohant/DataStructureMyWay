import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-logs',
  templateUrl: './simple-logs.component.html',
  styleUrls: ['./simple-logs.component.scss']
})
export class SimpleLogsComponent implements OnInit {

  @Input() logMessages: string[];

  constructor() { }

  ngOnInit() {
  }

}
