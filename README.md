# Basic Flask React Website

A simple full-stack web application that generates a random number using a **Flask** backend and displays it on a **React** frontend.

---

## Prerequisites

Make sure you have these installed before getting started:

- [Node.js](https://nodejs.org/) — for running the React frontend
- [Python 3](https://www.python.org/) — for running the Flask backend
- [Git](https://git-scm.com/download/win) — for cloning the repository
- pip — comes bundled with Python

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/qhuy1609/basic-flask-react-website.git
cd basic-flask-react-website
```

### 2. Set up the Flask backend

```bash
cd flask-server
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux
pip install flask flask-cors
```

### 3. Set up the React frontend

```bash
cd ../client
npm install
```

---

## Running the App

You need **two terminals** running at the same time — one for Flask, one for React.

### Terminal 1 — Start the Flask backend

```bash
cd flask-server
venv\Scripts\activate
python server.py
```

Flask will run on: `http://127.0.0.1:5000`

### Terminal 2 — Start the React frontend

```bash
cd client
npm start
```

React will run on: `http://localhost:3000`

---

## Usage

1. Open your browser and go to `http://localhost:3000`
2. Click the **Generate Number** button
3. A random number between 1 and 100 will be fetched from the Flask backend and displayed

