import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rx-js-test',
  templateUrl: './rx-js-test.component.html',
  styleUrls: ['./rx-js-test.component.css']
})
export class RxJsTestComponent implements OnInit {

  stream1$;
  stream2$;

  constructor() { }

  Stream1() : Observable<any>
  {
    return of([1,2,3,4,5,6,7], "magic", []);
  }

  Stream2() : Observable<Number[]>
  {
    return of([1,2,3,4,5,6,7]);
  }

  ngOnInit(): void {
     this.Stream1().subscribe(x => {
       console.log(x);
     })

     this.stream2$ = this.Stream2();
  }
}
