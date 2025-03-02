// Java lessons content
const lessons = [
    {
        title: "History of Java",
        content: `Java was created by James Gosling and his team at Sun Microsystems in 1991. Originally called "Oak", it was renamed to "Java" in 1995. The name was inspired by Java coffee, which is why the logo is a cup of coffee! Java was designed with the principle of "Write Once, Run Anywhere" (WORA), meaning Java code can run on any platform that has a Java Virtual Machine (JVM).`
    },
    {
        title: "Why Java is Popular",
        content: `Java became popular for several reasons:<br><br>
                 <div class="feature-list">
                     <div class="feature-item">
                         <span class="feature-number">1</span>
                         <strong>Platform Independence:</strong> Thanks to the JVM, Java programs can run anywhere
                     </div>
                     <div class="feature-item">
                         <span class="feature-number">2</span>
                         <strong>Object-Oriented:</strong> It follows object-oriented programming principles
                     </div>
                     <div class="feature-item">
                         <span class="feature-number">3</span>
                         <strong>Rich Libraries:</strong> Extensive collection of pre-built libraries
                     </div>
                     <div class="feature-item">
                         <span class="feature-number">4</span>
                         <strong>Security:</strong> Built-in security features
                     </div>
                     <div class="feature-item">
                         <span class="feature-number">5</span>
                         <strong>Community Support:</strong> Large developer community and resources
                     </div>
                 </div>`
    },
    {
        title: "Java Versions and Evolution",
        content: `Java has evolved significantly since its creation:<br><br>
                 <div class="version-list">
                     <div class="version-item">
                         <span class="version-badge">1996</span>
                         <strong>JDK 1.0:</strong> First public release
                     </div>
                     <div class="version-item">
                         <span class="version-badge">2004</span>
                         <strong>Java 5:</strong> Added generics, enums, annotations
                     </div>
                     <div class="version-item">
                         <span class="version-badge">2014</span>
                         <strong>Java 8:</strong> Introduced lambda expressions, stream API
                     </div>
                     <div class="version-item">
                         <span class="version-badge">2018</span>
                         <strong>Java 11:</strong> Long-term support version
                     </div>
                     <div class="version-item">
                         <span class="version-badge">2021</span>
                         <strong>Java 17:</strong> Latest LTS version with modern features
                     </div>
                 </div>`
    }
];

