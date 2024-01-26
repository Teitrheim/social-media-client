Project Name: Workflow

Description

This project is a comprehensive application featuring front-end login/logout functionality, CRUD operations, and a user profile page. It showcases advanced front-end development skills coupled with effective quality assurance practices including automated testing.
Configuration

This project uses various tools to ensure code quality, consistency, and effective testing:

    Prettier: For code formatting.
    ESLint: To enforce code quality.
    Husky & lint-staged: For pre-commit hooks ensuring linting and formatting checks.
    Jest: For unit testing.
    Cypress: For end-to-end testing.

Testing
Running Unit Tests with Jest

Run the following command to execute unit tests:

bash

npm run test-unit

Running End-to-End Tests with Cypress

For headless testing:

bash

npm run test-e2e-cli

For interactive testing:

bash

npm run test-e2e

Versioning Inconsistency and Correction

During development, there was an inconsistency in version numbering due to a series of major and minor updates that were not sequentially tagged. The versioning jumped from "1.1.0" to "1.0.1", then to "1.0.2", followed by a reset to "0.0.1" and "0.0.2".

This issue has been addressed by setting the version to "1.2.0", representing the current state of the project after significant feature updates and minor patches. The newest version is 1.3.3. This correction aligns with the semantic versioning principles and ensures clarity and consistency in future updates.
Getting Started

bash

# Clone the repository

git clone https://github.com/Teitrheim/social-media-client

# Install dependencies

npm install

# Run the application

npm start
