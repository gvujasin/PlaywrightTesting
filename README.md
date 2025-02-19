# PlaywrightTesting

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright) ![Node.js](https://img.shields.io/badge/Node.js-14%2B-blue?logo=node.js) ![GitHub last commit](https://img.shields.io/github/last-commit/gvujasin/PlaywrightTesting)

**Author:** Goran Vujasin  
**Email:** [gvujasin0401@gmail.com](mailto:gvujasin0401@gmail.com)  
**LinkedIn:** [linkedin.com/in/goran-vujasin](https://www.linkedin.com/in/goran-vujasin)  
**GitHub:** [github.com/gvujasin](https://github.com/gvujasin)  

## 📌 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

PlaywrightTesting is a project designed to demonstrate and facilitate end-to-end testing using [Playwright](https://playwright.dev/), a robust framework for Web Testing and Automation. This repository showcases various testing scenarios, configurations, and best practices to help developers efficiently implement automated tests for web applications.

## Features

- **Cross-Browser Testing:** Execute tests across Chromium, Firefox, and WebKit browsers.
- **Headless Execution:** Support for running tests without a GUI, enhancing performance and integration capabilities.
- **Robust Selectors:** Utilize user-facing attributes and roles for reliable element targeting.
- **Comprehensive Test Suites:** Includes a variety of test cases covering different user interactions and edge cases.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/gvujasin/PlaywrightTesting.git
   cd PlaywrightTesting
   ```
2. **Install Dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```
3. **Install Playwright Browsers:**
   Playwright requires specific browser binaries to operate. Install them using:
   ```bash
   npx playwright install
   ```

## Running Tests

### Execute All Tests
```bash
npm run all-tests
```

### Run a Specific Test File
```bash
npm run test-chromium
```

### Generate and View Test Report
```bash
npx playwright show-report
```

## Project Structure

```
PlaywrightTesting/
├── pages/
│   ├── example.spec.js
│   └── ...
├── tests/
│   ├── examplePage.js
│   └── ...
├── playwright.config.js
├── package.json
└── ...
```

- `tests/`: Contains test specifications.
- `pages/`: Page Object Models representing different pages/components.
- `playwright.config.js`: Configuration file for Playwright.
- `package.json`: Project metadata and dependencies.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Awesome Readme Examples](https://dev.to/documatic/awesome-readme-examples-for-writing-better-readmes-3eh3)

