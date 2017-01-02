import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Playlist } from '../../models/playlist';

import { PlaylistService } from '../../../services/playlist.service';
import { NotificationsService } from '../../../../node_modules/angular2-notifications';

@Component({
  selector: 'app-edit-information',
  templateUrl: './edit-information.component.html'
})

export class EditInformationComponent implements OnInit {
   model: any;

    constructor(private playlistService: PlaylistService, private notification: NotificationsService) {
    }

    ngOnInit() {
    }

    editInformation() {
        console.log('fake edited');
    }
}
