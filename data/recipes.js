// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// --- IMPORTANT: Middleware Setup ---
// Allows the server to parse incoming JSON data (like goal settings)
app.use(express.json());

// --- 1. HEALTH CHECK ROUTE ---
app.get('/', (req, res) => {
    res.status(200).send("Metabolic Kitchen Agent API is running!");
});

// --- 2. RECOMMENDATION ROUTE (The Main Endpoint) ---
app.post('/api/recommendations', (req, res) => {
    // This is where your three-part scoring logic will go!
    
    const { 
        timeBudget, 
        mainIngredient, 
        currentMacros // Data sent by the user
    } = req.body; 
    
    // 1. Fetch data (from Firebase/data/recipes.js)
    // 2. Run Freshness Score (S_F)
    // 3. Run Metabolic Score (S_M)
    // 4. Run Time Filter (S_T)
    // 5. Calculate Final Score and sort recipes
    
    const results = [
        // Placeholder response for initial testing
        { name: "High-Protein Salmon Salad", score: 95, reason: "Boosts protein and uses expiring lettuce." },
        { name: "Quick Pasta Aglio e Olio", score: 70, reason: "Fastest option." }
    ];
    
    res.json(results);
});


// --- 3. START THE SERVER ---
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("Use CTRL+C to stop the server.");
});