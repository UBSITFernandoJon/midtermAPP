import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Users } from './../users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [CommonModule, JsonPipe, FormsModule],
  templateUrl: './interpolation.html',
  styleUrls: ['./interpolation.css'],
})
export class Interpolation {
  title: string = 'Angular Data Binding Demo';
  studentName: string = 'Maria Santos';
  courseCode: string = 'APPDEV1';
  currentYear: number = new Date().getFullYear();
  roles = ['Admin', 'Editor', 'Viewer'];

  text: string = '{{ expression }}';
  curly: string = '{{ }}';
  common: string = '{{ userName }}';
  methods: string = '{{ getStatus() }}';
  dotnot: string = '{{ user.name }}';
  dotnot2: string = '{{ user?.profile?.email }}';
  jpipe: string = '{{ user | json }}';
  getWelcomeMessage(): string {
    return 'Welcome to Angular Interpolation Demo!';
  }
  isActive: boolean = false;

  user = {
    name: 'John Doe',
    details: { role: 'Admin' }
  };

  skills = ['HTML', 'CSS', 'Angular'];

  selectedCountryId: number | null = null;

  countries = [
    { id: 1, name: 'USA' },
    { id: 2, name: 'Canada' },
    { id: 3, name: 'Mexico' }
  ];
}