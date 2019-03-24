import { OnInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUserService } from '../data-services/appUser.services';
import { AppUserInterface } from '../data-entity/appUser.interface';


@Component({
    selector: 'app-endpoint',
    templateUrl: './endpoint.component.html',
    styleUrls: ['./endpoint.component.css']
  })
export class EndpointComponent implements OnInit {


  private appUser: AppUserInterface[];
  private appUserObservable: Observable<any[]>;
  

  constructor(private appUserService: AppUserService) {

    
  }

  ngOnInit() {}

  onSubmit() {
    console.log('end point Working');
    this.appUserService.getAppUserObjList().subscribe(
      // (res: AppUserInterface[]) => {
      //   this.appUser = res;
      // }
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}