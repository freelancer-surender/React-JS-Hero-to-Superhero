import ErrorBoundary from "./ErrorBoundary";
import Need from "./Need";
import Fetch from "./Fetch";

function App() {
  return (
    <ErrorBoundary>
      {/* <Need /> */}
      <Fetch />
    </ErrorBoundary>
  );
  // try {
  //   return <Need />;
  // } catch (error) {
  //   console.log("An error occured: ", error);
  //   return <div>An error occured</div>;
  // }
}

export default App;
