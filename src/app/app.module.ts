import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PostComponent } from './post.component';
import { HttpClientModule} from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { 
  Routes, 
  RouterModule, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot } from '@angular/router';

const routes:Routes = [ 
  { path: '', 
    component: PostComponent } ];
    
@NgModule({
  imports: [ 
    HttpClientModule, 
    MarkdownModule.forRoot(),
    RouterModule.forRoot(routes), 
    BrowserModule, 
    FormsModule ],
  declarations: [ AppComponent, PostComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
