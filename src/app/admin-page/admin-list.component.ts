import { Component, Input } from '@angular/core';

import { AdminService} from '../../services/admin.service';

@Component({
  selector: '[app-admin-list]',
  templateUrl: './admin-list.component.html'
})

export class AdminListComponent {
    @Input() admin: any;

    constructor(private adminService: AdminService) {
    }

    deleteAdmin() {
         this.adminService.deleteAdmin(this.admin)
            .subscribe((response: any) => {
                  console.log('2');
              });
    }
}
