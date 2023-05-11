import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationForm} from "../../forms/registration.form";
import {StatementService} from "../../../service/statement.service";
import {RegistrationModel} from "../../models/RegistrationModel";
import {ValidationMessages} from "../../../configuration/ValidationMessages";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  passwordEquality: boolean = true;
  @Output()
  formSubmitted: EventEmitter<RegistrationModel> = new EventEmitter<RegistrationModel>();

  constructor(private statementService: StatementService) {
    this.registrationForm = new FormGroup<RegistrationForm>({
      username: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      passwordConfirmation: new FormControl("", [Validators.required]),
    });

    this.registrationForm.valueChanges.subscribe((value) => {
      this.passwordEquality = this.passwordComparator();
    });
  }

  private passwordComparator() {
    return this.registrationForm.get("password")?.value === this.registrationForm.get("passwordConfirmation")?.value;
  }

  submitForm() {
    const formValid = this.registrationForm.valid && this.passwordComparator();
    if (formValid) {
      this.formSubmitted.emit({
        username: this.registrationForm.get("username")?.value,
        password: this.registrationForm.get("password")?.value,
        email: this.registrationForm.get("email")?.value
      });
    } else
      this.statementService.dataNotCorrect();

  }

    protected readonly ValidationMessages = ValidationMessages;
}