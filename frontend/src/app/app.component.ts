import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ExamsApiService} from './exams/exams-api.service';
import {Exam} from './exams/exam.model';
import {TimeService} from './time/time.service';
import {Time} from './time/time.model';
import { interval } from 'rxjs/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  examsListSubs: Subscription;
  examsList: Exam[];
  timeSubs: Subscription;
  time: Time;

  constructor(private examsApi: ExamsApiService,
      private timeApi: TimeService) {
  }

  private updateSubs() {
    this.examsListSubs = this.examsApi
      .getExams()
      .subscribe(res => {
          this.examsList = res;
        },
        console.error
    );
    this.timeSubs = this.timeApi
        .getTime()
        .subscribe(res => {
          this.time = res;
        }),
        console.error
  }

  ngOnInit() {
    this.updateSubs();

    interval(5000).subscribe(n => {
      this.updateSubs();
    })
  }

  ngOnDestroy() {
    this.examsListSubs.unsubscribe();
    this.timeSubs.unsubscribe();
  }
}
