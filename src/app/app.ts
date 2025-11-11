import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Master } from './service/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('event');
  loggedData: any;
  masterService = inject(Master)
  constructor() {
    this.readlocalData()
    this.masterService.$loginDone.subscribe((res) => {
      this.readlocalData() 
    })
  }
  readlocalData() {
    const localdata = localStorage.getItem("UserDetail");
    if (localdata != null) {
      this.loggedData = JSON.parse(localdata)

    }
  }
  OnLogOut() {
    localStorage.removeItem('UserDetail');
    this.loggedData = undefined;
  }
isScrolled = false;

ngOnInit() {
  window.addEventListener('scroll', this.handleScroll);
}

ngOnDestroy() {
  window.removeEventListener('scroll', this.handleScroll);
}

handleScroll = () => {
  this.isScrolled = window.scrollY > 50;
}

}
