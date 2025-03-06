import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import styles from "./App.module.css"; // Import CSS module

function App() {
  const [generalInfo, setGeneralInfo] = useState({ name: "", email: "", phone: "" });
  const [education, setEducation] = useState({ school: "", years: "", grades: "" });
  const [experience, setExperience] = useState({ company: "", years: "", bio: "" });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!generalInfo.name || !generalInfo.email || !generalInfo.phone ||
        !education.school || !education.years || !education.grades ||
        !experience.company || !experience.years || !experience.bio) {
      setError("All fields are required!");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  const handleReset = () => {
    setGeneralInfo({ name: "", email: "", phone: "" });
    setEducation({ school: "", years: "", grades: "" });
    setExperience({ company: "", years: "", bio: "" });
    setSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <h1>CV Generator</h1>

      {error && <p className={styles.error}>{error}</p>}

      {!submitted ? (
        <>
          <GeneralInfo info={generalInfo} setInfo={setGeneralInfo} />
          <Education education={education} setEducation={setEducation} />
          <Experience experience={experience} setExperience={setExperience} />
          <button onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <div className={styles["cv-preview"]}>
          <h2>Final CV</h2>
          <p><strong>Name:</strong> {generalInfo.name}</p>
          <p><strong>Email:</strong> {generalInfo.email}</p>
          <p><strong>Phone:</strong> {generalInfo.phone}</p>
          <h3>Education</h3>
          <p><strong>School/University:</strong> {education.school}</p>
          <p><strong>Years:</strong> {education.years}</p>
          <p><strong>Grades:</strong> {education.grades}</p>
          <h3>Experience</h3>
          <p><strong>Company:</strong> {experience.company}</p>
          <p><strong>Years:</strong> {experience.years}</p>
          <p><strong>Summary:</strong> {experience.bio}</p>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default App;
