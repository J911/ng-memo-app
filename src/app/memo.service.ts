import { Injectable } from '@angular/core';

interface Memo {
  contents: string,
  createDate: string
}

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  private memo: Array<Memo> = new Array;

  constructor() {
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
  }

  getMemo(): Array<object> {
    return this.memo;
  }

}