// Quiz questions with hints
const quizQuestions = [
    // Easy Level (1-5)
    {
        question: "What is Java?",
        options: [
            "A type of coffee",
            "A programming language",
            "An operating system",
            "A web browser"
        ],
        correct: 1,
        level: "easy",
        hint: "Think about what James Gosling created at Sun Microsystems in 1995."
    },
    {
        question: "Which of these is used to store whole numbers in Java?",
        options: [
            "String",
            "float",
            "int",
            "boolean"
        ],
        correct: 2,
        level: "easy",
        hint: "This data type is commonly used for counting and whole number arithmetic."
    },
    {
        question: "What symbol is used to end a statement in Java?",
        options: [
            ".",
            ";",
            ":",
            ","
        ],
        correct: 1,
        level: "easy",
        hint: "This symbol is used in many programming languages to mark the end of a command."
    },
    {
        question: "How do you create a single-line comment in Java?",
        options: [
            "/* comment */",
            "# comment",
            "// comment",
            "/* comments */"
        ],
        correct: 2,
        level: "easy",
        hint: "By using the slash symbol"
    },
    {
        question: "What is the correct way to create a String variable?",
        options: [
            "string name = \"John\";",
            "String name = \"John\";",
            "text name = \"John\";",
            "str name = \"John\";"
        ],
        correct: 1,
        level: "easy",
        hint: "In Java, this class name starts with a capital letter."
    },
    // Medium Level (6-15)
    {
        question: "What is the purpose of the 'public static void main(String[] args)' method?",
        options: [
            "It's an optional method",
            "It's the entry point of a Java program",
            "It's used to import libraries",
            "It's used to create objects"
        ],
        correct: 1,
        level: "medium",
        hint: "This method is the starting point of a Java application."
    },
    {
        question: "What is an element in an array?",
        options: [
            "A single value stored at a specific index",
            "The entire array itself",
            "The length of the array",
            "The name of the array"
        ],
        correct: 0,
        level: "medium",
        hint: "An element is like a box in a row of boxes, each holding one value."
    },
    {
        question: "Which loop will execute at least once before checking its condition?",
        options: [
            "for loop",
            "while loop",
            "do-while loop",
            "foreach loop"
        ],
        correct: 2,
        level: "medium",
        hint: "This loop type guarantees at least one iteration."
    },
    {
        question: "What is an array in Java?",
        options: [
            "A collection of different data types",
            "A collection of similar data types",
            "A method to store files",
            "A way to create objects"
        ],
        correct: 1,
        level: "medium",
        hint: "Arrays are used to store multiple values of the same type."
    },
    {
        question: "What is method overloading?",
        options: [
            "Having multiple methods with the same name but different parameters",
            "Having multiple classes with the same name",
            "Having multiple packages",
            "Having multiple main methods"
        ],
        correct: 0,
        level: "medium",
        hint: "Method overloading allows for more flexibility in method calls."
    },
    {
        question: "What happens if you try to access an array element out of bounds?",
        options: [
            "It wraps around to the start of the array",
            "Java throws an ArrayIndexOutOfBoundsException",
            "The program crashes silently",
            "The program returns null"
        ],
        correct: 1,
        level: "medium",
        hint: "Java is strict about array bounds and throws a runtime exception."
    },
    {
        question: "What is the purpose of the 'final' keyword?",
        options: [
            "To end a program",
            "To make a variable, method, or class unchangeable",
            "To finalize garbage collection",
            "To indicate the last variable"
        ],
        correct: 1,
        level: "medium",
        hint: "The 'final' keyword has a specific purpose in Java."
    },
    {
        question: "Which package is commonly used for building GUI applications in Java?",
        options: [
            "java.io",
            "java.sql",
            "javax.swing",
            "java.util"
        ],
        correct: 2,
        level: "medium",
        hint: "This package provides components like buttons, text fields, and windows."
    },
    {
        question: "What is the purpose of 'this' keyword?",
        options: [
            "To refer to the current class instance",
            "To create a new object",
            "To call a method",
            "To import a package"
        ],
        correct: 0,
        level: "medium",
        hint: "The 'this' keyword is used to refer to the current object."
    },
    {
        question: "What is exception handling in Java?",
        options: [
            "A way to create errors",
            "A mechanism to handle runtime errors",
            "A method to compile code",
            "A way to create variables"
        ],
        correct: 1,
        level: "medium",
        hint: "Exception handling is crucial for robust Java programs."
    },
    // Hard Level (16-20)
    {
        question: "What is the difference between abstract class and interface?",
        options: [
            "They are exactly the same",
            "Abstract classes can have constructors, interfaces cannot",
            "Interfaces can have constructors, abstract classes cannot",
            "Both can have constructors"
        ],
        correct: 1,
        level: "hard",
        hint: "Understand the key differences between abstract classes and interfaces."
    },
    {
        question: "Which statement is used to call a method in Java?",
        options: [
            "callMethod()",
            "invokeMethod()",
            "methodName()",
            "runMethod()"
        ],
        correct: 2,
        level: "hard",
        hint: "You call a method by using its name, followed by parentheses."
    },
    {
        question: "What is polymorphism in Java?",
        options: [
            "A method to hide class variables",
            "A way to store multiple objects in an array",
            "The ability to perform a single action in different ways",
            "The ability to process data in parallel"
        ],
        correct: 2,
        level: "hard",
        hint: "It allows methods to behave differently based on the object calling them."
    },
    {
        question: "Which keyword is used to access the current object within a method?",
        options: [
            "current",
            "object",
            "self",
            "this"
        ],
        correct: 3,
        level: "hard",
        hint: "Use 'that' to refer to the current instance of the class."
    },
    {
        question: "Which of the following is a feature of Object-Oriented Programming?",
        options: [
            "Compilation",
            "Encapsulation",
            "Looping",
            "Typing"
        ],
        correct: 1,
        level: "hard",
        hint: "Think about how data is bundled together with methods that operate on that data."
    }
];

