# Commerce Chatbot

A rule-based product discovery chatbot built with **Next.js** and **Tailwind CSS**.

## Features
- Conversational chatbot UI
- Handles vague queries (e.g. gift suggestions)
- Budget-based filtering with quick replies
- Product cards & carousel inside chat
- Basic inventory awareness
- Error handling & empty states
- Mobile-first responsive design

## Architecture
- UI components handle rendering only
- Rule-based chat logic processes user intent and filters data
- Local mock data simulates backend behavior

## Tech Stack
- Next.js (App Router)
- JavaScript
- Tailwind CSS v4

## Production Notes
In production, chat logic and data processing would move to backend APIs.  
For this assignment, local datasets are used to simulate backend behavior.

## AI & Intelligent Query Handling

This chatbot is designed with an AI-ready architecture.  
User input is processed through a dedicated intent-handling layer, allowing the system to evolve from rule-based logic to AI-assisted understanding.

For this assignment, a deterministic rule-based approach was chosen to ensure predictable behavior and simplicity. However, the intent layer can be seamlessly extended to integrate an LLM (e.g. for intent extraction, entity recognition, or semantic search) without changing the UI or data flow.

This approach balances clarity, performance, and future extensibility.

## Notes
- Product discovery is implemented using dynamic filtering over the dataset, allowing user input such as budget and keywords to directly influence query results.

## Run
```bash
npm install
npm run dev
