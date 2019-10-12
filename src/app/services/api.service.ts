import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, Subscribable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apiURL: string = "http://localhost/angular-project/";
  // apiURL: string = "http://api.ngaituk.online/";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    }),
    responseType: "text" as "json"
  };
  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getWorkers(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/workers/getWorkers.php`);
  }

  geContractors(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/contractors/getContractors.php`);
  }

  getJobs(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/jobs/getJobs.php`);
  }

  getTimesheet(id = null): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/timesheet/getTimesheet.php`);
  }

  deleteWorker(id = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/workers/deleteWorker.php?id=${id}`,
      {}
    );
  }

  deleteContractor(id = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/contractors/deleteContractor.php?id=${id}`,
      {}
    );
  }

  deleteJob(s_no = null): Observable<any> {
    return this.httpClient.delete(
      `${this.apiURL}/jobs/deleteJob.php?s_no=${s_no}`,
      {}
    );
  }

  addWorker(body): Observable<any> {

    console.log("WORKER DATA");
    console.log(body);
    console.log("WORKER DATA");
    debugger;

    return this.httpClient.post(
      `${this.apiURL}/workers/createWorker.php`,
      body,
      this.httpOptions
    );
  }

  addContractor(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/contractors/createContractor.php`,
      body,
      this.httpOptions
    );
  }

  addJob(body): Observable<any> {
    return this.httpClient.post(
      `${this.apiURL}/jobs/createjob.php`,
      body,
      this.httpOptions
    );
  }
}
