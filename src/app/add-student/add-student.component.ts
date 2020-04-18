import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/models/student';
import { StudentService } from '../shared/services/student.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  public student = new Student();
  addForm: any;
  constructor(private studentService: StudentService) { }
  ngOnInit(): void {
  }
  save() {
    if (!this.student.id) {
      this.studentService.AddStudent({ ... this.student });
  } else {

      this.studentService.updateStudent({ ... this.student });
  }

  this.addForm.reset();
}
  getStudent(id) {
    this.studentService.getStudent(id).subscribe(res => {
    this.student = res.data() as Student;
    this.student.id = res.id;
    });
    }
    
}
