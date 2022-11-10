import LocationStyles from "./styles/Location.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Location({ location }) {
  return (
    <div className={LocationStyles.container}>
      <FontAwesomeIcon icon={faTrashCan} />
      <p className={LocationStyles.location}>{location}</p>
    </div>
  );
}

export default Location;
