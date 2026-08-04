```markdown
# Crush-Friend API

**A standard software project.**

## Installation

1.  **Dependencies:**
    *   `npm install` (or `yarn install`)
2.  **Configuration:**
    *   `npm install --save-dev @types/node`  (or `yarn add --dev @types/node`)
3.  **Run Development:** `npm run dev` or `yarn dev`

## Usage

*   **API Endpoint:**  `GET /api/status` (Returns the current state of the Crush-Friend API)
*   **Create a new Crush-Friend Instance:** `curl -X POST \
    -d '{"name": "My Crush", "status": "active"}' \
    http://localhost:3000/api/new`
*   **Retrieve Crush Data:** `GET /api/crush/user/123` (Replace 123 with a user ID)

## Files

*   `.gitignore`: Specifies files to ignore.
*   Procfile: Defines startup command.
*   index.js: The main entry point of the application.
*   package.json: Contains project metadata and dependencies.
*   readme.md:  Project documentation.
*   yarn.lock:  Version control lock file.
```