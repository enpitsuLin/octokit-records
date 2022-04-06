import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="mx-10 md:(max-w-150 mx-auto)">
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
