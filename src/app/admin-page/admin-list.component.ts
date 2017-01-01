import { Component, Input, OnChanges, SimpleChanges,    Output,
   EventEmitter  } from '@angular/core';

import { AdminService} from '../../services/admin.service';

import { NotificationsService } from '../../../node_modules/angular2-notifications';

@Component({
  selector: '[app-admin-list]',
  templateUrl: './admin-list.component.html'
})

export class AdminListComponent {
    @Input() admin: any;

    @Output() delete: EventEmitter<any> = new EventEmitter<any>();


    constructor(private adminService: AdminService, private notificationService: NotificationsService) {
    }

    deleteAdmin() {
         this.adminService.deleteAdmin(this.admin)
            .subscribe((response: any) => {
                    if (response.error) {
                        this.notificationService.error('Cannot remove admin', response.message);
                    } else {
                        this.delete.emit('Emitted ' + this.admin.username);
                        this.notificationService.success(`Admin removed ${this.admin.username} successfully`, ':)');
                        };
                    }, () => this.notificationService.error('Loading failed', 'Error'));
    }
}
