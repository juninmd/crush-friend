```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure the consistent, maintainable, and high-quality development of the AGENTS repository. Adherence to these principles is mandatory for all coding agents.

## 1. DRY (Don't Repeat Yourself)

*   All code must be reusable across multiple agents.
*   Modules and functions should have clear, single responsibilities.
*   Avoid duplication of logic and data structures.
*   Implement common patterns and abstractions where possible.

## 2. KISS (Keep It Simple, Stupid)

*   Code should be easily understood by other developers (including yourself in the future).
*   Prioritize readability over brevity.
*   Use the simplest solution that meets the requirements.
*   Avoid unnecessary complexity.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one and only one reason to change.
*   **Open/Closed Principle:**  Classes/modules should be open for extension but closed for modification.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be forced to implement interfaces they do not use.
*   **Dependency Inversion Principle:** Client code should not depend on implementation details.  Interfaces should define contracts.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the functionality absolutely required for the current task.
*   Avoid adding features or modifications without a clear justification.
*   Focus on delivering working functionality first.
*   Refactor only when necessary for improved maintainability, not to add new functionality.

## 5. Code Structure & File Management

*   Each file should represent a single, logical component or module.
*   File names should be descriptive and follow a consistent naming convention (see documentation for guidelines).
*   Use comments to explain complex logic or decisions.
*   Modularize code into logical groups (e.g., data, logic, interactions).
*   Follow a consistent directory structure.
*   The primary directory structure should be:  `agents/├── data/├── ...└── models/├── ...└── .../`
*   Each file should have a maximum of 180 lines of code.
*   Code should be formatted consistently (use a code formatter like Prettier).
*   Include unit tests for all key functions and classes.
*   Maintain a README file explaining the purpose of each file and its dependencies.

## 6. Testing & Code Coverage

*   All development must be productive, prioritizing functionality.
*   Unit tests should be written for all key functions and classes.
*   Aim for at least 80% code coverage through automated testing.
*   Use a testing framework (e.g., pytest, unittest) to ensure testability.
*   Focus on testing edge cases and error conditions.
*   Test cases should be clear, concise, and well-documented.

## 7.  Documentation

*   Provide clear and concise documentation for all classes, functions, and modules.
*   Include documentation comments to explain the purpose of each element.
*   Use a documentation generator (e.g., Sphinx) for complex documentation.

## 8.  Error Handling & Logging

*   Implement robust error handling to prevent crashes and provide informative error messages.
*   Use logging to track errors, warnings, and debugging information.
*   Avoid excessive logging; focus on essential information.

## 9.  Version Control

*   Use a version control system (e.g., Git) to track changes to the code.
*   Follow a consistent branching strategy (e.g., Gitflow).
*   Commit frequently with meaningful commit messages.

## 10. Tooling

*   Utilize linters and formatters (e.g., Prettier, ESLint) to enforce coding style and consistency.
*   Employ code analysis tools (e.g., SonarQube) to identify potential issues.

## 11.  Maximum Code Length: 180 lines per file.

## 12.  Minimum Test Coverage: 80%

```