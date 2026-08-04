```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines detail the expected behavior and structure for AI coding agents within this repository. Adherence to these principles is crucial for maintaining a clean, maintainable, and reliable codebase.

## 1. DRY (Don't Repeat Yourself)

*   All functions, classes, and modules should have a single, well-defined purpose.
*   Avoid duplicating logic across multiple files.
*   When a similar solution is required, extract it into a reusable component.

## 2. KISS (Keep It Simple, Stupid)

*   Prioritize clarity and readability over complex solutions.
*   Strive for concise and easily understandable code.
*   Minimize unnecessary complexity.
*   Avoid overly clever or obscure solutions that might be difficult to debug.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class or module should have one primary responsibility.
*   **Open/Closed Principle:**  The system should be extensible through new classes or modules without modifying existing code.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Clients should not be required to know about methods they do not use.
*   **Dependency Inversion Principle:** Client code should not depend on implementation details.

## 4. YAGNI (You Aren't Gonna Need It)

*   Only implement functionality that is currently required.
*   Defer the implementation of future features until they are truly needed.
*   Avoid unnecessary complexity and unnecessary code.

## 5. Code Structure & File Organization

*   **Files:** Each file should represent a single, cohesive unit of functionality.
*   **Naming Conventions:** Use clear and descriptive names for files, classes, and functions.  Follow a consistent naming convention (e.g., snake_case).
*   **Comments:** Provide comments where necessary to explain complex logic or assumptions.
*   **Modularization:** Break down large functions into smaller, reusable modules.
*   **Documentation:**  Include brief documentation (docstrings) explaining the purpose, inputs, and outputs of each function/class/module.

## 6.  Code Length & Scalability

*   **Maximum Code Length:**  Each file should not exceed 180 lines of code.
*   **Code Optimization:** Strive for efficient code through algorithms and data structures.
*   **Algorithm Choice:** Select algorithms that are appropriate for the task and have minimal computational cost.

## 7. Test Coverage Requirements

*   **Target:**  Achieve at least 80% test coverage.
*   **Test Suite:** A comprehensive test suite should be implemented using a standard testing framework (e.g., pytest, unittest).
*   **Test Cases:** Tests should cover all critical functionalities and edge cases.
*   **Isolation:** Each unit of code should have well-defined and isolated tests.

## 8.  Development Practices

*   **Version Control:** Use a version control system (e.g., Git) for all code changes.
*   **Code Reviews:** All code changes should be reviewed by other developers.
*   **Continuous Integration:** Implement a continuous integration pipeline (e.g., CI/CD) to automatically build and test the code.
*   **Documentation Updates:** Ensure documentation is kept up-to-date with the code.

## 9.  Specific Requirements (Examples - Adapt as Needed)

*   **`data_processing.py`:** Contains functions for data cleaning, transformation, and aggregation.
*   **`agent_logic.py`:**  Implementation of core agent logic, focused on decision-making and behavior.
*   **`monitoring.py`:**  Focuses on logging and monitoring agent performance.
*   **`config.py`:** Configuration for different agent types.
*   **`interface.py`:**  Defines the API for agents to interact with each other.

## 10.  Constraints

*   **No External Libraries:**  Only use built-in Python libraries.
*   **No Mocking:** All tests must be written using mocked data.

These guidelines are intended as a reference.  Developers are encouraged to continuously refine and improve these standards based on project needs and best practices.
```