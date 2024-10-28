import ThirdLevel from "./ThirdLevel";

function SecondLevel({ message }) {
  return (
    <div className="second">
      <div className="title">Third Level</div>
      <ThirdLevel message={message} />
    </div>
  );
}

export default SecondLevel;
