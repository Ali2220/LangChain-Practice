// 1️⃣ Simple Program.
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv";

dotenv.config();

// const model = new ChatGoogleGenerativeAI({
//     model: 'gemini-2.0-flash',
//     apiKey: process.env.GEMINI_API_KEY
// });

// const response = await model.invoke("Pakistan ki capital kia hai")
// console.log(response.content);

// 2️⃣ Prompt Templates - Professional Tareeqa

// import { ChatGoogleGenerativeAI } from "@langchain/google-genai"
// import { PromptTemplate } from "@langchain/core/prompts";

// const model = new ChatGoogleGenerativeAI({
//     model: 'gemini-2.0-flash',
//     apiKey: process.env.GEMINI_API_KEY
// })

// Template bnao
// const template = PromptTemplate.fromTemplate(
//     "Mjhe {topic} ke baare mein 3 interesting facts btao"
// )

// Prompt format karein
// const prompt = await template.format({topic: "Artificial Intelligence"})

// Response get karein
// const response = await model.invoke(prompt)
// console.log(response.content);

// 3️⃣ Chains - Steps Ko Connect Karna.
// import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
// import { PromptTemplate } from "@langchain/core/prompts";

// const model = new ChatGoogleGenerativeAI({
//     model: "gemini-2.0-flash",
//     apiKey: process.env.GEMINI_API_KEY
// })

// const template = PromptTemplate.fromTemplate(
//     "Ek {adjective} {subject} ke baray mai khubsurat poem likho."
// )

// chain using pipe operator ()
// const chain = template.pipe(model)

// const result = await chain.invoke({
//     adjective: "khubsurat",
//     subject: "chandni raat"
// })

// console.log(result.content);


// 4️⃣ Conversation Memory - Chat History - Short Term Memory

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { HumanMessage, AIMessage } from "@langchain/core/messages";


const model = new ChatGoogleGenerativeAI({
    model: 'gemini-2.0-flash',
    apiKey: process.env.GEMINI_API_KEY
})

const chatHistory = []

// ➤ 1st message (User)
chatHistory.push(new HumanMessage("Mera naam Ali hai."))
const res1 = await model.invoke(chatHistory)
chatHistory.push(new AIMessage(res1.content))
console.log("Bot 1:",res1.content);


// ➤ 2nd message (User)
chatHistory.push(new HumanMessage("Mera naam btao ?"))
const res2 = await model.invoke(chatHistory)
chatHistory.push(new AIMessage(res2.content))
console.log("Bot 2:", res2.content);

console.log(chatHistory);