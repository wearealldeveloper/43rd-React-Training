import React, { useContext } from "react";
import { MyContext, MyContextType } from "../../Contexts";

function Home() {
  const { data } = useContext(MyContext) as MyContextType;

  return (
    <div className="bg-slate-200 p-7">
      <h1>Context API Example</h1>
      Home with Context API data : {data}
    </div>
  );
}

export default Home;