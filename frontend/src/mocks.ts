import { Industry, InterestOption } from '@/types';

export const interestOptions: InterestOption[] = [
  {
    id: 1,
    name: 'Certifications',
    relatedOccupations: [],
  },
  {
    id: 2,
    name: 'Training',
    relatedOccupations: [],
  },
  {
    id: 3,
    name: 'Education',
    relatedOccupations: [],
  },
  {
    id: 4,
    name: 'Career Advancement',
    relatedOccupations: [],
  },
  {
    id: 5,
    name: 'Sales',
    relatedOccupations: [6, 1],
  },
  {
    id: 6,
    name: 'Software Development',
    relatedOccupations: [5, 3],
  },
  {
    id: 7,
    name: 'Dev Ops',
    relatedOccupations: [5, 3],
  },
  {
    id: 8,
    name: 'Accessibility',
    relatedOccupations: [1, 2, 3, 5],
  },
  {
    id: 9,
    name: 'Security Policies',
    relatedOccupations: [5, 3],
  },
  {
    id: 10,
    name: 'Penetration Testing',
    relatedOccupations: [5, 3],
  },
  {
    id: 11,
    name: 'Cryptography',
    relatedOccupations: [5, 3],
  },
  {
    id: 12,
    name: 'SOC 2 Compliance',
    relatedOccupations: [5, 3],
  },
  {
    id: 13,
    name: 'Hardware Engineering',
    relatedOccupations: [5, 3],
  },
  {
    id: 14,
    name: 'Payroll',
    relatedOccupations: [10, 7],
  },
  {
    id: 15,
    name: 'Benefits and Health Insurance',
    relatedOccupations: [10, 7],
  },
  {
    id: 16,
    name: 'Lean Manufacturing',
    relatedOccupations: [4, 11, 3],
  },
  {
    id: 17,
    name: 'Logistics',
    relatedOccupations: [4, 11, 3],
  },
  {
    id: 18,
    name: 'Modern Design Principles',
    relatedOccupations: [1, 2],
  },
  {
    id: 19,
    name: 'Market Cap Tables',
    relatedOccupations: [10, 6],
  },
  {
    id: 20,
    name: 'Investments',
    relatedOccupations: [10, 6],
  },
  {
    id: 21,
    name: 'Accounting',
    relatedOccupations: [10, 7],
  },
  {
    id: 22,
    name: 'Business Management',
    relatedOccupations: [10, 11, 4, 3, 1],
  },
  {
    id: 23,
    name: 'Team Leadership',
    relatedOccupations: [],
  },
  {
    id: 24,
    name: 'Sales Pipelines',
    relatedOccupations: [6],
  },
];

export const industries: Industry[] = [
  { id: 1, name: 'Marketing' },
  { id: 2, name: 'Product and Design' },
  { id: 3, name: 'Engineering' },
  { id: 4, name: 'Operations' },
  { id: 5, name: 'IT and Support' },
  { id: 6, name: 'Sales and Account Mgmt' },
  { id: 7, name: 'HR and Legal' },
  { id: 8, name: 'Creative Production' },
  { id: 9, name: 'Customer Service' },
  { id: 10, name: 'Finance' },
  { id: 11, name: 'Manufacturing' },
  { id: 12, name: 'Other' },
];
