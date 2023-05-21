function AlertComponent(props) {
    return <div className={props.className} role={props.role}>{props.text}</div>
}

export default AlertComponent;