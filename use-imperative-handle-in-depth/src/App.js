import DependParent from "./DependParent";
import DirectParent from "./DirectParent";
import EffectParent from "./EffectParent";
import ForwardRefParent from "./ForwardRefParent";
import ImperativeParent from "./ImperativeParent";

function App() {
  return (
    <div className="container">
      {/* <ForwardRefParent /> */}
      {/* <DirectParent /> */}
      {/* <EffectParent /> */}
      {/* <ImperativeParent /> */}
      <DependParent />
    </div>
  );
}

export default App;
