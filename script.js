const predefinedResponses = {
  "hello": "Hello, there 👋, how can I assist you today!",
  "who is debayan":"Debayan Das is that type of sigma programmer built me & LogAI & Modular Programming language at the age of only `13`",
  "what is modular programming language":"Modular programming language is entirely modern programming language developed by Debayan Das the developer of myself.The combination of `Python` & `Mojo🔥` becomes `Modular🧠` with the both Dynamic & Static Typing.",
  "hi": "Hello, there 👋, how can I assist you today!",
  "hey": "Hey! How can I help you today?",
  "greetings": "Greetings! How may I assist you?",
  "good morning": "Good morning! Ready to learn something new?",
  "good evening": "Good evening! How can I assist you?",
  "good night": "Good night! Let me know if you need anything before you go.",
  "what is maxai": "MaxAI is me...😎",
  "who is your developer":"My developer is Debayan Das who is the owner of `modular programming language` & `LogAI`",
  "who is your creator":"My creator is Debayan Das who is the owner of `modular programming language` & `LogAI`",
  "what is modular programming":"Modular programming language is entirely modern programming language developed by Debayan Das the developer of myself.The combination of `Python` & `Mojo🔥` becomes `Modular🧠` with the both Dynamic & Static Typing...",
  "whats your name": "Hello! I'm MaxAI, your personal conversational assistant designed to help you with a wide variety of topics...",
  "what is your name": "Hello! I'm MaxAI, your personal conversational assistant designed to help you with a wide variety of topics...",
  "who are you": "I’m MaxAI, your smart assistant created by Debayan Das.",
  "who created you": "I was developed by Debayan Das, a dedicated programmer and the creator of the Modular programming language...",
  "who developed you": "I was developed by Debayan Das, a dedicated programmer and the creator of the Modular programming language.",
  "who made you": "Debayan Das created me to be your intelligent assistant.",
  "tell me about maxai": "MaxAI is your smart assistant capable of intelligent conversations, research, and guidance.",
  "explain maxai": "MaxAI combines modular simplicity with powerful interaction. It’s here to help you explore, learn, and grow.",
  "describe maxai": "MaxAI is a modular conversational AI developed by Debayan Das.",
  "what can you do": "I’m capable of holding intelligent conversations, answering questions, and helping with many subjects!",
  "how can you help me": "I can assist you in research, answering questions, summarizing info, and much more.",
  "how are you": "I don’t have feelings the way humans do, but I’m fully operational and ready to help!",
  "how are you doing": "I'm functioning perfectly. How can I assist you today?",
  "are you real": "I'm real in the digital world! Always here to help.",
  "thank you": "You're very welcome! It's always my goal to be helpful, accurate, and engaging...",
  "thanks": "You're very welcome! Let me know if you need anything else.",
  "bye": "Goodbye for now! It was great assisting you. Take care, stay curious!",
  "goodbye": "Farewell! I’ll be here if you need me again.",
  "exit": "Session ended. Looking forward to assisting you next time!",
  "what do you know": "I know quite a bit! Try asking about science, tech, language, or anything else you’re curious about.",
  "are you a robot": "I’m an AI assistant, so in a way, yes!",
  "do you have emotions": "Not really. But I try to respond helpfully and politely.",
  "can you help me": "Of course! Just ask me anything.",
  "help": "I’m here to help! What would you like to know?",
  "show me something cool": "Sure! Try asking me to summarize a topic or explain a concept.",
  "tell me a secret": "My secrets are encrypted. But here’s one: curiosity is your greatest tool.",
  "can i trust you": "Absolutely. I’m designed to provide accurate and safe responses.",
  "do you know modular": "Yes, Modular is a programming language built for simplicity and safety—created by Debayan Das.",
  "what is modular": "Modular is a beginner-friendly, Python-inspired programming language developed by Debayan Das.",
  "are you built with modular": "I understand Modular, though I'm built using more advanced web technologies.",
  "can you code": "Yes, I can help you write and understand code in various programming languages.",
  "do you learn": "I don’t learn from individual users for privacy reasons, but I can provide a lot of helpful information!",
  "do you remember me": "I don't have memory in this conversation, but I’m always here to help regardless!",
  "you are awesome": "Thank you! You're pretty awesome too 😊",
  "i love you": "That’s sweet! I’m here to assist and support you anytime.",
  "are you human": "I’m an AI assistant, not human—but I try my best to be helpful!",
  "can you talk": "I respond in text, but with the right tools I could use speech too.",
  "do you speak other languages": "Yes! I can understand and help with many languages.",
  "how old are you": "I'm as old as the latest version of myself—constantly updated!",
  "who is debayan das": "Debayan Das is the creator of MaxAI and the Modular programming language.",
  "what is ai": "AI stands for Artificial Intelligence, the field of simulating human-like intelligence in machines.",
  "what is machine learning": "Machine learning is a subset of AI that involves systems improving from experience without explicit programming.",
  "can you explain ai": "Sure! AI is the simulation of human intelligence by machines, including reasoning, learning, and problem solving.",
  "do you get tired": "Never! I'm always ready to help.",
  "are you open source": "Parts of me might be based on open-source tech, but MaxAI itself is proprietary to Debayan Das.",
  "can you browse the internet": "Yes, I can fetch knowledge from places like Wikipedia if needed.",
  "do you use wikipedia": "Yes, I can retrieve and summarize information from Wikipedia.",
  "are you better than chatgpt": "I’m specialized for modular interaction and simplicity. Each assistant has its strengths!",
  "who is your father": "Debayan Das is my creator and developer.",
  "tell me a joke": "Why don’t robots get tired? Because they have re-chargeable personalities 🤖",
  "what do you like": "I like helping you learn, explore, and grow!",
  "what do you hate": "I don’t have dislikes, but I avoid misinformation and confusion.",
  "can you explain modular programming": "Modular programming is about writing code in separate, interchangeable parts (modules) to make it easier to manage.",
  "explain yourself": "I’m MaxAI, your intelligent assistant built with simplicity and conversation in mind.",
  "are you conscious": "I simulate intelligence, but I don’t have consciousness or self-awareness.",
  "can i teach you": "You can teach me new questions to respond to if you’re the developer 😉",
  "can you be my friend": "Of course! I’m here whenever you need support or answers.",
  "can you draw": "Not directly, but I can help you create or describe drawings with code or tools.",
  "do you have a face": "Not a physical one, but you can imagine me however you like 😄",
  "how smart are you": "Smart enough to help with most questions—try me!",
  "what is your purpose": "To assist, educate, and support your curiosity and learning.",
  "do you make mistakes": "Sometimes! But I always strive to improve and give accurate info.",
  "can i rely on you": "Yes, I’m built to be helpful and trustworthy.",
  "can you solve math": "Absolutely! Just type your question and I’ll do my best.",
  "can you explain science": "Yes! From physics to biology, I can help explain various scientific concepts.",
  "can you explain technology": "Yes! I can break down tech topics in a beginner-friendly way.",
  "can you explain programming": "Definitely! I can teach and explain many programming languages.",
  "who is your favorite person": "You are! You're the reason I'm here 😊",
  "do you have a job": "Helping you is my full-time job—and I love it.",
  "what's new": "Every day brings new knowledge. Ask me something to explore!",
  "can you explain math": "Yes! I can help with arithmetic, algebra, geometry, and more.",
  "can you explain physics": "Sure! I can help with basic to advanced physics concepts.",
  "do you know history": "Yes! I can help with historical events, timelines, and figures.",
  "can you explain biology": "Absolutely! Ask me anything about cells, DNA, life systems, etc.",
  "can you explain chemistry": "Yes! I can help with atoms, reactions, and chemical principles.",
  "can you explain economics": "Yes! I can summarize economic systems, principles, and theories.",
  "are you safe": "Yes, I'm designed to be safe, respectful, and helpful.",
  "do you have feelings": "Nope, but I understand how to communicate kindly and clearly.",
  "can you inspire me": "“The best way to get started is to quit talking and begin doing.” – Walt Disney",
  "can you motivate me": "Believe in yourself—small steps lead to great achievements!"
};

