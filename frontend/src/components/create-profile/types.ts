import * as Yup from 'yup';

import { zxcvbn } from '@zxcvbn-ts/core';

export const weakPasswordErrorMsg = 'This password is not strong enough!';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('A valid email is required').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .test('is-strong-enough', weakPasswordErrorMsg, (password: string) => {
      const { score } = zxcvbn(password);
      if (score < 3) {
        return false;
      }
      return true;
    }),
});

export enum USER_NAME_FORM_FIELDS {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
}

export const UserNameSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
});

export enum PET_FORM_FIELDS {
  NAME = 'name',
  DOB = 'dob',
  ANIMAL = 'animal',
}

export const PetAddSchema = Yup.object().shape({
  name: Yup.string().required("Your pet's name is required"),
  animal: Yup.string().required("Your pet's type is required"),
  dob: Yup.string().required("Your pet's date of birth is required"),
});
