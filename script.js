// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.color = '#333';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.1)';
            header.style.color = 'white';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Handle contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    event.target.reset();
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });

    // Add typing effect to hero text (optional)
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 1000);
    }
});

// Simple calculator example (for portfolio projects)
function createCalculator() {
    return {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : 'Error: Division by zero',
        
        calculate: function(operation, a, b) {
            switch(operation) {
                case '+': return this.add(a, b);
                case '-': return this.subtract(a, b);
                case '*': return this.multiply(a, b);
                case '/': return this.divide(a, b);
                default: return 'Invalid operation';
            }
        }
    };
}

// Example usage of calculator
const calc = createCalculator();
console.log('Calculator Example:', calc.calculate('+', 5, 3)); // 8

// Simple task manager example
function createTaskManager() {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    return {
        addTask: function(task) {
            const newTask = {
                id: Date.now(),
                text: task,
                completed: false,
                createdAt: new Date().toISOString()
            };
            tasks.push(newTask);
            this.saveTasks();
            return newTask;
        },
        
        removeTask: function(id) {
            tasks = tasks.filter(task => task.id !== id);
            this.saveTasks();
        },
        
        toggleTask: function(id) {
            const task = tasks.find(task => task.id === id);
            if (task) {
                task.completed = !task.completed;
                this.saveTasks();
            }
        },
        
        getTasks: function() {
            return tasks;
        },
        
        saveTasks: function() {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    };
}

// Example usage
const taskManager = createTaskManager();
console.log('Task Manager Example:', taskManager.getTasks());