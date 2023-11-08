'use client'

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [tab, setTab] = useState('overview');
  const navigate = (data: string) => {
    setTab(data);
  };
  return (
    <section>
      <Sidebar tab={navigate} />
      <nav></nav>
      {children}
    </section>
  );
}
