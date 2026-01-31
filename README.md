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

## Run
```bash
npm install
npm run dev
