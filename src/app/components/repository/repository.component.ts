import { Component, OnInit } from '@angular/core';
import { Repository } from 'src/app/model/repository';
import { RepositoryService } from 'src/app/service/repository/repository.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  public repo: Repository;
  constructor(private repoService: RepositoryService) { }

  ngOnInit(): void {
    console.log('RepositoryComponent: Init.');
    const owner = 'octocat';
    const repo = 'hello-world';
    this.getRepo(owner, repo);
  }

  getRepo(owner: string, repo: string){
    this.repoService.getRepo(owner, repo).subscribe((data: Repository) => {
      this.repo = data;
    });
  }
}
