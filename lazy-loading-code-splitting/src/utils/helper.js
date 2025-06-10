import _ from "lodash";

export const getItems = () => {
  const items = _.range(1, 10000).map((i) => <div key={i}>Item {i}</div>);
  return items;
};
