import { Component } from '@angular/core';
export type EditorType = 'teammember' | 'project' | 'home' | 'mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  page: EditorType = 'home';

  get showTeamMemberPage(){
    return this.page === 'teammember';
  }
  get showHome(){
    return this.page === 'home';
  }
  get showProject(){
    return this.page === 'project';
  }
  get showProjectMock(){
    return this.page === 'mock';
  }
  toggleEditor(type: EditorType){
    this.page = type;
  }

}