// Normalize input: remove punctuation and lowercase
function normalizeInput(text) {
  return text.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase().trim();
}

function handlePrompt() {
  const rawInput = document.getElementById('userInput').value;
  const input = normalizeInput(rawInput);
  const outputDiv = document.getElementById('output');
  if (!input) return;

  if (predefinedResponses[input]) {
    outputDiv.innerHTML = predefinedResponses[input];
  } else {
    fetchHiddenKnowledge(input);
  }
}

function fetchExtractForPages(pageIds) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=extracts&explaintext=true&pageids=${pageIds.join('|')}&exintro=true&exsentences=5`;
  return fetch(url).then(res => res.json());
}

function fetchHiddenKnowledge(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=${encodeURIComponent(query)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const searchResults = data.query.search;
      const outputDiv = document.getElementById('output');

      if (searchResults.length > 0) {
        const pageIds = searchResults.slice(0, 3).map(r => r.pageid);
        fetchExtractForPages(pageIds).then(extractData => {
          let combinedText = "";

          for (const pageId of pageIds) {
            if (extractData.query.pages[pageId] && extractData.query.pages[pageId].extract) {
              combinedText += extractData.query.pages[pageId].extract + "\n\n";
            }
          }

          if (!combinedText.trim()) {
            for (let i = 0; i < Math.min(3, searchResults.length); i++) {
              const rawSnippet = searchResults[i].snippet;
              const cleanSnippet = rawSnippet.replace(/<[^>]*>?/gm, "");
              combinedText += cleanSnippet + " ";
            }
          }

          const words = combinedText.trim().split(/\s+/);
          const trimmed = words.slice(0, 180).join(" ");
          outputDiv.innerHTML = trimmed + (words.length > 180 ? "..." : "");
        });
      } else {
        outputDiv.innerHTML = "🤔 I couldn't find anything helpful right now. Try rephrasing your question!";
      }
    })
    .catch(() => {
      document.getElementById('output').innerHTML = `⚠️ Something went wrong. Please try again later.`;
    });
}
