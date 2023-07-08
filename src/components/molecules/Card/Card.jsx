import "./Card.css";

export default function Card({ title, value, ...props }) {
  return (
    <div className="card" {...props}>
      <h3>{title}</h3>
      {value && <p>{value}</p>}
    </div>
  );
}
