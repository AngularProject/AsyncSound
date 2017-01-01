import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as ComponentsList from './index';

@NgModule({
    imports: [ CommonModule, RouterModule, FormsModule, HttpModule ],
    declarations: [ComponentsList.AdminListComponent, ComponentsList.AdminPageComponent],
    exports: []
})
export class AdminModule {}
