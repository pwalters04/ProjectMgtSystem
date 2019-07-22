import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  constructor() { }

  TeamMemberForm = new FormGroup({
     FirstName: new FormControl(''),
     LastName: new FormControl(' ')
  });

onSubmit(){
  console.warn(this.TeamMemberForm.value);
}
  ngOnInit() {
  }

}
