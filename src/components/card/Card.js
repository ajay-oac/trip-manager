import classes from "./Card.module.css";

const Card = ({ cardColor, children }) => {
  const cardStyle = {
    backgroundColor: cardColor || "white",
  };

  return (
    <div style={cardStyle} className={classes.card}>
      {children}
    </div>
  );
};

export default Card;
