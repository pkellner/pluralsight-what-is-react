import MainPage from "./main-page";
import {Suspense} from "react";

export default function Page() {


  return (
    <div>
      <h1>PAGE HEADER page.tsx</h1>
      <div>
        <Suspense fallback={<h1>Loadingx</h1>}>
          <MainPage />
        </Suspense>
      </div>
    </div>
  );
}
