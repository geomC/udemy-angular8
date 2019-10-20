import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', // index route
    component: HomeComponent
  },
  {
    path: 'users', // localhost:4200/users. IMPORTANT: don't prefix route with slash
    component: UsersComponent
  },
  {
    path: 'users/:id', // id stands for a dynamic path segment. Route kicks in for URLs like users/123
    component: UserComponent
  },
  {
    path: 'servers',
    component: ServersComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // register routes
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
