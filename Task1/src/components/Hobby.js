export default function Hobby({ title, description }) {
  //  hobby: { title: "Games", description: "Info hobby" },
  console.log(title);
  return (
    <div className="user-hobby">
      <h6 style={{ backgroundColor: "lightcoral", textAlign: "center" }}>
        {title}
      </h6>
      <p style={{ backgroundColor: "lightcyan", color: "blue" }}>
        {description}
      </p>
    </div>
  );
}
