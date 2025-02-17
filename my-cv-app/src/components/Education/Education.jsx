import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Education.module.css';

const Education = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
      <div className={styles.inputField}>
        <label htmlFor="school">School Name:</label>
        <input
          type="text"
          id="school"
          {...register('school', { required: 'School name is required' })}
        />
        {errors.school && <p className={styles.error}>{errors.school.message}</p>}
      </div>
      <div className={styles.inputField}>
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          {...register('degree', { required: 'Degree is required' })}
        />
        {errors.degree && <p className={styles.error}>{errors.degree.message}</p>}
      </div>
      <div className={styles.inputField}>
        <label htmlFor="from">From:</label>
        <input
          type="date"
          id="from"
          {...register('from', { required: 'Start date is required' })}
        />
        {errors.from && <p className={styles.error}>{errors.from.message}</p>}
      </div>
      <div className={styles.inputField}>
        <label htmlFor="to">To:</label>
        <input
          type="date"
          id="to"
          {...register('to', { required: 'End date is required' })}
        />
        {errors.to && <p className={styles.error}>{errors.to.message}</p>}
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default Education;
