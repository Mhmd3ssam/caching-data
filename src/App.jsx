import React from "react";
import { createRoot } from "react-dom/client";

import SearchPosts from "./SearchPosts";

function App() {
  return (
    <div>
      <SearchPosts />
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
