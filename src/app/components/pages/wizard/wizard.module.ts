
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { MaterialModule } from 'src/app/material.module';
import { HomeRoutingModule } from '../home/home-routing.module';
import { PostComponent } from '../../posts/post/post.component';



@NgModule({
  declarations: [WizardComponent,],
  imports: [
    CommonModule,
    WizardRoutingModule,
    MaterialModule,
    HomeRoutingModule,
  ]
})
export class WizardModule { }
