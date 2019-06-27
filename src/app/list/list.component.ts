import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor (private httpService: HttpClient) { }
  resultArr: string [];

  ngOnInit() {
    this.httpService.get('../assets/mock-api-data/patients.json').subscribe(
      data => {
        this.resultArr = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.resultArr[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
