import { Component } from '@angular/core';

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
export class AppComponent {
  serverElements = [{
    type: 'server',
    name: 'Testserver',
    content: 'just a test'
  }];

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

}
