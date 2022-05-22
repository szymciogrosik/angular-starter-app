﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {UserService} from '../_services/user.service';
import {SnackbarService} from '../_services/snackbar.service';
import {ErrorUtils} from '../../utils/error.utils';
import {RedirectionEnum} from '../../utils/redirection.enum';

@Injectable({ providedIn: 'root' })
export class UserGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private snackbarService: SnackbarService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.hasRoleUser()) {
      return true;
    }

    this.snackbarService.openDefaultSnackBar(ErrorUtils.getMessage(ErrorUtils.NOT_ENOUGH_RIGHTS));
  }
}
