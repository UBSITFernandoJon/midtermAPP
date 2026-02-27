import { Component } from '@angular/core';
import { JsonPipe } from '@angular/JsonPipe';
import { FormsModule } from '@angular/FormsModule';
import { User } from '../user';

@Component({
  selector: 'app-interpolation',
  imports: [JsonPipe, FormsModule, User],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getfullYear();
  roles = [ 'Admin', 'Editor', 'Viewer' ];
  text: string = "{(expression}}"
  curly: string ="{{ }}"
  common: string ="{{ userName }}"
  methods: string= "{{ getStatus() }}" 
  dotnot: string="{{ user.name }}"
  dotnot2: string ="{{ user?.profile?.email }}" 
  jpipe: string ="{{ user | json }}"
  isActive: boolean = false;
}
