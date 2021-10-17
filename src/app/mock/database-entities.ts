import { Announcement } from '../models/announcement.model';
import { User } from '../models/user.model';
import { Applicant } from '../models/applicant.model';
import { BlacklistedUser } from '../models/blacklisted-user.model';

const announcements: Announcement[] = [
  {
    date: new Date(),
    author: 'Tim Cook',
    title: 'This is the first announcement!',
    bodyHTML: `
    <b>this should be some bold text...</b>
    <div>Also it has a div!</div>
    `,
  },
];

const users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  },
];

const applicants: Applicant[] = [
  {
    name: 'Tim Cook',
    email: 'tim.cook@apple.com',
    caseWorkerName: 'Gina White',
    caseWorkerEmail: 'gwhite@colorado.gov',
    dateApplied: new Date(),
  },
  {
    name: 'John Denver',
    email: 'jdenver2@gmail.com',
    caseWorkerName: 'Sam Smith',
    caseWorkerEmail: 'sam.smith@colorado.gov',
    dateApplied: new Date(),
  },
  {
    name: 'Michelle Obama',
    email: 'mobama@whitehouse.gov',
    caseWorkerName: 'Gina White',
    caseWorkerEmail: 'gwhite@colorado.gov',
    dateApplied: new Date(),
  },
];

const blacklist: BlacklistedUser[] = [
  {
    name: 'Josh Smith',
    email: 'josh.smith@aol.com',
    phone: '(720) 822-9918',
    bannedBy: 'Jett Crowson',
    banDate: new Date(),
  },
  {
    name: 'Amy Green',
    email: 'amygirl1111@aol.com',
    phone: '(720) 221-9887',
    bannedBy: 'Jett Crowson',
    banDate: new Date(),
  },
  {
    name: 'Bill Gates',
    email: 'bill@microsoft.com',
    phone: '(315) 883-1182',
    bannedBy: 'Jett Crowson',
    banDate: new Date(),
  },
];

export { announcements, users, applicants, blacklist };
