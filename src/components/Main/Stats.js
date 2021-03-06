import { Typography } from "@material-ui/core";
import React from "react";
import StatsList from "./StatsList";

export default function Stats({ stats }) {
  console.log(stats);
  const sorted = stats.sort(compare).reverse();
  const renderedList = sorted.slice(0, 5).map((stat) => {
    return <StatsList stat={stat} />;
  });

  return (
    <div className="media-list">
      <Typography variant="h2">Top Deaths:</Typography>
      {renderedList}
    </div>
  );
}

function compare(a, b) {
  if (a.TotalDeaths < b.TotalDeaths) {
    return -1;
  }
  if (a.TotalDeaths > b.TotalDeaths) {
    return 1;
  }
  return 0;
}
