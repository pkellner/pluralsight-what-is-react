
import React from "https://esm.sh/react@19.0.0-beta-04b058868c-20240508/?dev"
import ReactDOMClient from "https://esm.sh/react-dom@19.0.0-beta-04b058868c-20240508/client/?dev"


const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const RootComponent = () => {

  return (
    <div>Hello World</div>
  );
}

root.render(<RootComponent />);

