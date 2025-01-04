export default function Page() {
  return (
    <div className="container mt-3">
      <ul>
        <li>
          <a href="http://localhost:3000/products-1-client-only-with-state">
            (1) clip 9 demo - client only with state
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-2-client-only-with-suspense">
            (2) clip 9 demo - client only with suspense
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-3-client-only-with-suspense-add-useeffect">
            (3) clip 9 demo - client only with suspense add useEffect
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-4-server-component-only">
            (4) clip 10 demo - react server component only
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-5-server-component-to-client-component">
            (5) clip 10 demo - react server component to react client component
          </a>
        </li>
        <li>
          <a href="http://localhost:3000/products-6-server-component-pass-promise-to-client-component">
            (6) clip 10 demo - react server component pass promise to react
            client component
          </a>
        </li>
        {/*<li>*/}
        {/*  <a href="http://localhost:3000/products-7-client-component-call-server-function">*/}
        {/*    (7) clip 10 demo - react client component call server function*/}
        {/*  </a>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
}
