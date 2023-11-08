import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Overview from "../components/Overview";
import Activity from "../components/Activity";

export default function Dashboard() {
  const [tab, setTab] = useState("overview");
  const navigate = (data) => {
    setTab(data);
  }
  return (
    <div>
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar tab={navigate} />
        {tab == "overview" && <Overview />}
        {tab == "activity" && <Activity />}
      </div>
    </div>
  );
}
