import { Component, OnInit } from '@angular/core';
import { MemoService } from '../memo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public memoSupporter: MemoService) { }

  ngOnInit() {
  }
  
  createMemo(): void {
    this.memoSupporter.createMemo();
  }
}
