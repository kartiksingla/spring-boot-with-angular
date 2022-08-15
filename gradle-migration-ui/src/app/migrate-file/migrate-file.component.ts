import { Component, OnInit } from '@angular/core';
import { MigrationService } from '../services/migration.service';
import { Greet } from '../model/greet';
import { Input } from '../model/migration/input';
import { Dependencies } from '../model/migration/dependencies';

@Component({
  selector: 'app-migrate-file',
  templateUrl: './migrate-file.component.html',
  styleUrls: ['./migrate-file.component.css']
})
export class MigrateFileComponent implements OnInit {

  outputBuildGradle : String = '';
  outputGradleProperties : String = '';
  constructor(public migrationService : MigrationService) {
  }

  ngOnInit(): void {
  }

  migrateGradleFunction(inputData: string) {
      let inputObj : Input = {
        content : inputData
      };
      this.migrationService.postMigrateGradleDependencies(inputObj).subscribe((data : Dependencies) => {
        console.log(data);

        if(data.errorMessage === null || data.errorMessage == undefined) {
          this.outputBuildGradle = data.dependenciesClosure;
          this.outputGradleProperties = data.gradleProperties;
        }
        else {
          this.outputBuildGradle = data.errorMessage;
          this.outputGradleProperties = '';
        }
      });
  }

}
