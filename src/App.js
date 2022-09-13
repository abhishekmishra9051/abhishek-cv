
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./hoc/layout";


import Routes from "./routes";


export default function App() {
  return (
    <Layout>
      <Routes />
      <ToastContainer />
    </Layout>
  );
}
