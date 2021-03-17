import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddPipe } from './pipes/add.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ChildfooterComponent } from './landing/footer/childfooter.component';
import { FooterComponent } from './landing/footer/footer.component';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
   ChildfooterComponent,
   FooterComponent,
    routingComponents,
    NavbarComponent,
    AddPipe,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
