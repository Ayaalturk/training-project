import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { PostsComponent } from '../landing/posts/posts.component';

@NgModule({
  declarations: [
    PostsComponent
  ],
  
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
