import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  ProjectForm = new FormGroup({
    Name: new FormControl(''),
    Description: new FormControl(' '),
    ProjectManger: new FormControl(''),
    LeadTeamMembers: new FormControl(''),
    ProjectFeature: new FormControl(''),
 });

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.ProjectForm.value);
  }
}
