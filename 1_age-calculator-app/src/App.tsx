// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <form action="submit" className="dob">
          <fieldset>
            <label htmlFor="dobDay">Day</label>
            <input type="number" placeholder="DD" id="dobDay"></input>
          </fieldset>

          <fieldset>
            <label htmlFor="dobMonth">Month</label>
            <input type="number" placeholder="MM" id="dobMonth"></input>
          </fieldset>

          <fieldset>
            <label htmlFor="dobYear">Year</label>
            <input type="number" placeholder="YYYY" id="dobYear"></input>
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
