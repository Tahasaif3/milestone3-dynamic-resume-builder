document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // here get references to the form elements by their id's;
    const profilePictureInptut = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addresssElement = document.getElementById('address') as HTMLInputElement
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;
    const hobbiesElement = document.getElementById('hobbies') as HTMLTextAreaElement
    
    if (profilePictureInptut && nameElement && emailElement && phoneElement && addresssElement && educationElement && experienceElement && skillsElement && hobbiesElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addresssElement.value
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const hobbies = hobbiesElement.value

        // Picture element
        const profilePictureFile = profilePictureInptut.files?.[0];
        const profilePictureURL = profilePictureFile? URL.createObjectURL(profilePictureFile) : '';

        // Creating Resume Output
        const resumeOutput = `
            <h2>Resume</h2>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture"> `: ""}
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Hobbies</h3>
            <p>${hobbies}</p>
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
