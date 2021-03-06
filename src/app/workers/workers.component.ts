import { Component, OnInit } from "@angular/core";
import { ApiService } from "./../services/api.service";
import { ApiContractorService } from "./../services/api.contractors.service";
import { AddWorkerComponent } from "./add-worker/add-worker.component";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-workers",
  templateUrl: "./workers.component.html",
  styleUrls: ["./workers.component.css"]
})
export class WorkersComponent implements OnInit {
  data: any;
  foo: any;
  workers: any[];
  workersOld: any[];
  showLoader = true;
  constructor(
    private apiService: ApiService,
    private apiContractor: ApiContractorService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getRecords();
  }

  getRecords = () => {
    this.apiService.getWorkers().subscribe(res => {
      console.log(res);
      this.showLoader = false;
      this.workers = res;
    });
  };

  editRecord = (id = null) => {
    this.router.navigate(["/add-worker", id]);
  };

  deleteRecord = (id = null) => {
    if (confirm("Are you sure to you want to delete ?")) {
      this.apiService.deleteWorker(id).subscribe(
        res => {
          console.log(res);
          this.showLoader = false;
          this.workers = res;
          alert("Your record has been deleted.");
          this.getRecords();
        },
        error => {
          console.log(error);
          alert("There is an Server Error!");
        }
      );
    }
  };
}
