'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {children}
      <Next13ProgressBar
        height={'4px'}
        color="#E508C1"
        options={{ showSpinner: true }}
        showOnShallow
      />
    </ThemeProvider>
  );
};

export default Providers;