import "./row.css";
function Row(props) {
    return (
        <div className="row">
            <h2>{props.title}</h2>
        </div>
    );
}

export default Row;
