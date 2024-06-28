document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    const contents = document.querySelectorAll('.content');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            contents.forEach(content => {
                if (content.id === targetId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Handling form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const roll = document.getElementById('roll').value;
        const code = document.getElementById('code').value;

        // Check credentials
        if (name === 'shaashwat' && roll === '19' && code === '110626') {
            document.getElementById('loginSection').style.display = 'none';
            document.getElementById('marksSection').style.display = 'block';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    });

    const feedbackForm = document.getElementById('feedbackForm');
    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your feedback!');
    });

    // Handling dashboard links
    const dashboardLinks = document.querySelectorAll('.dashboard ul li a');
    dashboardLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            contents.forEach(content => {
                if (content.id === targetId) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});





