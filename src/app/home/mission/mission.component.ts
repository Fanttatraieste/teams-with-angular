import { Component } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent {
  private state = 1;

  constructor() {

  }

  changeState() {
    if (this.state == 1)
      this.state = 2;
    else
      this.state = 1;
  }

  getState() {
    return this.state;
  }

}
