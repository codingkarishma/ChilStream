import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full">
        {showSidebar && <Sidebar />}

        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar />

          <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};
export default Layout;
