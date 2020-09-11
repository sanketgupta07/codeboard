import { HelloWorldService } from './service/hello-world.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'go-angular-app-sanket';
  constructor(private hw: HelloWorldService){}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(){
    // alert('Init funtion');
    this.hw.helloWorld().subscribe((resp: any) => {
      this.title = resp.title;
      console.log(this.title);
    });
  }
}
