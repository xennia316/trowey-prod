import React from "react";
import RouteStyles from "./styles/Routes.module.css";
import Dailyroutes from "./Dailyroutes";
function Routes() {
  return (
    <main className={RouteStyles.container}>
      <h2 className={RouteStyles.heading}>Routes</h2>
      <p className={RouteStyles.subheading}>This week</p>
      <div className={RouteStyles.dailyRouteSection}>
        <Dailyroutes day="Monday" />
        <Dailyroutes day="Tuesday" />
        <Dailyroutes day="Wednesday" />
        <Dailyroutes day="Tursday" />
        <Dailyroutes day="Friday" />
        <Dailyroutes day="Saturday" />
        <Dailyroutes day="Sunday" />
          </div>
          <p>Want to collect dirt for a fee?</p>
    </main>
  );
}

export default Routes;
