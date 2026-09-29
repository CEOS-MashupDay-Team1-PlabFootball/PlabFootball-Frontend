import { Outlet } from 'react-router-dom';

function MobileLayout() {
  return (
    <main className="mx-auto min-h-dvh w-[375px] bg-white">
      <Outlet />
    </main>
  );
}

export default MobileLayout;
