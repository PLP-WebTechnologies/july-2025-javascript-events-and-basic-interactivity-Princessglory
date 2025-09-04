   // ===== PART 1: Event Handling =====
        
        // Click event
        document.getElementById('click-button').addEventListener('click', function() {
            document.getElementById('click-output').textContent = 'Button was clicked!';
        });
        
        // Mouse events
        const hoverArea = document.getElementById('hover-area');
        hoverArea.addEventListener('mouseover', function() {
            document.getElementById('hover-output').textContent = 'Mouse is over the area';
        });
        
        hoverArea.addEventListener('mouseout', function() {
            document.getElementById('hover-output').textContent = 'Mouse left the area';
        });
        
        // Keyboard event
        document.getElementById('key-input').addEventListener('keyup', function(e) {
            document.getElementById('key-output').textContent = `You typed: ${e.target.value}`;
        });
        
        // ===== PART 2: Interactive Elements =====
        
        // Counter
        let count = 0;
        const counterElement = document.getElementById('counter');
        
        document.getElementById('increase').addEventListener('click', function() {
            count++;
            counterElement.textContent = count;
        });
        
        document.getElementById('decrease').addEventListener('click', function() {
            count--;
            counterElement.textContent = count;
        });
        
        document.getElementById('reset').addEventListener('click', function() {
            count = 0;
            counterElement.textContent = count;
        });
        
        // FAQ section
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });
        
        // Tabbed interface
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all tab panels
                document.querySelectorAll('.tab-panel').forEach(panel => {
                    panel.classList.remove('active');
                });
                
                // Show the selected tab panel
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // ===== PART 3: Form Validation =====
        
        document.getElementById('my-form').addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Reset errors
            document.querySelectorAll('.error').forEach(error => {
                error.textContent = '';
            });
            document.getElementById('form-success').textContent = '';
            
            // Validate name
            const name = document.getElementById('name').value;
            if (!name) {
                document.getElementById('name-error').textContent = 'Name is required';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email').value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('email-error').textContent = 'Valid email is required';
                isValid = false;
            }
            
            // Validate password
            const password = document.getElementById('password').value;
            if (!password || password.length < 6) {
                document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message').value;
            if (!message || message.length < 10) {
                document.getElementById('message-error').textContent = 'Message must be at least 10 characters';
                isValid = false;
            }
            
            // If form is valid
            if (isValid) {
                document.getElementById('form-success').textContent = 'Form submitted successfully!';
                this.reset();
            }
        });