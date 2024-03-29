import Footer from "./Footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
