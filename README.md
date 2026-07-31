# ResearchHubAI

ResearchHubAI is a full-stack AI-powered research assistant designed to help users search, explore, and organize research-related information. The application combines a Python backend with a modern frontend to provide an intuitive interface for AI-assisted research and information retrieval.

---

## Features

- AI-powered research assistance
- Search and retrieve relevant information
- Modern and responsive user interface
- Full-stack architecture
- RESTful backend integration
- Modular and scalable project structure

---

## Technologies Used

### Backend
- Python 3.x
- FastAPI / Flask *(depending on your implementation)*
- AI libraries
- REST API

### Frontend
- React
- JavaScript
- HTML5
- CSS3

---

## Project Structure

```text
ResearchHubAI/
│
├── backend/
│   ├── .env
│   ├── ai.py
│   ├── main.py
│   └── search.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/JennaSanks/ResearchHubAI.git
cd ResearchHubAI
```

### Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Create a `.env` file and configure the required environment variables.

Start the backend server:

```bash
python main.py
```

---

### Frontend Setup

Navigate to the frontend directory:

```bash
cd frontend
```

Install Node.js dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

---

## Usage

1. Start the backend server.
2. Launch the frontend application.
3. Open the application in your browser.
4. Enter a research topic or query.
5. View AI-generated responses and search results.

---

## Project Workflow

1. User enters a research query.
2. The frontend sends the request to the backend.
3. The backend processes the request using AI modules.
4. Relevant information is retrieved and analyzed.
5. The generated response is returned to the frontend.
6. Results are displayed to the user.

---

## Future Improvements

- User authentication
- Research history and bookmarks
- PDF upload and summarization
- Citation generation
- Export research reports
- Multi-language support
- Cloud deployment

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.
