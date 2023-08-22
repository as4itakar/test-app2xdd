import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingMoodule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingMoodule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
