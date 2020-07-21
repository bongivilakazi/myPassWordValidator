# Password Checker

Conditions :
<ul>
    <li>Password should not be empty (must exists)</li>
    <li>Password should be longer than 8 characters</li>
    <li>Password should have at least have one lowercase letter</li>
    <li>Password should at least have one uppercase letter</li>
    <li>Password should at least have one number (digit)</li>
    <li>Password should have at least one special character. e.g { % & * " '. etc</li>
</ul>

## Testing
Note that you must have jasmine installed globally on your machine.
jasmine test/testPassword.js

<p style="text-align: center; font-style: italic; font-family: comic-sans;"><strong>Author: Sibongile Vilakazi</strong></p>


Search...
Umuzi Remote work
1. Syllabus
2. Topics
3. Workshops
4. Projects
Android with Kotlin Projects
Constraint Layout Using Layout Editor
Data Binding Basics
Linear layout using the Layout Editor
User Activity
Androids
Incremental Counter
Information Page
Angular Tutorial
Assertive programming kata
Bootcamp Writing Assignment
Build your first personal website
Capstone project
Gmail Text Scraper
Pair Stairs
Spaced Repitition machine to help you remember what you read
The Quizmaster
build a Chrome Extension that measures time spent in meetings
Consume Github API
DAGs with Airflow
Data-science-specifics
MEDIUM: Cross-validation & Simple Linear Regression
Dashboard Assignment
EASY: Google Data Studio Assignment
HARD: Live Dashboard Assignment
EASY: Plotly Dashboard Assignment
HARD: Webscraping and Live Dashboard Assignment
Data Modelling Challenges
HARD: Network Intrusion
Data Visualisation Projects
MEDIUM: Evolution of Linux Visualisation
MEDIUM: Financial Services Use in Tanzania
MEDIUM: Data Wrangling
MEDIUM: Decision Trees
Introduction to Jupyter Notebooks
MEDIUM: K-Means Clustering Assignment
Logistic regression
MEDIUM: Predict breast cancer
MEDIUM: Predict credit card approvals
MEDIUM: Multivariate Linear Regression
MEDIUM: Natural language processing
MEDIUM: OOP for data science
MEDIUM: Statistical Thinking
Webscraping Assignment
Distributed workloads with ZeroMQ
Email random inspirational quote
Expose a simple REST api for your game
ExpressJS
Game of life: Angular elements
Git Basic Exercises
How to submit your project
Java Projects
Consume own api using curl
File IO + Logging + Errors
Introduction to Spring Boot
Introduction to Spring Boot - part 1
Introduction to Spring Boot - part 2
Introduction to Spring Boot - part 3
Introduction to Spring Boot - part 4
Introduction to Spring Infrastructure
Introduction to Spring Infrastructure part 1
Introduction to Spring Infrastructure part 2
Introduction to Spring Infrastructure part 3
Java Generics
Java collections
Java data structures
SQL Extended
Level 1 programming katas
Linux challenges
Advanced Linux challenges
Beginner Linux challenges
Memory Game: rebuild using a modern web frontend framework
Memory game in vanilla js
Memory game using Angular Material
Nodejs Challenges
1: Node & File IO
2 (alt): Node & mongoDB assignment
3: Express, forms and templates
4: Expose a JSON API
Add a little Ajax
Node & SQL assignment
OOP Excercises
Animals
Animals Part 1. OOP basics
Animals Part 2. Adding Tests
Bank Accounts
Dice
Person
Pre bootcamp challenges
Python projects
Database migrations with SQLAlchemy
Django - exposing a REST api with a real database
Getting to know Python
Python and Kafka
Python and MongoDB
Python and Spark
create a REST api to interact with actual database
expose a simple JSON rest api
RabbitMQ
SQL
Semitone Challenge
1. semitone difference - basic algorithm
1. Make a simple GUI
3. Advanced algorithm
4. A gui that is more...awesome
Add Redux to your semitone game
Test Driven Development
Password Checker
Add logging to password checker
password-checker
MEDIUM: Resturaunt menu system
EASY: factorials
MEDIUM: lots and lots of tdd katas
MEDIUM: recursive search
EASY: simple-calculator part 1
MEDIUM: simple-calculator part 2
string-calculator
HARD: ten-pin bowling scoring system
Validating user input for web
consuming APIs with the requests module
iOS Mobile
Codable, File Manager, URL
Drag and Drop, Multithreading and Delegation
More Swift, Gestures and Animations
Multithreading Layout and Other Functionality - Animated Set
Multithreading Layout and Other Functionality - Graphical Set
Swift and More
5. Katas
6. Department Processes
Code Review Feedback Notes
Contact
Credits
How to Contribute
Online Learning and bootcamp
More
 Github repo
 Credits
  
 Edit this page Umuzi Tech Department > Projects > Test Driven Development > Password Checker > password-checker
PASSWORD-CHECKER
Story points	3
Tags	tdd error-checking
Hard Prerequisites	
PROJECTS: simple-calculator part 1
To submit this project follow the link below: TILDE
Set up your environment
Javascript
Please test your code using jasmine.

Your directory structure should look like this.

    >node_modules    <---- make sure this is in your .gitignore
    >spec
        > support
            -jasmine.json
        - password_is_valid_spec.js
        - password_is_ok_spec.js
    >src
        - password_checker.js
    - package.json
Python
Your project is expected to be completed using pytest. You are expected to follow industry best practices in all things. This means that you need to have a directory structure that is in good shape. Please name your files and folders like this:

├── password_checker   the package under test
│   └── password_checker.py
├── requirements.txt    installation requiremnts
├── setup.py            installation script for the package under test
└── tests               all package tests go in this directory
    ├── test_password_is_valid.py
    └── test_password_is_ok.py
Please take a look at this topic to see an explanation of the required directory structure. TOPICS: Automated Testing in Python

Java
The code you push to git should have the following structure:

├── build.gradle
├── gradle
│   └── wrapper
│       ├── gradle-wrapper.jar
│       └── gradle-wrapper.properties
├── gradlew
├── gradlew.bat
├── settings.gradle
└── src
    ├── main
    |   └── java
    |       └── PasswordChecker.java <-------- names are important
    └── test
        └── java
            └── ???.java             <-------- names are important
Please refer to the following to find out more: TOPICS: [TODO] Java project submission requirements

Instructions
Implement the following function by following a TDD methodology:

// Javascript:
passwordIsValid(password)
// Java:
passwordIsValid(password)
# Python:
password_is_valid(password)
password_is_valid will check if the password meets a few different conditions. If one of the below conditions is not met then the relevant error/exception should be thrown/raised. Your error/exception message should match one of the following conditions exactly (word-for-word).

password should exist
password should be longer than than 8 characters
password should have at least one lowercase letter
password should have at least one uppercase letter
password should at least have one digit
password should have at least one special character
In the case of (6) above, a special character is a character that is on the keyboard but is not a number or letter. Eg { % & * " ' etc

Next, implement a function called password is ok:

// Javascript:
passwordIsOk(password)
// Java:
passwordIsOk(password)
# Python:
password_is_ok(password)
If the given password meets at least three of the conditions listed above then this function should return true, otherwise it should return false.

Add a feature: the password is never OK if conditions 1 and 2 are not met.

JS Resources
JS Errors
Errors and Jasmine
Python Resources
Python Errors
Exceptions and Pytest
Java Resources
https://howtodoinjava.com/junit5/expected-exception-example/
RAW CONTENT URL
