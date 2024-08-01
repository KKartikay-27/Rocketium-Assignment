# Data Fetching API

This project sets up a Node.js server with an API that serves dummy JSON data. It includes functionality for filtering and sorting the data based on various criteria.

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/node-json-api.git
cd node-json-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

Start the server with
```bash
node src/index.js
```
The server will running on port number 3000. 
The data will be visible on [http://localhost:3000/api/data](http://localhost:3000/api/data)

## API Endpoints
### Retrieve Data
* Endpoint: /api/data
* Method: GET

### Filter and Sort Data
* Query Parameters: 
  * filterBy: Field to filter by (e.g., language)
  *  filterValue: Value to filter (e.g., Sindhi)
  *  sortBy: Field to sort by (e.g., name)

## Testing
### How to Import the Collection
1. Open Postman.
2. Click on the Import Button in the top-left corner.
3. Choose Raw Text or File:
   * For Raw Text: Copy and paste the JSON content above into the text area.
   * For File: Save the JSON content into a .json file and select it for import.
4. Click Import.

This will add the requests to your Postman workspace, allowing you to execute and test the API endpoints.