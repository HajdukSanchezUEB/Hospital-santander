import { Component, OnInit } from '@angular/core';
import { AgendaService, DayService, EventRenderedArgs, MonthAgendaService, MonthService, TimelineMonthService, TimelineViewsService, View, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-schedule',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  public currentView: View = 'Month';

  constructor() { }

  ngOnInit(): void {
  }

  onEventRendered(args: EventRenderedArgs): void {
    console.log(args.data);
  }

}
