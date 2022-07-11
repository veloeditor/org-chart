import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { MatDialog } from '@angular/material/dialog'
import { OrgDetailsComponent } from '../org-details/org-details.component';


@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {

  data1: TreeNode[] = [];
  selectedNode!: TreeNode;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.data1 = [{
      label: 'Parent',
      type: 'parent',
      styleClass: 'parent',
      expanded: true,
      data: {name:'Stanford Health Care', 'avatar': 'stanford-health-logo.jpg'},
      children: [
          {
              label: '2nd Level',
              type: 'parent',
              styleClass: 'child',
              expanded: true,
              data: {name:'Stanford Children\'s Health', 'avatar': 'stanford-childrens-logo.jpg'},
              children:[
                {
                  label: '3rd Level',
                  type: 'parent',
                  styleClass: 'hospital',
                  expanded: true,
                  data: {name: 'Lucile Packard Children\'s Hospital', 'avatar': 'hospital.jpg'},
                  children: [
                    {
                      type: 'building',
                      styleClass: 'building',
                      data: {'name': 'Building A', 'avatar': 'hospital.jpg'}
                  },
                  {
                      type: 'building',
                      styleClass: 'building',
                      data: {'name': 'Building B', 'avatar': 'hospital.jpg'}
                  }
                  ]
                }
              ],
          }
        ]
    }];
  }

  onNodeSelect(event: any) {
    const dialogRef = this.dialog.open(OrgDetailsComponent, {
      width: '500px',
      data: event.node.data
    });
  }

}
