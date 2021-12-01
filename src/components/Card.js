
const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.img} alt={props.name} />
        <h3>{props.name}</h3>
        <button>{props.btn}</button>
      </div>
    </>
  );
};
export default Card;