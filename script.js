document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var addEducationBtn = document.getElementById('addEducation');
    var addExperienceBtn = document.getElementById('addExperience');
    var addSkillBtn = document.getElementById('addSkill');
    var addHobbyBtn = document.getElementById('addHobby');
    if (addEducationBtn) {
        addEducationBtn.addEventListener('click', function () {
            var educationEntries = document.getElementById('educationEntries');
            if (educationEntries) {
                var newEntry_1 = document.createElement('div');
                newEntry_1.className = 'education-entry';
                newEntry_1.innerHTML = "\n                    <input type=\"text\" name=\"qualification[]\" placeholder=\"Qualification\" required>\n                    <input type=\"number\" name=\"year[]\" placeholder=\"Year of Passing\" required>\n                    <input type=\"text\" name=\"grade[]\" placeholder=\"Grade/Percentage\" required>\n                    <input type=\"text\" name=\"school[]\" placeholder=\"School/Institution Name\" required>\n                    <button type=\"button\" class=\"remove-entry\">Remove</button>\n                ";
                educationEntries.appendChild(newEntry_1);
                var removeButton = newEntry_1.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function () {
                        educationEntries.removeChild(newEntry_1);
                    });
                }
            }
        });
    }
    if (addExperienceBtn) {
        addExperienceBtn.addEventListener('click', function () {
            var experienceEntries = document.getElementById('experienceEntries');
            if (experienceEntries) {
                var newEntry_2 = document.createElement('div');
                newEntry_2.className = 'experience-entry';
                newEntry_2.innerHTML = "\n                    <input type=\"text\" name=\"company[]\" placeholder=\"Company Name\" required>\n                    <input type=\"text\" name=\"role[]\" placeholder=\"Your Role\" required>\n                    <input type=\"text\" name=\"startDate[]\" placeholder=\"Start Date (MM/YYYY)\" required>\n                    <input type=\"text\" name=\"endDate[]\" placeholder=\"End Date (MM/YYYY or Present)\" required>\n                    <textarea name=\"responsibilities[]\" placeholder=\"Key Responsibilities\" rows=\"3\" required></textarea>\n                    <button type=\"button\" class=\"remove-entry\">Remove</button>\n                ";
                experienceEntries.appendChild(newEntry_2);
                var removeButton = newEntry_2.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function () {
                        experienceEntries.removeChild(newEntry_2);
                    });
                }
            }
        });
    }
    if (addSkillBtn) {
        addSkillBtn.addEventListener('click', function () {
            var skillsEntries = document.getElementById('skillsEntries');
            if (skillsEntries) {
                var newSkill_1 = document.createElement('div');
                newSkill_1.className = 'skill-entry';
                newSkill_1.innerHTML = "\n                    <input type=\"text\" name=\"skills[]\" placeholder=\"Enter a skill\" required>\n                    <button type=\"button\" class=\"remove-entry\">Remove</button>\n                ";
                skillsEntries.appendChild(newSkill_1);
                var removeButton = newSkill_1.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function () {
                        skillsEntries.removeChild(newSkill_1);
                    });
                }
            }
        });
    }
    if (addHobbyBtn) {
        addHobbyBtn.addEventListener('click', function () {
            var hobbiesEntries = document.getElementById('hobbiesEntries');
            if (hobbiesEntries) {
                var newHobby_1 = document.createElement('div');
                newHobby_1.className = 'hobby-entry';
                newHobby_1.innerHTML = "\n                    <input type=\"text\" name=\"hobbies[]\" placeholder=\"Enter a hobby\" required>\n                    <button type=\"button\" class=\"remove-entry\">Remove</button>\n                ";
                hobbiesEntries.appendChild(newHobby_1);
                var removeButton = newHobby_1.querySelector('.remove-entry');
                if (removeButton) {
                    removeButton.addEventListener('click', function () {
                        hobbiesEntries.removeChild(newHobby_1);
                    });
                }
            }
        });
    }
    if (form) {
        form.addEventListener('submit', function (event) {
            var _a;
            event.preventDefault();
            var profilePictureInput = document.getElementById('profilePicture');
            var nameElement = document.getElementById('name');
            var emailElement = document.getElementById('email');
            var phoneElement = document.getElementById('phone');
            var addressElement = document.getElementById('address');
            if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement) {
                var name_1 = nameElement.value;
                var email = emailElement.value;
                var phone = phoneElement.value;
                var address = addressElement.value;
                // Get education entries
                var educationEntries = document.querySelectorAll('.education-entry');
                var educationHTML_1 = '';
                educationEntries.forEach(function (entry) {
                    var inputs = entry.querySelectorAll('input');
                    educationHTML_1 += "\n                        <div class=\"education-item\">\n                            <p><strong>".concat(inputs[0].value, "</strong> - ").concat(inputs[1].value, "</p>\n                            <p>Grade: ").concat(inputs[2].value, ", Institution: ").concat(inputs[3].value, "</p>\n                        </div>\n                    ");
                });
                // Get experience entries
                var experienceEntries = document.querySelectorAll('.experience-entry');
                var experienceHTML_1 = '';
                experienceEntries.forEach(function (entry) {
                    var inputs = entry.querySelectorAll('input');
                    var textarea = entry.querySelector('textarea');
                    experienceHTML_1 += "\n                        <div class=\"experience-item\">\n                            <p><strong>".concat(inputs[0].value, "</strong> - ").concat(inputs[1].value, "</p>\n                            <p>").concat(inputs[2].value, " - ").concat(inputs[3].value, "</p>\n                            <p>").concat(textarea.value, "</p>\n                        </div>\n                    ");
                });
                // Get skills
                var skillInputs = document.querySelectorAll('#skillsEntries input');
                var skills = Array.prototype.map.call(skillInputs, function (input) { return input.value; }).join(', ');
                // Get hobbies
                var hobbyInputs = document.querySelectorAll('#hobbiesEntries input');
                var hobbies = Array.prototype.map.call(hobbyInputs, function (input) { return input.value; }).join(', ');
                // Profile picture
                var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
                var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
                // Creating Resume Output
                var resumeOutput = "\n                    <div class=\"resume-container\">\n                        <h2 class=\"resume-title\">Resume</h2>\n                        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : "", "\n                        <div class=\"personal-info\">\n                            <p><strong>Name:</strong> ").concat(name_1, "</p>\n                            <p><strong>Email:</strong> ").concat(email, "</p>\n                            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n                            <p><strong>Address:</strong> ").concat(address, "</p>\n                        </div>\n                        <div class=\"section\">\n                            <h3>Education</h3>\n                            ").concat(educationHTML_1, "\n                        </div>\n                        <div class=\"section\">\n                            <h3>Experience</h3>\n                            ").concat(experienceHTML_1, "\n                        </div>\n                        <div class=\"section\">\n                            <h3>Skills</h3>\n                            <p>").concat(skills, "</p>\n                        </div>\n                        <div class=\"section\">\n                            <h3>Hobbies</h3>\n                            <p>").concat(hobbies, "</p>\n                        </div>\n                    </div>\n                ");
                var resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    resumeOutputElement.innerHTML = resumeOutput;
                }
                else {
                    console.error('The resume output element is missing');
                }
            }
            else {
                console.error('One or more form elements are missing');
            }
        });
    }
});
