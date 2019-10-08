import {Component, OnInit} from '@angular/core';

export interface ServerData {
  newServerName: string;
  newServerContent: string;
}
enum ServerType {
  SERVER = 'server',
  BLUEPRINT = 'blueprint'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{
    type: 'server',
    name: 'Testserver',
    content: 'just a test'
  }];

  ngOnInit() {
    window.setTimeout(() => this.serverElements[0].name = 'changed name', 2000); // trigger onChange again
  }

  onAddServerAdded( serverData: ServerData) {
    this.addServer(ServerType.SERVER, serverData);
  }

  onAddBlueprintAdded( serverData: ServerData ) {
    this.addServer(ServerType.BLUEPRINT, serverData);
  }

  addServer(type: ServerType, { newServerName, newServerContent }: ServerData) {
    this.serverElements.push({
      type,
      name: newServerName,
      content: newServerContent
    });
  }

  onDestroyFirstComponent() {
    this.serverElements.pop();
  }
}
