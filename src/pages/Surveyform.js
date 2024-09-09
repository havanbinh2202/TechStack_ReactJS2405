import React, { useState } from "react";
import "./../assets/css/SurveyForm.css";

const SurveyFormHorizontal = () => {
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setResponses({ ...responses, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Survey Responses:", responses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <table className="survey-table">
        <thead>
          <tr>
            <th></th>
            <th>Very Bad</th>
            <th>Bad</th>
            <th>Neutral</th>
            <th>Good</th>
            <th>Excellent</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((i) => (
            <tr key={i}>
              <td>Your question goes here. Lorem ipsum dolor sit amet.</td>
              {["Very Bad", "Bad", "Neutral", "Good", "Excellent"].map((option) => (
                <td key={option}>
                  <input
                    type="radio"
                    name={`question${i}`}
                    value={option}
                    checked={responses[`question${i}`] === option}
                    onChange={handleInputChange}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SurveyFormHorizontal;
