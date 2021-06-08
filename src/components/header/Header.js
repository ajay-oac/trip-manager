import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-container"]}>
        <i className="fa fa-bars"></i>
        <div className={classes.logo}>Watsoo Express</div>
      </div>
      <div>
        <button className={classes["logout-button"]}>
          <i className="fa fa-power-off"></i>Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
