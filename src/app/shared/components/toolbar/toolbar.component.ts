import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public appName = 'Meta PC';
  constructor(public authSvc: AuthService,private router:Router) {}

  ngOnInit() {}

  async onLogout(){

    try{
      await this.authSvc.logout();
      this.router.navigate(['/home']);
    }
    catch(error){console.log(error)}
  }
}