let currentLesson = 0;
let lessonsCompleted = [false, false, false];

function showLesson(index) {
    const lessonContent = document.getElementById('lesson-content');
    const lessonProgress = document.getElementById('lesson-progress');
    const prevButton = document.getElementById('prev-lesson');
    const nextButton = document.getElementById('next-lesson');
    const startQuizButton = document.getElementById('start-quiz');

    // Update lesson content
    lessonContent.innerHTML = `
        <h3>${lessons[index].title}</h3>
        <div class="lesson-text">${lessons[index].content}</div>
    `;

    // Update progress
    lessonProgress.textContent = `Lesson ${index + 1}/${lessons.length}`;

    // Update navigation buttons
    prevButton.disabled = index === 0;
    nextButton.textContent = index === lessons.length - 1 ? "Complete Lessons" : "Next";

    // Mark current lesson as completed
    lessonsCompleted[index] = true;

    // Enable quiz button if all lessons are completed
    if (lessonsCompleted.every(lesson => lesson === true)) {
        startQuizButton.classList.remove('disabled');
        startQuizButton.disabled = false;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Show first lesson
    showLesson(0);

    // Navigation buttons
    document.getElementById('prev-lesson').addEventListener('click', () => {
        if (currentLesson > 0) {
            currentLesson--;
            showLesson(currentLesson);
        }
    });

    document.getElementById('next-lesson').addEventListener('click', () => {
        if (currentLesson < lessons.length - 1) {
            currentLesson++;
            showLesson(currentLesson);
        }
    });

    // Start Quiz button
    document.getElementById('start-quiz').addEventListener('click', () => {
        if (lessonsCompleted.every(lesson => lesson === true)) {
            document.getElementById('lesson-section').style.display = 'none';
            document.getElementById('quiz-section').style.display = 'block';
            setupQuiz();
        } else {
            alert('Please complete all lessons before starting the quiz!');
        }
    });

    // Submit Quiz button
    document.getElementById('submit-quiz').addEventListener('click', checkQuiz);
});

let score = 0;
let hintsUsed = 0;
let maxHints = 3; // Maximum hints allowed per quiz

// Function to show hint for current question
function showHint(questionIndex) {
    if (hintsUsed < maxHints) {
        const hint = quizQuestions[questionIndex].hint;
        const hintElement = document.getElementById('hint-text');
        hintElement.textContent = hint;
        hintElement.style.display = 'block';
        hintElement.classList.add('show');
        hintsUsed++;
        updateHintCount();
        
        // Disable the hint button for this question
        const hintButton = document.querySelector(`#hint-button-${questionIndex}`);
        if (hintButton) {
            hintButton.disabled = true;
        }
    } else {
        alert('No more hints available! You can only use 3 hints per quiz.');
    }
}

// Function to update hint count display
function updateHintCount() {
    const hintCount = document.getElementById('hint-count');
    hintCount.textContent = `Hints remaining: ${maxHints - hintsUsed}`;
}

function setupQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="q${index}" value="${i}">
                        ${opt}
                    </label>
                `).join('')}
            </div>
            <button id="hint-button-${index}" class="hint-button" onclick="showHint(${index})">
                <span>💡</span> Need a hint?
            </button>
        `;
        quizContainer.appendChild(questionDiv);
    });

    document.getElementById('submit-quiz').addEventListener('click', checkQuiz);
}

