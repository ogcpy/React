import React, { useState } from 'react';
import GeneralInfo from '../GeneralInfo/GeneralInfo';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import styles from './CVForm.module.css';

const CVForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className={styles.cvForm}>
      <h1>My CV</h1>
      {!submitted ? (
        <>
          <GeneralInfo />
          <Education />
          <Experience />
          <button onClick={handleSubmit} className={styles.submitBtn}>Submit CV</button>
        </>
      ) : (
        <>
          <h2>CV Preview</h2>
          <GeneralInfo preview={true} />
          <Education preview={true} />
          <Experience preview={true} />
          <button onClick={handleEdit} className={styles.editBtn}>Edit CV</button>
        </>
      )}
    </div>
  );
};

export default CVForm;
