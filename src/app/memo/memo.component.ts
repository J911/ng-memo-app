import { Component, OnInit, Input } from '@angular/core';
import { MemoService } from '../memo.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],
})
export class MemoComponent implements OnInit {
  @Input() memo: object;
  @Input() index: number;

  constructor(public memoSupporter: MemoService) { }

  ngOnInit() {
  }

  updateMemo(contents: string): void {
    this.memoSupporter.updateMemo(this.index, contents);
  }
}
