import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { PostI } from 'src/app/shared/models/post.interface';
import { PostService } from '../../posts/post.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})

export class WizardComponent implements OnInit {
  public post$: Observable<PostI[]>;

  seleccion: string;

  toppings = new FormControl();

  toppingList: string[] = ['Intel', 'AMD'];

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;



  constructor(private _formBuilder: FormBuilder,private postSvc: PostService,private route: ActivatedRoute) {

  }

  getMothers(){
    this.post$=this.postSvc.getMotherboards(this.toppings.value);
  }

  ngOnInit() {
    
  
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
