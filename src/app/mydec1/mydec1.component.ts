import { Component, OnInit } from '@angular/core';
import { simpleLog } from '../contracts/simpleLog';

@Component({
  selector: 'app-mydec1',
  templateUrl: './mydec1.component.html',
  styleUrls: ['./mydec1.component.scss'],
})
export class Mydec1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

class Counter {
  constructor(private counter = 0) {}

  @simpleLog()
  public currentCount(): number {
    return this.counter;
  }

  @simpleLog()
  public incrementCount(): void {
    this.counter++;
  }
}

const counter = new Counter();
for (let i = 0; i < 10; ++i) {
  console.log(counter.currentCount());
  counter.incrementCount();
}
