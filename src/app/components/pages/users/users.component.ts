import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserFacade } from 'src/app/store/facade/user.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  updateForm: FormGroup;
  id = '';
  name = '';
  email = '';
  password = '';
  publicUser = false;
  confirmationPassword = '';

  constructor(private userFacade: UserFacade) {
    this.updateForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.email]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', []),
      confirmationPassword: new FormControl('', []),
    });
  }

  async ngOnInit(): Promise<void> {
    const { name, role, email, id, publicUser } = await this.userFacade.user$
      .pipe(take(1))
      .toPromise();

    this.id = id;
    this.publicUser = publicUser;

    this.updateForm.get('name')?.setValue(name);
    this.updateForm.get('role')?.setValue(role);
    this.updateForm.get('email')?.setValue(email);

    if (publicUser) {
      this.updateForm.controls['email'].disable();
      this.updateForm.controls['password'].disable();
    }
    this.updateForm.get('password')?.valueChanges.subscribe((current) => {
      this.password = current
    });
  }

  updateData() {
    const buildRq = this.publicUser
      ? {
          name: this.updateForm.get('name')?.value,
        }
      : {
          name: this.updateForm.get('name')?.value,
          email: this.updateForm.get('email')?.value,
          password: this.updateForm.get('password')?.value,
        };
    this.userFacade.updateInformation(buildRq, this.id);
  }
}
