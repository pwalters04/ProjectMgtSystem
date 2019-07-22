import { Component, OnInit } from '@angular/core';
import {ProjectMock} from '../mock-project-data';
import {ProjectDetail} from '../project-model';

@Component({
  selector: 'app-mock-data',
  templateUrl: './mock-data.component.html',
  styleUrls: ['./mock-data.component.css']
})
export class MockDataComponent implements OnInit {

 projects = ProjectMock;
 selectedProject: ProjectDetail;
  constructor() { }
  ngOnInit() {
  }
  onSelect(project: ProjectDetail): void {
    this.selectedProject = project;
  }

}
