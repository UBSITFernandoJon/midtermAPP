import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css',
})
export class TwoWay { twoWName: string = '';

twoWayName: string = '';
twoWayEmail: string = '';
twoWayAge: number = 18;
twoWayGender: string = '';
twoWaySubscribed: boolean = false;
rangeValue: number = 50;
twoWayLanguage: string = '';
twoWayColor: string = '#ff0000';

programmingLanguages: string[] = [
  'Java',
  'C#',
  'Python',
  'JavaScript',
  'PHP'
];

// ───────── EMPLOYEE TABLE DATA ─────────
user = [
  {
    id: 1,
    name: 'Juan Dela Cruz',
    department: 'IT',
    position: 'Developer',
    role: 'Frontend'
  },
  {
    id: 2,
    name: 'Maria Santos',
    department: 'HR',
    position: 'Manager',
    role: 'Recruitment'
  },
  {
    id: 3,
    name: 'Pedro Reyes',
    department: 'Finance',
    position: 'Analyst',
    role: 'Auditing'
  }
];

// ───────── SELECTED USER (MODAL) ─────────
selectedId: number | null = null;
selectedName: string = '';
selectedDepartment: string = '';
selectedPosition: string = '';
selectedRole: string = '';

// ───────── METHOD: VIEW DETAILS ─────────
onClick(u: any): void {
  this.selectedId = u.id;
  this.selectedName = u.name;
  this.selectedDepartment = u.department;
  this.selectedPosition = u.position;
  this.selectedRole = u.role;
}

// ───────── METHOD: RESET FORM ─────────
resetForm(): void {
  this.twoWName = '';
  this.twoWayName = '';
  this.twoWayEmail = '';
  this.twoWayAge = 18;
  this.twoWayGender = '';
  this.twoWaySubscribed = false;
  this.rangeValue = 50;
  this.twoWayLanguage = '';
  this.twoWayColor = '#ff0000';
}

// ───────── LIVE PROFILE SUMMARY (GETTER) ─────────
get profileSummary(): string {
  return `
    Name: ${this.twoWayName || 'N/A'},
    Email: ${this.twoWayEmail || 'N/A'},
    Age: ${this.twoWayAge},
    Gender: ${this.twoWayGender || 'N/A'},
    Subscribed: ${this.twoWaySubscribed ? 'Yes' : 'No'},
    Language: ${this.twoWayLanguage || 'N/A'}
  `;
}}
