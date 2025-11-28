import { createIcon } from './create-icon';

// Common icons
export const CheckIcon = createIcon('CheckIcon', <path d="M20 6L9 17l-5-5" />);
export const XIcon = createIcon('XIcon', <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>);
export const PlusIcon = createIcon('PlusIcon', <><path d="M12 5v14" /><path d="M5 12h14" /></>);
export const MinusIcon = createIcon('MinusIcon', <path d="M5 12h14" />);

// Chevrons
export const ChevronDownIcon = createIcon('ChevronDownIcon', <path d="m6 9 6 6 6-6" />);
export const ChevronUpIcon = createIcon('ChevronUpIcon', <path d="m18 15-6-6-6 6" />);
export const ChevronLeftIcon = createIcon('ChevronLeftIcon', <path d="m15 18-6-6 6-6" />);
export const ChevronRightIcon = createIcon('ChevronRightIcon', <path d="m9 18 6-6-6-6" />);

// Arrows
export const ArrowUpIcon = createIcon('ArrowUpIcon', <><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>);
export const ArrowDownIcon = createIcon('ArrowDownIcon', <><path d="M12 5v14" /><path d="m19 12-7 7-7-7" /></>);
export const ArrowLeftIcon = createIcon('ArrowLeftIcon', <><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></>);
export const ArrowRightIcon = createIcon('ArrowRightIcon', <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>);

// UI icons
export const MenuIcon = createIcon('MenuIcon', <><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>);
export const SearchIcon = createIcon('SearchIcon', <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>);
export const SettingsIcon = createIcon('SettingsIcon', (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>
));
export const UserIcon = createIcon('UserIcon', <><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>);
export const HomeIcon = createIcon('HomeIcon', <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>);

// Status icons
export const AlertCircleIcon = createIcon('AlertCircleIcon', <><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></>);
export const InfoIcon = createIcon('InfoIcon', <><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></>);
export const AlertTriangleIcon = createIcon('AlertTriangleIcon', <><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></>);
export const CheckCircleIcon = createIcon('CheckCircleIcon', <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>);
