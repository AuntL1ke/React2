export default function NativeCity(props) {
    return (
      <div className="native-city">
        <h3>Native City</h3>
        <p>City: {props.city}</p>
        <p>Country: {props.country}</p>
        <p>Year: {props.year}</p>
        <img
        width="200"
        src="https://images.squarespace-cdn.com/content/v1/61c4da8eb1b30a201b9669f2/1696691175374-MJY4VWB1KS8NU3DE3JK1/Sounds-of-Nature.jpg"
      />
      </div>
    );
  }
  