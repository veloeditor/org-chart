import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {

  org: TreeNode[] = [];

  constructor() { }

  ngOnInit(): void {
    this.org = [{
      label: 'Stanford Health',
            expanded: true,
            children: [
                {
                    label: 'Stanford Childrens Health',
                    expanded: true,
                    children: [
                        {
                            label: 'Building A'
                        },
                        {
                            label: 'Building B'
                        }
                    ]
                }
            ]
    }];
  }

  onNodeSelect(event: any) {
    console.log('test');
  }

}
