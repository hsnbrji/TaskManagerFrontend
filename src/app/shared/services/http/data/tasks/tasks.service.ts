import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Task} from '../../../../models/task/task';
import {URL__TASKS_CREATE_POST, URL__TASKS_DETAILS_GET, URL__TASKS_EDIT_PATCH, URL__TASKS_FIND_ALL_GET} from '../../../../../../globals';
import {ParamReplacePipe} from '../../../../pipes/param-replace.pipe';

/**
 *  Service responsible for calling tasks API
 */

@Injectable()
export class TasksService {

  /**
   * Constructor
   * @param http HttpClient
   * @param paramReplace Pipe to replace url params
   */
  constructor(private http: HttpClient,
              private paramReplace: ParamReplacePipe) {
  }

  /**
   * Gets All database Tasks
   */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(URL__TASKS_FIND_ALL_GET);
  }

  /**
   * Gets the details of a specific task
   * @param id Id of the task
   */
  getTaskDetails(id: string): Observable<Task> {
    const url = this.paramReplace.transform(URL__TASKS_DETAILS_GET, {id});
    return this.http.get<Task>(url);
  }

  /**
   * Calls an api and creates a Task in database
   * @param task The task to be created
   */
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(URL__TASKS_CREATE_POST, task);
  }

  /**
   * Edits a specific task in database
   * @param id Id of the task
   * @param task Task Details
   */
  editTask(id: string, task: Task): Observable<Task> {
    const url = this.paramReplace.transform(URL__TASKS_EDIT_PATCH, {id});
    return this.http.patch<Task>(url, task);
  }

}
