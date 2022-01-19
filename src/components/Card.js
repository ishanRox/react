import './Card.css';

function Card(props) {
    const classes = props.classes;

    return <div className={classes}>{props.children}</div>
}