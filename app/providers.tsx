'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { ThemeProvider } from 'next-themes';
import {HeroUIProvider} from "@heroui/system";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <HeroUIProvider>
        {children}
        <Next13ProgressBar
          height={'4px'}
          color="#E508C1"
          options={{ showSpinner: true }}
          showOnShallow
        />
      </HeroUIProvider>
    </ThemeProvider>
  );
};

export default Providers;