function GeneralInfo({ info, setInfo }) {
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>General Information</h2>
      <label>Name:</label>
      <input type="text" name="name" placeholder="Full Name" value={info.name} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} required />

      <label>Phone:</label>
      <input type="tel" name="phone" placeholder="Phone Number" value={info.phone} onChange={handleChange} required />
    </div>
  );
}

export default GeneralInfo;
