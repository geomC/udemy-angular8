import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {
    path: 'recipes',
    // path to the module to laod when the route is active. Then ad # plus the name of the exported class in that module.
    loadChildren: './recipes/recipes.module#RecipesModule'
  },
  {
    path: 'shopping-list',
    loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {
    // configure the root router
    preloadingStrategy: PreloadAllModules // pre-load the bundles a.s.a.p
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
