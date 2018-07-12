import { Injectable } from '@angular/core';

interface Memo {
  contents: string,
  createDate: string
}

export class MemoService {
  private memo: Array<Memo>;

  constructor() {
    this.memo = JSON.parse(localStorage.getItem('memo')) || new Array;;
  }

  createMemo(contents: string = ''): void {
    const memo = {
      contents,
      createDate: new Date().toString()
    }
    this.memo.push(memo);
  }

  updateMemo(index: number, contents: string = ''): void {
    this.memo[index].contents = contents;
    localStorage.setItem('memo', JSON.stringify(this.memo));
  }

  getMemo(): Array<object> {
    return this.memo;
  }

}
