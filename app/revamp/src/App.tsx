import {Outlet} from "react-router-dom";

function App() {
  return (
    <div>
      <>SideBar</>
      <div className="lg:ml-[250px] p-8">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
