import { Component } from '@angular/core';
import { MemoService } from './memo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public memo;
  constructor(public memoSupporter: MemoService) { 
    this.memo = this.memoSupporter.getMemo();
  }
}
