import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ExtractComponent } from './components/extract/extract.component';
import { MergeComponent } from './components/merge/merge.component';
import { ConvertmediaComponent } from './components/convertmedia/convertmedia.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "extractpdf", component: ExtractComponent },
  { path: "mergepdf", component: MergeComponent },
  { path: "convertmedia", component: ConvertmediaComponent },

  // for not found pages
  { path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
