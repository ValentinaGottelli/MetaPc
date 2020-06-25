import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardRoutingModule } from './wizard-routing.module';
import { WizardComponent } from './wizard.component';
import { MatStep, MatStepper } from '@angular/material/stepper';


@NgModule({
  declarations: [WizardComponent],
  imports: [
    CommonModule,
    WizardRoutingModule,
    MatStep,
    MatStepper,
  ]
})
export class WizardModule { }
