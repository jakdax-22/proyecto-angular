import { Component } from '@angular/core';
import { Project } from 'src/app/models/projects';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers : [ProjectService]
})
export class CreateComponent {
  public title: string;
  public project: Project;
  public status: string;

  constructor (
    private _projectService: ProjectService
  ) {
    this.title = "Crear Proyecto";
    this.project = new Project ('','','','',2023,'','');
    this.status = '';
  }

  onSubmit(form:any){
    console.log (this.project);
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project){
          this.status = 'success';
          form.reset();
        }
        else {
          this.status = 'failed';
        }
      },
      error => {
        this.status = 'failed';
      }

    )
  }
}
