# Method Account Retrieval Integration

A demo application for retrieving accounts for a given entity using the Method API dev sandbox.
<img width="641" height="756" alt="Screenshot 2025-11-12 at 10 33 46 PM" src="https://github.com/user-attachments/assets/924ccf19-b48f-4910-8a23-78ed9b71fddc" />


## Overview

This application allows you to:

- Retrieve all accounts associated with a specific entity (holder) in the Method API dev sandbox
- View account information in a clean JSON format
- Test Method API integration with the accounts endpoint

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Method API key for the dev sandbox (required)
- An Entity ID (holder ID) from your Method account

## Installation

Clone or download this repository

Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

Open your browser and navigate to:

```
http://localhost:3000
```

## Usage

### Retrieving Accounts

1. Enter your Method API dev sandbox key in the "API Key" field
2. Enter the Entity ID (holder ID) in the "Holder ID" field
   - Format: `ent_XXXXXXXXXXXX`
   - This is the unique identifier for the entity whose accounts you want to retrieve
3. Click "Fetch Accounts" to retrieve all accounts associated with that entity
4. The response will be displayed in JSON format below the form, showing:
   - Account details
   - Account types
   - Account status
   - Other account information

### Getting Your Entity ID

To retrieve accounts, you'll need an Entity ID from your Method account:

- Entity IDs typically start with `ent_` followed by alphanumeric characters
- You can find Entity IDs in your Method dashboard or by using the Method API to list entities
- If you don't have an entity yet, you'll need to create one first using the Method API

### Understanding the Response

After clicking "Fetch Accounts", if successful, you'll see: A JSON object containing account data, including an array of accounts if any exist
