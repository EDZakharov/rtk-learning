import { Outlet } from 'react-router';
import { Header } from '../widgets/Header/Header';
import { SideBar } from '../widgets/SideBar/SideBar';
export default function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
