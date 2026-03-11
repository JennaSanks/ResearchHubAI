import requests
import feedparser

def search_arxiv(query):

    url = f"http://export.arxiv.org/api/query?search_query={query}&max_results=5"

    response = requests.get(url)

    feed = feedparser.parse(response.text)

    papers = []

    for entry in feed.entries:

        papers.append({
            "title": entry.title,
            "abstract": entry.summary
        })

    return papers