import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServerData} from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<ServerData>();
  @Output() blueprintCreated = new EventEmitter<ServerData>();

  newServerName = '';
  newServerContent = '';

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit(this.getServerData());
  }


  onAddBlueprint() {
    this.blueprintCreated.emit(this.getServerData());
  }

  private getServerData() {
    return {
      newServerName: this.newServerName,
      newServerContent: this.newServerContent
    };
  }
}
