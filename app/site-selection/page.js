import styles from "./page.module.css";
import LogoutButton from "../components/logout-button";
import LotusBloomHeader from "../components/lotusbloomheader";
export default function SiteSelection() {
  return (
    <div>
      <LotusBloomHeader />
      <h1>Site Selection</h1>
      <LogoutButton />
    </div>
  );
}
