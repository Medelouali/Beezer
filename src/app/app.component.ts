import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private screenWidth = new Subject<number>();

  screenWidth$ = this.screenWidth.asObservable();

  isScreenSmall(): boolean {
    return window.innerWidth < 600;
  }
  searchTerm: string;
  
  constructor(private router: Router){
    this.searchTerm="";
    window.addEventListener('resize', () => {
      this.screenWidth.next(window.innerWidth);
    });
  }

  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }

  search() {
    this.router.navigate(["/Search"], { queryParams: { q: this.searchTerm }, queryParamsHandling: 'merge' });
  }

  onEnter() {
    this.search();
  }
  
  
  
  
  
  
}
