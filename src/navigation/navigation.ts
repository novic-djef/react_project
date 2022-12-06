import React, { ComponentType } from 'react';
import {
  ChartBarIcon,
  UserGroupIcon,
  BanknotesIcon,
  DevicePhoneMobileIcon,
  Cog8ToothIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

export type MenuItemProps = {
  name: string;
  href: string;
  /* eslint-disable no-unused-vars */
  icon(props: React.ComponentProps<'svg'>): JSX.Element;
  children?: MenuItemProps[];
  extra?: ComponentType;
};

const navigation: MenuItemProps[] = [
  {
    name: 'Résumé',
    href: '/',
    icon: ChartBarIcon,
  },
  {
    name: 'Tickets de caisse',
    href: '/tickets',
    icon: BanknotesIcon,
  },
  {
    name: 'Comptes marchants',
    href: '/marchants',
    icon: UserGroupIcon,
  },
  {
    name: 'Terminaux mobiles',
    href: '/pos',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Opérateurs mobiles',
    href: '/operator',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Parramètres',
    href: '/settings',
    icon: Cog8ToothIcon,
  },
  
];

export default navigation;
