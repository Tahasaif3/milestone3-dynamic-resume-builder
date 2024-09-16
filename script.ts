document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('resumeForm') as HTMLFormElement;
    const addEducationBtn = document.getElementById('addEducation') as HTMLButtonElement;
    const addExperienceBtn = document.getElementById('addExperience') as HTMLButtonElement;
    const addSkillBtn = document.getElementById('addSkill') as HTMLButtonElement;
    const addHobbyBtn = document.getElementById('addHobby') as HTMLButtonElement;

    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', function() {
            const educationEntries = document.getElementById('educationEntries');
            if (educationEntries) {
                const newEntry = document.createElement('div');
                newEntry.className = 'education-entry';
                newEntry.innerHTML = `
                    <input type="text" name="qualification[]" placeholder="Qualification" required>
                    <input type="number" name="year[]" placeholder="Year of Passing" required>
                    <input type="text" name="grade[]" placeholder="Grade/Percentage" required>
                    <input type="text" name="school[]" placeholder="School/Institution Name" required>
                    <button type="button" class="remove-entry">Remove</button>
                `;
                educationEntries.appendChild(newEntry);

                const removeButton = newEntry.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function() {
                        educationEntries.removeChild(newEntry);
                    });
                }
            }
        });
    }

    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', function() {
            const experienceEntries = document.getElementById('experienceEntries');
            if (experienceEntries) {
                const newEntry = document.createElement('div');
                newEntry.className = 'experience-entry';
                newEntry.innerHTML = `
                    <input type="text" name="company[]" placeholder="Company Name" required>
                    <input type="text" name="role[]" placeholder="Your Role" required>
                    <input type="text" name="startDate[]" placeholder="Start Date (MM/YYYY)" required>
                    <input type="text" name="endDate[]" placeholder="End Date (MM/YYYY or Present)" required>
                    <textarea name="responsibilities[]" placeholder="Key Responsibilities" rows="3" required></textarea>
                    <button type="button" class="remove-entry">Remove</button>
                `;
                experienceEntries.appendChild(newEntry);

                const removeButton = newEntry.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function() {
                        experienceEntries.removeChild(newEntry);
                    });
                }
            }
        });
    }

    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', function() {
            const skillsEntries = document.getElementById('skillsEntries');
            if (skillsEntries) {
                const newSkill = document.createElement('div');
                newSkill.className = 'skill-entry';
                newSkill.innerHTML = `
                    <input type="text" name="skills[]" placeholder="Enter a skill" required>
                    <button type="button" class="remove-entry">Remove</button>
                `;
                skillsEntries.appendChild(newSkill);

                const removeButton = newSkill.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function() {
                        skillsEntries.removeChild(newSkill);
                    });
                }
            }
        });
    }

    if (addHobbyBtn) {
        addHobbyBtn.addEventListener('click', function() {
            const hobbiesEntries = document.getElementById('hobbiesEntries');
            if (hobbiesEntries) {
                const newHobby = document.createElement('div');
                newHobby.className = 'hobby-entry';
                newHobby.innerHTML = `
                    <input type="text" name="hobbies[]" placeholder="Enter a hobby" required>
                    <button type="button" class="remove-entry">Remove</button>
                `;
                hobbiesEntries.appendChild(newHobby);

                const removeButton = newHobby.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function() {
                        hobbiesEntries.removeChild(newHobby);
                    });
                }
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
            const nameElement = document.getElementById('name') as HTMLInputElement;
            const emailElement = document.getElementById('email') as HTMLInputElement;
            const phoneElement = document.getElementById('phone') as HTMLInputElement;
            const addressElement = document.getElementById('address') as HTMLInputElement;

            if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement) {
                const name = nameElement.value;
                const email = emailElement.value;
                const phone = phoneElement.value;
                const address = addressElement.value;

                const educationEntries = document.querySelectorAll('.education-entry');
                let educationHTML = '';
                educationEntries.forEach((entry: Element) => {
                    const inputs = entry.querySelectorAll('input');
                    educationHTML += `
                        <div class="education-item">
                            <p><strong>${(inputs[0] as HTMLInputElement).value}</strong> - ${(inputs[1] as HTMLInputElement).value}</p>
                            <p>Grade: ${(inputs[2] as HTMLInputElement).value}, Institution: ${(inputs[3] as HTMLInputElement).value}</p>
                        </div>
                    `;
                });

            
                const experienceEntries = document.querySelectorAll('.experience-entry');
                let experienceHTML = '';
                experienceEntries.forEach((entry: Element) => {
                    const inputs = entry.querySelectorAll('input');
                    const textarea = entry.querySelector('textarea');
                    experienceHTML += `
                        <div class="experience-item">
                            <p><strong>${(inputs[0] as HTMLInputElement).value}</strong> - ${(inputs[1] as HTMLInputElement).value}</p>
                            <p>${(inputs[2] as HTMLInputElement).value} - ${(inputs[3] as HTMLInputElement).value}</p>
                            <p>${(textarea as HTMLTextAreaElement).value}</p>
                        </div>
                    `;
                });

                
                const skillInputs = document.querySelectorAll('#skillsEntries input');
                const skills = Array.prototype.map.call(skillInputs, (input: HTMLInputElement) => input.value).join(', ');

                
                const hobbyInputs = document.querySelectorAll('#hobbiesEntries input');
                const hobbies = Array.prototype.map.call(hobbyInputs, (input: HTMLInputElement) => input.value).join(', ');

                
                const profilePictureFile = profilePictureInput.files?.[0];
                const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

                // generating the Resume Output
                const resumeOutput = `
                    <div class="resume-container">
                        <h2 class="resume-title">Resume</h2>
                        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profile-picture">` : ""}
                        <div class="personal-info">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Phone Number:</strong> ${phone}</p>
                            <p><strong>Address:</strong> ${address}</p>
                        </div>
                        <div class="section">
                            <h3>Education</h3>
                            ${educationHTML}
                        </div>
                        <div class="section">
                            <h3>Experience</h3>
                            ${experienceHTML}
                        </div>
                        <div class="section">
                            <h3>Skills</h3>
                            <p>${skills}</p>
                        </div>
                        <div class="section">
                            <h3>Hobbies</h3>
                            <p>${hobbies}</p>
                        </div>
                    </div>
                `;

                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                } else {
                    console.error('The resume output element is missing');
                }
            } else {
                console.error('One or more form elements are missing');
            }
        });
    }
});
