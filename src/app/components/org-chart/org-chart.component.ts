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
      data: { name: 'Stanford Health Care', 'avatar': 'stanford-health-logo.jpg' },
      children: [
        {
          label: '2nd Level',
          type: 'parent',
          styleClass: 'child',
          expanded: true,
          data: { name: 'Stanford Children\'s Health', 'avatar': 'stanford-childrens-logo.jpg' },
          children: [
            {
              label: '3rd Level',
              type: 'parent',
              styleClass: 'hospital',
              expanded: true,
              data: { name: 'Lucile Packard Children\'s Hospital', 'avatar': 'hospital.jpg' },
              children: [
                {
                  type: 'building',
                  styleClass: 'building',
                  data: { 'name': 'Building West', 'avatar': 'hospital.jpg' }
                },
                {
                  type: 'building',
                  styleClass: 'building',
                  data: { 'name': 'Building Central', 'avatar': 'hospital.jpg' }
                },
                {
                  type: 'building',
                  styleClass: 'building',
                  data: { 'name': 'Building South', 'avatar': 'hospital.jpg' }
                }
              ]
            }, {
              label: '3rd Level',
              type: 'parent',
              styleClass: 'hospital',
              expanded: true,
              data: { name: 'Some Other Hospital', 'avatar': 'hospital2.jpg' }
            }
          ],
        }
      ]
    }];
  }

  onNodeSelect(event: any) {
    console.log(event);
    const dialogRef = this.dialog.open(OrgDetailsComponent, {
      width: '500px',
      data: event.node.data
    });
  }

}
