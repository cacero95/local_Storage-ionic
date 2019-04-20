import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pagina1', loadChildren: './pagina1/pagina1.module#Pagina1PageModule' },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'pagina3', loadChildren: './pagina3/pagina3.module#Pagina3PageModule' },
  { path: 'slides', loadChildren: './slides/slides.module#SlidesPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
