const Children1 = (props) =>{
    return (
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          <h1 style={{ textAlign: "center" }}>{props.title}</h1>
          <button onClick={props.handleCount}>add</button>
        </div>
      );
}
export default Children1