import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { OrgTree } from './../org-tree';

@Component({
  selector: 'app-show-org-tree',
  templateUrl: './show-org-tree.component.html',
  styleUrls: ['./show-org-tree.component.css']
})
export class ShowOrgTreeComponent implements OnInit {

  orgTree: OrgTree[] = [{
	  id: 'o-xxxxxxxx',
	  name: 'jinglebell',
	  email: '',
	  type: 'Organization',
	  children: [
		  {
			  id: 'ou-xxxx-xxxxxxx',
			  name: 'a-ou',
			  email: '',
			  type: 'Organization Unit',
			  children: [
				  {
					  id: '343422424',
					  name: 'Aaccount',
					  email: 'a@a.com',
					  type: 'Account',
					  children: []
				  },
				  {
					  id: '123232423',
					  name: 'Baccount',
					  email: 'b@b.com',
					  type: 'Account',
					  children: []
				  },
				  {
					  id: '32435435435',
					  name: 'caccount',
					  email: 'c@c.com',
					  type: 'Account',
					  children: []
				  }
			  ]
		  },
		  {
			  id: 'ou-xxxx-xxxxxxxx',
			  name: 'B-OU',
			  type: 'Organization Unit',
			  email: '',
			  children: [
				  {
					  id: '89898987972',
					  name: 'daccount',
					  email: 'd@d.com',
					  type: 'Account',
					  children: []
				  }
			  ]
		  }
	  ]
  }];

  orgTreeControl = new NestedTreeControl<OrgTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<OrgTree>();

  constructor() { 
	  this.dataSource.data = this.orgTree
  }

  hasChild = (_: number, node: OrgTree) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
