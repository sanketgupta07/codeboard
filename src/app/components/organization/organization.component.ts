import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/model/organization';
import { OrganizationService } from 'src/app/service/organization/organization.service';

@Component({
  selector: 'app-org',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  public org: Organization;
  constructor(private orgService: OrganizationService) { }

  ngOnInit(): void {
    console.log('OrganizationComponent: Init.');
    const orgName = 'github';
    this.getOrg(orgName);
  }

  // tslint:disable-next-line:typedef
  getOrg(orgName: string){
    this.orgService.getOrg(orgName).subscribe((data: Organization) => {
      this.org = data;
    });
  }

}
