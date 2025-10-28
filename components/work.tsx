'use client'

import { useSearchParams } from 'next/navigation';
import { Projects } from './projects';
import { Shots } from './shots';

export default function WorkSection() {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab') ?? 'projects';

  if (tab === 'projects') return <Projects />;
  if (tab === 'shots') return <Shots />;
  return <Projects />;
}
