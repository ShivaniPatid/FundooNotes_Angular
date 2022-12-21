import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/DataServices/data.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  value : any;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router : Router, private dataervice: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  notes(){
    this.router.navigateByUrl('/dashbord/notes');
  }

  trash() {
    this.router.navigateByUrl('/dashbord/trash');
  }

  archive(){
    this.router.navigateByUrl('/dashbord/archive');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login");
    console.log("Logout successfully...");
  }

  searchTitle(event:any){
    console.log("input in search field===",event.target.value);
    this.value=event.target.value
    let Ddata={
      type:'search',
      data:[this.value]
    }
    this.dataervice.changeData(Ddata)
  }
}
