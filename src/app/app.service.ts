import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private router:Router
  ) { }

  openPage(link: String):void {
    this.router.navigate([link]);
  }
  goHome(): void {
    this.router.navigate(["/"]);
  }
  getFileType(f:File): string {
    return f.type;
  }

}
