import DailyRouteStyles from './styles/Dailyroutes.module.css'

import Location from './Location';
function Dailyroutes({day}) {
  return (
    <div>
      <h4 className={DailyRouteStyles.dayHeading}>{day}</h4>
      <Location location="Tarred Malingo" />
      <Location location="Untarred Malingo" />
      <Location location="Dirty South" />
    </div>
  );
}

export default Dailyroutes