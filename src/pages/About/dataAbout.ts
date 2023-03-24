import { gitIcon, linkedinIcon, mailIcon, phoneIcon } from 'assets/images';

export interface Item {
  id: number;
  className?: string;
  subTitle?: string;
  content: string[];
}
export interface MainItem {
  className?: string;
  id: number;
  title: string;
  child?: Item[];
  description?: string;
}

export interface Social {
  id: number;
  name: string;
  url: string;
  icon: string;
}

export interface EmployeeInfo {
  fullName: string;
  role: string;
  age: number;
  address: string;
  birth: string;
  nationality: string;

  social: Social[];
}

export const employeeData: EmployeeInfo = {
  fullName: 'Bui Viet Phap',
  role: 'Frontend Developer',
  age: new Date().getFullYear() - 1994,
  address: '38/13A Dong Chieu, Tan Dong Hiep Ward, Di An City, Binh Duong Provice',
  birth: '09/02/1994, Thai Binh',
  nationality: 'Viet Nam',

  social: [
    {
      name: '0986742320',
      id: 3,
      icon: phoneIcon,
      url: 'tel:+84986742320',
    },
    {
      name: 'Email',
      id: 2,
      icon: mailIcon,
      url: 'mailto:bvphap.tk@gmail.com',
    },
    {
      name: 'Git',
      id: 1,
      icon: gitIcon,
      url: 'https://t.ly/Ny91',
    },
    {
      name: 'Linkedin',
      id: 4,
      icon: linkedinIcon,
      url: 'https://t.ly/bO_L',
    },
  ],
};

export const sidebarData: Item[] = [
  {
    id: 15,
    className: 'skills',
    subTitle: 'Skills',
    content: [
      'React, Hook',
      'Redux',
      'HTML3 & CSS5',
      'Typescript',
      'Javascript',
      'PHP',
      'Git',
      'Wordpress',
    ],
  },
  {
    id: 16,
    className: 'lang',
    subTitle: 'Languages',
    content: ['English (Good working knowledge)'],
  },
  {
    id: 17,
    className: 'project',
    subTitle: 'Projects',
    content: ['Shoes Store: https://t.ly/loUk'],
  },
];

export const mainData: MainItem[] = [
  {
    id: 1,
    title: 'Profile',
    className: 'profile',
    child: [
      {
        id: 2,
        className: 'profile-summary',
        subTitle: '',
        content: [''],
      },
    ],
  },
  {
    id: 3,
    className: 'employment',
    title: 'Employment History',
    child: [
      {
        id: 4,
        className: 'employment-item',
        subTitle: 'Mechanical Engineer',
        content: ['March 2016- September 2020'],
      },
      {
        id: 5,
        className: 'employment-item',
        subTitle: 'Web Management at Icado-Thegioidotap',
        content: ['May 2021- March 2022'],
      },
      {
        id: 6,
        className: 'employment-item',
        subTitle: 'Frontend Wordpress at BDS Hong Ha',
        content: ['May 2022- November 2022'],
      },
    ],
  },
  {
    id: 7,
    className: 'education',
    title: 'Education',
    child: [
      {
        id: 8,
        className: 'education-item',
        subTitle: 'Mechanical Engineer at University of Technology and Education Ho Chi Minh',
        content: ['2012- March 2016'],
      },
    ],
  },
  {
    id: 9,
    className: 'courses',
    title: 'Courses',
    child: [
      {
        id: 10,
        className: 'courses-item',
        subTitle: 'Web Thay Loc',
        content: ['January 2021 - June 2021'],
      },
      {
        id: 11,
        className: 'courses-item',
        subTitle: 'Intellectual Assets Management',
        content: ['August 2022 - November 2022'],
      },
      {
        id: 12,
        className: 'courses-item',
        subTitle: 'Some tutorials FE on Youtube',
        content: ['November 2022 - Now'],
      },
    ],
  },
  // {
  //   id:13,
  //   className:'project',
  //   title:'Project',
  //   description:'',
  // }
];
