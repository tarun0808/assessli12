import './App.css';

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycby076fhBZT4Ys8tLVn8KYnKGJBlYg_H6DM_t9hPEixgj3kvzqXrrf4s-FkqbIT-wDatSA/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <h2></h2>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Phone Number" name="Phone" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />

          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}

