import React from "react";
import Graphin, { Utils } from "@cylynx/graphin";

const data = Utils.mock(12).circle().graphin();

function App() {
  return <Graphin data={data} />;
}

export default App;
