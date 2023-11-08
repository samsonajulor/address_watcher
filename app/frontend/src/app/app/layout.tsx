'use client'

import { useState } from 'react';
import Sidebar from './components/Sidebar';

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  
  return (
    <section>
      <Sidebar />
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
         {children}
      </div>
     
    </section>
  );
}
