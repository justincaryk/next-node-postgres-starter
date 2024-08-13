import * as Yup from 'yup';

import { AllergySeverity, Record } from '@/graphql/generated/graphql';

export enum RECORD_FORM_FIELDS {
  RECORD_TYPE = 'recordType',
  NAME = 'name',
  ADMINISTERED_AT = 'administeredAt',
  REACTIONS = 'reactions',
  SEVERITY = 'severity',
  VISIT_DATE = 'visitDate',
  VET_NAME = 'vetName',
  NOTES = 'notes',
  FOLLOW_UP_REQUESTED = 'followUpRequested',
}

export const BaseRecordSchema = Yup.object().shape({
  [RECORD_FORM_FIELDS.RECORD_TYPE]: Yup.string().required('A record type is required'),
});

export const AllergyFormSchema = Yup.object().shape({
  [RECORD_FORM_FIELDS.NAME]: Yup.string().required('A record name is required'),
  [RECORD_FORM_FIELDS.REACTIONS]: Yup.string(),
  [RECORD_FORM_FIELDS.SEVERITY]: Yup.string().required('Allergy severity is required'),
});

export const VaccineFormSchema = Yup.object().shape({
  [RECORD_FORM_FIELDS.NAME]: Yup.string().required('A record name is required'),
  [RECORD_FORM_FIELDS.ADMINISTERED_AT]: Yup.string().required(
    'Vaccine administration date required',
  ),
});

export const VisitFormSchema = Yup.object().shape({
  [RECORD_FORM_FIELDS.NOTES]: Yup.string(),
  [RECORD_FORM_FIELDS.VET_NAME]: Yup.string().required('Vet name is required'),
  [RECORD_FORM_FIELDS.VISIT_DATE]: Yup.string().required('Visit date is required'),
  [RECORD_FORM_FIELDS.FOLLOW_UP_REQUESTED]: Yup.boolean(),
});

export type MungedPetRecord = Pick<Record, 'petId' | 'recordType' | 'createdAt' | 'userId'> & {
  recordId: string;
  name: string;
  type: 'allergy' | 'vaccine' | 'vet visit';
  reactions?: string;
  severity?: AllergySeverity;
  allergyRecordId?: string;
  administeredAt?: Date;
  vaccineRecordId?: string;
  vetName?: string;
  visitDate?: Date;
  notes?: string;
};
