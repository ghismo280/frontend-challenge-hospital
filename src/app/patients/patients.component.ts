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
  resultArrGeneral: string [];
  resultArrSpecific: string [];
  realmin: number;
  hours: number;
  patient: string ;
  arg = this.route.snapshot.params.id;
  path = '../../assets/mock-api-data/patients/' + this.arg + '/summary.json';

  convertActivity(minutes) {
    this.realmin = minutes % 60;
    this.hours = Math.floor(minutes / 60);
    return minutes < 60 ? minutes + " min" : this.hours + " h and " + this.realmin + " min";
  };

  convertMinutes(dataArr) {
    dataArr.forEach(element => {
      element.minutesraw = element.minutes / 2;
      element.minutes = this.convertActivity(element.minutes)
      console.log(element.minutesraw)
    });
  }

  ngOnInit() {
    // console.log(this.path);
    this.httpService.get(this.path).subscribe(
      data => {
        this.resultArr = data as string [];	 // FILL THE ARRAY WITH DATA.
        this.convertMinutes(this.resultArr);
          // console.log(this.resultArr[0]);
          // console.log(this.resultArr[1]);
          // console.log(this.resultArr[2]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }    
    );

    this.httpService.get("../../assets/mock-api-data/patients.json").subscribe(
      data => {
        this.resultArrGeneral = data as string []; // FILL THE ARRAY WITH DATA.
        this.patient = this.resultArrGeneral[this.arg - 1];
          // console.log(this.resultArrGeneral[0]);
          // console.log(this.resultArrGeneral[1]);
          // console.log(this.resultArrGeneral[2]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
