import { useState } from "react";

function Experience() {
    const [experienceList, setExperienceList] = useState([]);

    const handleChange = (index, event) => {
        const updatedList = [...experienceList];
        updatedList[index][event.target.name] = event.target.value;
        setExperienceList(updatedList);
    };

    const addExperience = () => {
        setExperienceList([...experienceList, { company: "", years: "", bio: "" }]);
    };

    const removeExperience = (index) => {
        const updatedList = experienceList.filter((_, i) => i !== index);
        setExperienceList(updatedList);
    };

    return (
        <div>
            <h2>Experience</h2>
            {experienceList.map((experience, index) => (
                <div key={index} className="experience-entry">
                    <input type="text" name="company" placeholder="Company Name" value={experience.company} onChange={(e) => handleChange(index, e)} />
                    <input type="text" name="years" placeholder="Years Worked" value={experience.years} onChange={(e) => handleChange(index, e)} />
                    <input type="text" name="bio" placeholder="Job Description" value={experience.bio} onChange={(e) => handleChange(index, e)} />
                    <button onClick={() => removeExperience(index)} className="remove-btn">Remove</button>
                </div>
            ))}
            <button onClick={addExperience} className="add-btn">Add More</button>

            <h3>Preview:</h3>
            {experienceList.map((experience, index) => (
                <div key={index} className="cv-preview">
                    <p><strong>Company:</strong> {experience.company}</p>
                    <p><strong>Years:</strong> {experience.years}</p>
                    <p><strong>Summary:</strong> {experience.bio}</p>
                </div>
            ))}
        </div>
    );
}

export default Experience;
