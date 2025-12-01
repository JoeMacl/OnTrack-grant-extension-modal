import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UIRouter } from '@uirouter/core';
import * as _ from 'lodash';
import { Task } from 'src/app/api/models/task';
import { TaskStatusEnum } from 'src/app/api/models/task-status';
import { TaskService } from 'src/app/api/services/task.service';
import { ExtensionModalService } from 'src/app/common/modals/extension-modal/extension-modal.service';
import { MatDialog } from '@angular/material/dialog';
import { GrantExtensionFormComponent } from 'src/app/admin/modals/grant-extension-form/grant-extension-form.component';
import { UserService } from 'src/app/api/services/user.service';



@Component({
  selector: 'f-task-status-card',
@@ -19,6 +24,8 @@ export class TaskStatusCardComponent implements OnChanges, AfterViewInit {
    private extensions: ExtensionModalService,
    private taskService: TaskService,
    private router: UIRouter,
    private dialog: MatDialog,
    private userService: UserService,
  ) {}

  @Input() task: Task;
@@ -66,4 +73,17 @@ export class TaskStatusCardComponent implements OnChanges, AfterViewInit {
      this.task.refresh();
    });
  }

  openGrantExtensionDialog(): void {
    this.dialog.open(GrantExtensionFormComponent, {
      width: '100%',
      maxWidth: '600px',
      disableClose: true,
    });
  }

  get currentUser() {
    return this.userService.currentUser;
  }

}