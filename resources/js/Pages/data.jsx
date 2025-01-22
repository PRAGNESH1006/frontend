import {
  Activity,
  ArchiveX,
  File,
  MessagesSquare,
  Search,
  Send,
  ShoppingCart,
  Tag,
  Users2
} from 'lucide-react';
import { FaFileInvoice, FaChartBar } from 'react-icons/fa';


export const projects = [
  {
    project: "New Work Les DO",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 100,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Completed",
  },
  {
    project: "You can Change the text and all",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 55,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Completed",
  },
  {
    project: "Landing Page Design",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 12,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Ongoing",
  },
  {
    project: "You can Change the text and all",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 55,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Completed",
  },
  {
    project: "Landing Page Design",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 12,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Ongoing",
  },
  {
    project: "You can Change the text and all",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 55,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Completed",
  },
  {
    project: "Landing Page Design",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 12,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Ongoing",
  },
  {
    project: "Landing Page Design",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 24,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Negotiation",
  },
  {
    project: "Landing Page Design",
    projectNo: "232323",
    date: "12/12/2023",
    progress: 12,
    amount: 54545.888,
    serviceType: "Navy",
    status: "Ongoing",
  },
];

export const cardData = [
  {
    icon: {
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-blue-100',
    },
    value: '24',
    title: 'Completed Project',
    change: '1.3',
    changeType: 'increase',
  },
  {
    icon: {
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-orange-100',
    },
    value: '07',
    title: 'Pending Project',
    change: '1.3',
    changeType: 'd',
  },
  {
    icon: {
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'bg-green-100',
    },
    value: '$12,000',
    title: 'Total Income',
    change: '1.3',
    changeType: 'increase',
  },
  {
    icon: {
      component: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      bgColor: 'bg-yellow-100',
    },
    value: '$12,000',
    title: 'Pending',
    change: '1.3',
    changeType: 'increase',
  },
];

export const quarterData = [
  { quarter: "FY2022 Q1", value: 4101 },
  { quarter: "FY2022 Q2", value: 423 },
  { quarter: "FY2022 Q3", value: 405 },
  { quarter: "FY2022 Q2", value: 90 },
];

export const summaryItems = [
  { label: "Project", value: 10, icon: <File className="h-4 w-4" />, colour: '#FFC7001A', bg: '#FEF0C3' },
  { label: "Task", value: 10, icon: <Activity className="h-4 w-4" />, colour: '#1BFF4D1A', bg: '#BFFFCD' },
  { label: "Client", value: 10, icon: <Users2 className="h-4 w-4" />, colour: '#3360FF1A', bg: '#DFE6FE' },
  { label: "Revenue", value: 10, icon: <ShoppingCart className="h-4 w-4" />, colour: '#FF1B881A', bg: '#FFDDED' },
  { label: "Income", value: 10, icon: <Tag className="h-4 w-4" />, colour: '#E6FFFB', bg: '#B1FFF3' },
  { label: "Expense", value: 10, icon: <ArchiveX className="h-4 w-4" />, colour: '#1B84FF1A', bg: '#D0E7FF' },
  { label: "Leads", value: 10, icon: <MessagesSquare className="h-4 w-4" />, colour: '#D9D9FF', bg: '#C8C8FF' },
  { label: "Project", value: 10, icon: <File className="h-4 w-4" />, colour: '#FFC7001A', bg: '#FEF0C3' },
  { label: "Task", value: 10, icon: <Activity className="h-4 w-4" />, colour: '#1BFF4D1A', bg: '#BFFFCD' },
  { label: "Client", value: 10, icon: <Users2 className="h-4 w-4" />, colour: '#3360FF1A', bg: '#DFE6FE' },
  { label: "Revenue", value: 10, icon: <ShoppingCart className="h-4 w-4" />, colour: '#FF1B881A', bg: '#FFDDED' },
  { label: "Income", value: 10, icon: <Tag className="h-4 w-4" />, colour: '#E6FFFB', bg: '#B1FFF3' },
  { label: "Expense", value: 10, icon: <ArchiveX className="h-4 w-4" />, colour: '#1B84FF1A', bg: '#D0E7FF' },
  { label: "Leads", value: 10, icon: <MessagesSquare className="h-4 w-4" />, colour: '#D9D9FF', bg: '#C8C8FF' },
];

export const navigationItems = [
  { label: "Dashboard", icon: <Activity className="h-4 w-4" />, href: '/dashboard' },
  { label: "Application", icon: <Search className="h-4 w-4" /> },

  {
    label: "Invoices", icon: <Send className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Reports", icon: <File className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Configuration", icon: <MessagesSquare className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Contact", icon: <Users2 className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Expense", icon: <ArchiveX className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Income", icon: <ShoppingCart className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "User", icon: <Users2 className="h-4 w-4" />,
    subItems: [
      { name: "Profile", href: "/profile" },
      { name: "Yearly", href: "#" },
    ],
  },
  {
    label: "Settings", icon: <Activity className="h-4 w-4" />,
    subItems: [
      { name: "Monthly", href: "#" },
      { name: "Yearly", href: "#" },
    ],
  },
];

export const monthlyData = [
  { month: "Jan", income: 65000, profit: 40000 },
  { month: "Feb", income: 63000, profit: 45000 },
  { month: "Mar", income: 68000, profit: 50000 },
  { month: "Apr", income: 70000, profit: 55000 },
  { month: "May", income: 77000, profit: 60000 },
  { month: "Jun", income: 69000, profit: 65000 },
  { month: "Jul", income: 65000, profit: 60000 },
  { month: "Aug", income: 71000, profit: 55000 },
  { month: "Sep", income: 73000, profit: 50000 },
  { month: "Oct", income: 70000, profit: 45000 },
  { month: "Nov", income: 68000, profit: 35000 },
  { month: "Dec", income: 67000, profit: 30000 },
];





