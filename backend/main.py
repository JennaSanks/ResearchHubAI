from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from search import search_arxiv
from ai import ask_ai

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "ResearchHub AI running"}

@app.get("/search")
def search(query: str):

    papers = search_arxiv(query)

    return {"papers": papers}

@app.post("/chat")
def chat(question: str):

    papers = search_arxiv(question)

    context = ""

    for p in papers:
        context += p["abstract"]

    answer = ask_ai(question, context)

    return {"answer": answer}