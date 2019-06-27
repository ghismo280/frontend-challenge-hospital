import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  constructor (private httpService: HttpClient, private route: ActivatedRoute) { }
  resultArr: string [];
  arg = this.route.snapshot.params.id;
  path = '../../assets/mock-api-data/patients/' + this.arg + '/summary.json';


  ngOnInit() {
    console.log(this.path);
    this.httpService.get(this.path).subscribe(
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
