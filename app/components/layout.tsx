import Header from "./header";
import Footer from "./footer";
// import MenuDefault from "./menu";
import MegaMenu from "./megaMenu";

const Layout = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div>
        <div className="border-b shadow-md">
            <Header />
            <MegaMenu/>
        </div>
        <div>{children}</div>
        <Footer />
    </div>
  );
};

export default Layout;