'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment } from 'react/jsx-runtime';

const Tabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const current = searchParams.get('tab') ?? 'projects';

  const changeTab = (value: string) => {
    if (value === current) return;  // prevents re-push loop
    router.push(`/work?tab=${value}`);
  };

  const commonStyles = `text-sm rounded-t-xl lg:text-lg text-gray-300 px-3 py-1 w-full text-center cursor-pointer`;
  const inactiveStyles = `border-b border-gray-500/50 bg-gray-800 hover:bg-gray-700`;
  const activeStyles = `bg-primary hover:bg-primary/80`;
  const style = (active: boolean) => {
    return commonStyles + ' ' + (active ? activeStyles : inactiveStyles);
  };

  return (
    <Fragment>
      <p onClick={() => changeTab('projects')} className={style(current === 'projects')}>
        Projects
      </p>
      <p onClick={() => changeTab('shots')} className={style(current === 'shots')}>
        ...
      </p>
    </Fragment>
  );
};

export default Tabs;
