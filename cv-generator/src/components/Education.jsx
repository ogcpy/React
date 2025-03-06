import { useState } from "react";

function Education() {
    const [educationList, setEducationList] = useState([]);

    const handleChange = (index, event) => {
        const updatedList = [...educationList];
        updatedList[index][event.target.name] = event.target.value;
        setEducationList(updatedList);
    };

    const addEducation = () => {
        setEducationList([...educationList, { school: "", years: "", grades: "" }]);
    };

    const removeEducation = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
    };

    return (
        <div>
            <h2>Education</h2>
            {educationList.map((education, index) => (
                <div key={index} className="education-entry">
                    <input type="text" name="school" placeholder="University Name" value={education.school} onChange={(e) => handleChange(index, e)} />
                    <input type="text" name="years" placeholder="Years Attended" value={education.years} onChange={(e) => handleChange(index, e)} />
                    <input type="text" name="grades" placeholder="Grades" value={education.grades} onChange={(e) => handleChange(index, e)} />
                    <button onClick={() => removeEducation(index)} className="remove-btn">Remove</button>
                </div>
            ))}
            <button onClick={addEducation} className="add-btn">Add More</button>

            <h3>Preview:</h3>
            {educationList.map((education, index) => (
                <div key={index} className="cv-preview">
                    <p><strong>School:</strong> {education.school}</p>
                    <p><strong>Years:</strong> {education.years}</p>
                    <p><strong>Grades:</strong> {education.grades}</p>
                </div>
            ))}
        </div>
    );
}

export default Education;
