import {ProjectDetail} from './project-model';

export const ProjectMock: ProjectDetail[] = [
  {
    projectID:10,
    projectName: 'Game Store',
    projectDescription: 'Build Online Game Store',
    projectManager: 'Josh Smith',
    leadTeamMember: 'Jane Doe',
    projectStatus: 'On-Time'
  },
  {
    projectID:11,
    projectName: 'Hospital Record System ',
    projectDescription: 'Build Hospital Record System that will' +
    'assist Doctors,Nurses,Tech, and the Patient',
    projectManager: 'Patrick Johnson',
    leadTeamMember: 'Jake Peterson',
    projectStatus: 'At-Risk'
  },
  {
    projectID:12,
    projectName: 'Study Buddy App ',
    projectDescription: 'This app will bring students together to study for exams and group projects',
    projectManager: 'Ben Stevenson',
    leadTeamMember: 'Joshua Adams',
    projectStatus: 'On-Time'
  }

];

