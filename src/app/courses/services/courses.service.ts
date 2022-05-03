import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../model/course';
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/db.json';
  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get<Course[]>(this.API).pipe(courses => courses );
  }
}
