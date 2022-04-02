import { Link } from "react-router-dom";

function Usuario(props) {
  const { displayName, email, photoURL, uid } = props.user;
  return (
    <Link to={`usuario/${uid}`} key={uid}>
      <div className="usuario">
        <img src={photoURL} />
        <div className="info">
          <h3>{displayName}</h3>
          <p>{email}</p>
        </div>
      </div>
    </Link>
  );
}

export default Usuario;
