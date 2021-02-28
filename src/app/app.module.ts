import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChildfooterComponent } from './landing/footer/childfooter.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPipe } from './pipes/add.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './landing/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildfooterComponent,
    routingComponents,
    NavbarComponent,
    AddPipe,
    PostsComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
