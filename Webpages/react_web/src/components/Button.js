import PropTypes from "prop-types";
import styles from "../css/Button.module.css";

function Button(props){
    return (
    <button className={styles.btn} onClick={props.onClick}>{props.text}</button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button;