function checkQuiz() {
    score = 0;
    const quizContainer = document.getElementById('quiz-container');
    const questions = quizContainer.getElementsByClassName('quiz-question');
    
    Array.from(questions).forEach((question, index) => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption) {
            const answer = parseInt(selectedOption.value);
            if (answer === quizQuestions[index].correct) {
                score++;
                question.classList.add('correct-answer');
            } else {
                question.classList.add('incorrect-answer');
                const feedback = document.createElement('div');
                feedback.className = 'answer-feedback';
                feedback.innerHTML = `❌ Incorrect. Try reviewing this topic again!`;
                question.appendChild(feedback);
            }
        }
    });

    // Display score
    const scoreDisplay = document.getElementById('score-display');
    scoreDisplay.innerHTML = `<h3>Your Score: ${score} out of ${quizQuestions.length}</h3>`;
    
    // Check if score is high enough to unlock the dog
    if (score >= 14) {
        setTimeout(() => {
            document.getElementById('reward-section').style.display = 'block';
            initializeDogGame();
        }, 1500);
    }
}

// Dog game functionality
function initializeDogGame() {
    const dog = document.getElementById('dog');
    const gameContainer = document.getElementById('game-container');
    let currentAnimation = null;
    let runningDirection = 1;
    let runningInterval = null;
    let dogStats = {
        hunger: 80,
        cleanliness: 80,
    };

    // Stats decrease interval ID
    let statsDecreaseInterval = null;

    // Update stats every 10 seconds for base decrease
    setInterval(() => {
        dogStats.hunger = Math.max(0, dogStats.hunger - 0.5);
        dogStats.cleanliness = Math.max(0, dogStats.cleanliness - 0.5);
        updateStats();
    }, 10000);

    function updateStats() {
        document.getElementById('hunger-bar').style.width = `${dogStats.hunger}%`;
        document.getElementById('clean-bar').style.width = `${dogStats.cleanliness}%`;
    }

    // Initialize stats
    updateStats();

    // Function to decrease stats during activity
    function startStatsDecrease() {
        if (statsDecreaseInterval) clearInterval(statsDecreaseInterval);
        statsDecreaseInterval = setInterval(() => {
            dogStats.hunger = Math.max(0, dogStats.hunger - 0.5);
            dogStats.cleanliness = Math.max(0, dogStats.cleanliness - 0.3);
            updateStats();
        }, 1000); // Decrease every second during activity
    }

    function moveDog() {
        const dogRect = dog.getBoundingClientRect();
        const containerRect = gameContainer.getBoundingClientRect();
        const currentLeft = parseInt(dog.style.left) || 50;
        const speed = 3; // Pixels per frame

        if (dogRect.right >= containerRect.right - 30) {
            runningDirection = -1;
            dog.style.transform = 'scaleX(-1)';
        } else if (dogRect.left <= containerRect.left + 30) {
            runningDirection = 1;
            dog.style.transform = 'scaleX(1)';
        }

        dog.style.left = (currentLeft + (runningDirection * speed)) + 'px';
    }

    // Stop all animations
    function stopAnimation() {
        dog.className = '';
        currentAnimation = null;
        // Reset any transforms
        dog.style.transform = '';
        // Clear stats decrease interval
        if (statsDecreaseInterval) {
            clearInterval(statsDecreaseInterval);
            statsDecreaseInterval = null;
        }
        // Clear running interval
        if (runningInterval) {
            cancelAnimationFrame(runningInterval);
            runningInterval = null;
        }
        // Reset button texts
        document.getElementById('run').textContent = 'Run';
        document.getElementById('jump').textContent = 'Jump';
    }

    // Run action
    document.getElementById('run').addEventListener('click', () => {
        if (currentAnimation === 'running') {
            stopAnimation();
        } else {
            stopAnimation();
            dog.classList.add('running');
            currentAnimation = 'running';
            document.getElementById('run').textContent = 'STOP';
            startStatsDecrease();

            // Set initial position
            dog.style.left = '50px';
            runningDirection = 1;
            
            // Start running animation
            function animate() {
                if (currentAnimation === 'running') {
                    moveDog();
                    runningInterval = requestAnimationFrame(animate);
                }
            }
            animate();
        }
    });

    // Jump action
    document.getElementById('jump').addEventListener('click', () => {
        if (currentAnimation === 'jumping') {
            stopAnimation();
        } else {
            stopAnimation();
            dog.classList.add('jumping');
            currentAnimation = 'jumping';
            document.getElementById('jump').textContent = 'STOP';
            startStatsDecrease();
            // Remove jumping class after animation completes
            setTimeout(() => {
                if (currentAnimation === 'jumping') {
                    stopAnimation();
                }
            }, 600);
        }
    });

    // Sit action
    document.getElementById('sit').addEventListener('click', () => {
        if (currentAnimation === 'sitting') {
            stopAnimation();
        } else {
            stopAnimation();
            dog.classList.add('sitting');
            currentAnimation = 'sitting';
        }
    });

    // Feed action
    document.getElementById('feed').addEventListener('click', () => {
        if (currentAnimation === 'feeding') {
            stopAnimation();
            const heartEffect = document.getElementById('heart-effect');
            heartEffect.classList.add('hidden');
            heartEffect.classList.remove('heart-float');
        } else if (dogStats.hunger < 100) {
            stopAnimation();
            const heartEffect = document.getElementById('heart-effect');
            heartEffect.classList.remove('hidden');
            dog.classList.add('feeding');
            currentAnimation = 'feeding';
            document.getElementById('feed').textContent = 'STOP';
            
            // Gradually increase hunger
            let increaseAmount = 0;
            const maxIncrease = 30;
            const feedInterval = setInterval(() => {
                if (currentAnimation !== 'feeding' || increaseAmount >= maxIncrease) {
                    clearInterval(feedInterval);
                    document.getElementById('feed').textContent = 'Feed';
                    return;
                }
                dogStats.hunger = Math.min(100, dogStats.hunger + 1);
                increaseAmount += 1;
                updateStats();
            }, 100); // Increase every 100ms

            // Animation
            setTimeout(() => {
                heartEffect.classList.add('heart-float');
                setTimeout(() => {
                    if (currentAnimation === 'feeding') {
                        stopAnimation();
                        heartEffect.classList.add('hidden');
                        heartEffect.classList.remove('heart-float');
                    }
                }, 1000);
            }, 100);
        }
    });

    // Bath action
    document.getElementById('bath').addEventListener('click', () => {
        if (currentAnimation === 'bathing') {
            stopAnimation();
            const waterEffect = document.getElementById('water-effect');
            waterEffect.classList.add('hidden');
            waterEffect.classList.remove('water-sparkle');
        } else if (dogStats.cleanliness < 100) {
            stopAnimation();
            const waterEffect = document.getElementById('water-effect');
            waterEffect.classList.remove('hidden');
            dog.classList.add('bathing');
            currentAnimation = 'bathing';
            document.getElementById('bath').textContent = 'STOP';

            // Gradually increase cleanliness
            let increaseAmount = 0;
            const maxIncrease = 40;
            const bathInterval = setInterval(() => {
                if (currentAnimation !== 'bathing' || increaseAmount >= maxIncrease) {
                    clearInterval(bathInterval);
                    document.getElementById('bath').textContent = 'Bath';
                    return;
                }
                dogStats.cleanliness = Math.min(100, dogStats.cleanliness + 1);
                increaseAmount += 1;
                updateStats();
            }, 100); // Increase every 100ms

            // Animation
            setTimeout(() => {
                waterEffect.classList.add('water-sparkle');
                setTimeout(() => {
                    if (currentAnimation === 'bathing') {
                        stopAnimation();
                        waterEffect.classList.add('hidden');
                        waterEffect.classList.remove('water-sparkle');
                    }
                }, 2000);
            }, 100);
        }
    });
}
