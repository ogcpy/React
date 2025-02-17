import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './Experience.module.css';

const Experience = ({ onSubmit }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [experiences, setExperiences] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // Track index of item being edited

  const submitHandler = (data) => {
    if (editingIndex !== null) {
      // Update existing experience
      const updatedExperiences = [...experiences];
      updatedExperiences[editingIndex] = data;
      setExperiences(updatedExperiences);
      setEditingIndex(null);
    } else {
      // Add new experience
      setExperiences([...experiences, data]);
    }
    reset();
  };

  const handleEdit = (index) => {
    const experience = experiences[index];
    setValue("company", experience.company);
    setValue("position", experience.position);
    setValue("responsibilities", experience.responsibilities);
    setValue("startDate", experience.startDate);
    setValue("endDate", experience.endDate);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.experienceSection}>
      <h2>Practical Experience</h2>
      
      <form onSubmit={handleSubmit(submitHandler)} className={styles.experienceForm}>
        <label>Company Name:</label>
        <input {...register("company", { required: "Company name is required" })} />
        {errors.company && <p className={styles.error}>{errors.company.message}</p>}

        <label>Position Title:</label>
        <input {...register("position", { required: "Position title is required" })} />
        {errors.position && <p className={styles.error}>{errors.position.message}</p>}

        <label>Main Responsibilities:</label>
        <textarea {...register("responsibilities", { required: "Please enter responsibilities" })} />
        {errors.responsibilities && <p className={styles.error}>{errors.responsibilities.message}</p>}

        <label>Start Date:</label>
        <input type="date" {...register("startDate", { required: "Start date is required" })} />
        {errors.startDate && <p className={styles.error}>{errors.startDate.message}</p>}

        <label>End Date:</label>
        <input type="date" {...register("endDate")} />

        <button type="submit">{editingIndex !== null ? "Update Experience" : "Add Experience"}</button>
      </form>

      <div className={styles.experienceList}>
        <h3>Experience List</h3>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <p><strong>Company:</strong> {exp.company}</p>
            <p><strong>Position:</strong> {exp.position}</p>
            <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
            <p><strong>Duration:</strong> {exp.startDate} - {exp.endDate || "Present"}</p>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
