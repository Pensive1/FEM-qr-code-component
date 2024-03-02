// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <form action="submit" className="dob">
          <fieldset>
            <input type="number" placeholder="DD" id="dobDay"></input>
            <label htmlFor="dobDay">Day</label>
          </fieldset>

          <fieldset>
            <input type="number" placeholder="MM" id="dobMonth"></input>
            <label htmlFor="dobMonth">Month</label>
          </fieldset>

          <fieldset>
            <input type="number" placeholder="YYYY" id="dobYear"></input>
            <label htmlFor="dobYear">Year</label>
          </fieldset>
          <button type="submit"></button>
        </form>

        <section className="age">
          <p className="age__data">
            <span className="age__year">--</span> years
          </p>
          <p className="age__data">
            <span className="age__months">--</span> months
          </p>
          <p className="age__data">
            <span className="age__days">--</span> days
          </p>
        </section>
      </main>
    </>
  );
}

export default App;
