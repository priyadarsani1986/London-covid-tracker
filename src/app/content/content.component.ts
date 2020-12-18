import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor( private tracker: TrackerService) { }
  collection={};
  ngOnInit(): void {
    this.tracker.getList().subscribe((result)=> {
      console.warn(result);
        this.collection = result;
    }
    )
  }
 }
