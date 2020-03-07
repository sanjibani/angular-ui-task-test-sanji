import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "buttonList",
  template: `
    <div class="container">
      <div class="row">
        <div class="col">
          <button (click)="click1()">1</button>
        </div>
        <div class="col">
          <button (click)="click2()">2</button>
        </div>
      </div>
      <div class="row">
      <span class="dot"><span class="position-number">{{positionNumber}}</span></span>
       </div>
      <div class="row">
        <div class="col">
          <button (click)="click3()">3</button>
        </div>
        <div class="col">
          <button (click)="click4()">4</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
      .dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-left: 32%
}
    .position-number{
      margin-left:30%;
    }
    `
  ]
})
export class ButtonListComponent {
  @Input() positionNumber: any;
  @Input() buttonStatus: any;
  @Output() shoeValues = new EventEmitter<any>();

  click1() {
    this.buttonStatus.show1 = !this.buttonStatus.show1;
    this.shoeValues.emit(this.buttonStatus);
  }
  click2() {
    this.buttonStatus.show2 = !this.buttonStatus.show2;
    this.shoeValues.emit(this.buttonStatus);
  }
  click3() {
    this.buttonStatus.show3 = !this.buttonStatus.show3;
    this.shoeValues.emit(this.buttonStatus);
  }
  click4() {
    this.buttonStatus.show4 = !this.buttonStatus.show4;
    this.shoeValues.emit(this.buttonStatus);
  }
}
