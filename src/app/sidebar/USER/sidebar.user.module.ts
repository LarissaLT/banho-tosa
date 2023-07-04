import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarUserComponent } from './sidebar.user.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ SidebarUserComponent ],
    exports: [ SidebarUserComponent ]
})

export class SidebarModule {}
