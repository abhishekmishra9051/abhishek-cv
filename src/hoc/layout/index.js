import "./style.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Sidebar from "../../components/sidebar";
import { BrowserRouter as Router } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <Router>
      <div className="layout-wrapper">
        <Header />

        <section className="container">
          <div className="row pt-4">
            <div className="col-9 pe-5">{children}</div>
            <div className="col-3 px-3">
              <Sidebar />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Router>
  );
}