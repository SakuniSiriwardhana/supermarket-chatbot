// Predefined 10-Shelf Product Catalog matching PDF specification
const PRODUCT_CATALOG = {
    // Shelf 1: Fresh Produce
    "apple": { display: "Apples", shelf: "Shelf 1 (Fresh Produce)" },
    "apples": { display: "Apples", shelf: "Shelf 1 (Fresh Produce)" },
    "aple": { display: "Apples", shelf: "Shelf 1 (Fresh Produce)" },
    "banana": { display: "Bananas", shelf: "Shelf 1 (Fresh Produce)" },
    "bananas": { display: "Bananas", shelf: "Shelf 1 (Fresh Produce)" },
    "banans": { display: "Bananas", shelf: "Shelf 1 (Fresh Produce)" },
    "tomato": { display: "Tomatoes", shelf: "Shelf 1 (Fresh Produce)" },
    "tomatoes": { display: "Tomatoes", shelf: "Shelf 1 (Fresh Produce)" },
    "potato": { display: "Potatoes", shelf: "Shelf 1 (Fresh Produce)" },
    "potatoes": { display: "Potatoes", shelf: "Shelf 1 (Fresh Produce)" },
    "carrot": { display: "Carrots", shelf: "Shelf 1 (Fresh Produce)" },
    "carrots": { display: "Carrots", shelf: "Shelf 1 (Fresh Produce)" },
    "lettuce": { display: "Lettuce", shelf: "Shelf 1 (Fresh Produce)" },

    // Shelf 2: Dairy Products
    "milk": { display: "Milk", shelf: "Shelf 2 (Dairy Products)" },
    "cheese": { display: "Cheese", shelf: "Shelf 2 (Dairy Products)" },
    "butter": { display: "Butter", shelf: "Shelf 2 (Dairy Products)" },
    "yogurt": { display: "Yogurt", shelf: "Shelf 2 (Dairy Products)" },
    "youghurt": { display: "Yogurt", shelf: "Shelf 2 (Dairy Products)" },
    "youghurts": { display: "Yogurt", shelf: "Shelf 2 (Dairy Products)" },
    "egg": { display: "Eggs", shelf: "Shelf 2 (Dairy Products)" },
    "eggs": { display: "Eggs", shelf: "Shelf 2 (Dairy Products)" },
    "cream": { display: "Cream", shelf: "Shelf 2 (Dairy Products)" },

    // Shelf 3: Bakery
    "bread": { display: "Bread", shelf: "Shelf 3 (Bakery)" },
    "cake": { display: "Cakes", shelf: "Shelf 3 (Bakery)" },
    "cakes": { display: "Cakes", shelf: "Shelf 3 (Bakery)" },
    "cookie": { display: "Cookies", shelf: "Shelf 3 (Bakery)" },
    "cookies": { display: "Cookies", shelf: "Shelf 3 (Bakery)" },
    "muffin": { display: "Muffins", shelf: "Shelf 3 (Bakery)" },
    "muffins": { display: "Muffins", shelf: "Shelf 3 (Bakery)" },
    "bagel": { display: "Bagels", shelf: "Shelf 3 (Bakery)" },
    "croissant": { display: "Croissants", shelf: "Shelf 3 (Bakery)" },

    // Shelf 4: Meat & Seafood
    "chicken": { display: "Chicken", shelf: "Shelf 4 (Meat & Seafood)" },
    "beef": { display: "Beef", shelf: "Shelf 4 (Meat & Seafood)" },
    "fish": { display: "Fish", shelf: "Shelf 4 (Meat & Seafood)" },
    "salmon": { display: "Salmon", shelf: "Shelf 4 (Meat & Seafood)" },
    "shrimp": { display: "Shrimp", shelf: "Shelf 4 (Meat & Seafood)" },
    "turkey": { display: "Turkey", shelf: "Shelf 4 (Meat & Seafood)" },

    // Shelf 5: Cleaning Supplies
    "detergent": { display: "Detergent", shelf: "Shelf 5 (Cleaning Supplies)" },
    "soap": { display: "Soap", shelf: "Shelf 5 (Cleaning Supplies)" },
    "shampoo": { display: "Shampoo", shelf: "Shelf 5 (Cleaning Supplies)" },
    "toothpaste": { display: "Toothpaste", shelf: "Shelf 5 (Cleaning Supplies)" },
    "tissues": { display: "Tissues", shelf: "Shelf 5 (Cleaning Supplies)" },

    // Shelf 6: Pantry Items
    "rice": { display: "Rice", shelf: "Shelf 6 (Pantry Items)" },
    "pasta": { display: "Pasta", shelf: "Shelf 6 (Pantry Items)" },
    "flour": { display: "Flour", shelf: "Shelf 6 (Pantry Items)" },
    "sugar": { display: "Sugar", shelf: "Shelf 6 (Pantry Items)" },
    "salt": { display: "Salt", shelf: "Shelf 6 (Pantry Items)" },
    "oil": { display: "Oil", shelf: "Shelf 6 (Pantry Items)" },
    "honey": { display: "Honey", shelf: "Shelf 6 (Pantry Items)" },

    // Shelf 7: Canned Goods
    "beans": { display: "Beans", shelf: "Shelf 7 (Canned Goods)" },
    "soup": { display: "Soup", shelf: "Shelf 7 (Canned Goods)" },
    "corn": { display: "Corn", shelf: "Shelf 7 (Canned Goods)" },
    "pickles": { display: "Pickles", shelf: "Shelf 7 (Canned Goods)" },

    // Shelf 8: Beverages
    "water": { display: "Water", shelf: "Shelf 8 (Beverages)" },
    "juice": { display: "Juice", shelf: "Shelf 8 (Beverages)" },
    "coffee": { display: "Coffee", shelf: "Shelf 8 (Beverages)" },
    "tea": { display: "Tea", shelf: "Shelf 8 (Beverages)" },
    "cola": { display: "Cola", shelf: "Shelf 8 (Beverages)" },
    "wine": { display: "Wine", shelf: "Shelf 8 (Beverages)" },

    // Shelf 9: Frozen Foods
    "ice cream": { display: "Ice Cream", shelf: "Shelf 9 (Frozen Foods)" },
    "pizza": { display: "Frozen Pizza", shelf: "Shelf 9 (Frozen Foods)" },

    // Shelf 10: Snacks
    "chips": { display: "Chips", shelf: "Shelf 10 (Snacks)" },
    "chocolate": { display: "Chocolate", shelf: "Shelf 10 (Snacks)" },
    "nuts": { display: "Nuts", shelf: "Shelf 10 (Snacks)" },
    "popcorn": { display: "Popcorn", shelf: "Shelf 10 (Snacks)" }
};

// Common stop words to ignore when extracting products
const STOP_WORDS = new Set([
    "i", "want", "to", "buy", "by", "bi", "bye", "need", "get", "looking", "for", 
    "where", "can", "find", "the", "a", "an", "and", "or", "some", "please", 
    "like", "would", "is", "are", "in", "at", "on", "of", "with", "remove", "delete", "drop", "clear"
]);

// Persistent state: Active shopping cart and list of missing items
let shoppingCart = new Map(); // Stores Item Display -> Shelf Location
let missingItems = new Set();

// Levenshtein distance algorithm for typo detection
function getLevenshteinDistance(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[b.length][a.length];
}

// Find closest matching product from catalog
function findBestMatch(word) {
    if (PRODUCT_CATALOG[word]) {
        return word;
    }

    let bestMatch = null;
    let minDistance = Infinity;

    Object.keys(PRODUCT_CATALOG).forEach(dbKey => {
        const dist = getLevenshteinDistance(word, dbKey);
        if (dist < minDistance && dist <= 2 && word.length > 3) {
            minDistance = dist;
            bestMatch = dbKey;
        }
    });

    return bestMatch;
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userText = inputField.value.trim();
    if (!userText) return;

    appendMessage(userText, 'user-message');
    inputField.value = '';

    processNLP(userText);
}

function appendMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.innerHTML = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processNLP(text) {
    const lowerText = text.toLowerCase().trim();

    // --- Intent 1: Greetings ---
    if (/^(hi|hello|hey|good morning|good afternoon|greetings)/i.test(lowerText)) {
        appendMessage("Hi! 👋 Great to see you! What items are you looking for in our store? (or type <b>'help'</b> for instructions)", 'bot-message');
        return;
    }

    // --- Intent 2: Help Request ---
    if (lowerText.includes("help") || lowerText.includes("how to use") || lowerText.includes("support")) {
        let helpHTML = `<b>ℹ️ How to Use Supermarket Assistant:</b><br><br>` +
            `• <b>Add Items:</b> Type simple lists or natural sentences (e.g. <i>"I need apples, milk, and bread"</i>)<br>` +
            `• <b>Remove Items:</b> Type <i>"remove milk"</i> or <i>"delete apples"</i><br>` +
            `• <b>View Store Inventory:</b> Ask <i>"what items do you have?"</i><br>` +
            `• <b>Save List:</b> Click <b>Save Transaction</b> to download a text summary file.<br>` +
            `• <b>Start Over:</b> Click <b>Clear Results</b> to reset your list.`;
        appendMessage(helpHTML, 'bot-message');
        return;
    }

    // --- Intent 3: Database Inventory Query ---
    if (lowerText.includes("database") || lowerText.includes("what items") || lowerText.includes("available") || lowerText.includes("what do you have")) {
        let uniqueItemsMap = new Map();
        Object.values(PRODUCT_CATALOG).forEach(entry => {
            uniqueItemsMap.set(entry.display, entry.shelf);
        });

        let responseHTML = "<b>We currently have these items in our supermarket:</b><br><ul>";
        uniqueItemsMap.forEach((shelf, item) => {
            responseHTML += `<li><b>${item}</b> → ${shelf}</li>`;
        });
        responseHTML += "</ul>";
        
        appendMessage(responseHTML, 'bot-message');
        return;
    }

    // --- Intent 4: Check Clear / Reset Intent ---
    if (lowerText === "clear" || lowerText === "reset" || lowerText === "clear results") {
        clearCart();
        return;
    }

    // --- Intent 5: Item Removal Action ---
    const isRemoveAction = /\b(remove|delete|drop|clear|take off)\b/i.test(lowerText);

    let rawTokens = lowerText
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter(token => token.length > 0);

    let candidateWords = rawTokens.filter(word => !STOP_WORDS.has(word) && word.length > 2);

    if (candidateWords.length === 0) {
        appendMessage("I couldn't detect any product names. Try listing items like: <i>'apples, milk, detergent'</i> or type <b>'help'</b>.", 'bot-message');
        return;
    }

    let responseHTML = "";

    if (isRemoveAction) {
        let removedItems = [];
        candidateWords.forEach(word => {
            let matchedKey = findBestMatch(word);
            if (matchedKey) {
                let canonicalName = PRODUCT_CATALOG[matchedKey].display;
                if (shoppingCart.has(canonicalName)) {
                    shoppingCart.delete(canonicalName);
                    removedItems.push(canonicalName);
                }
            }
        });

        if (removedItems.length > 0) {
            responseHTML += `🗑️ <b>Removed from your list:</b> ${removedItems.join(", ")}<br><br>`;
        } else {
            responseHTML += `⚠️ Could not find those items in your active shopping list.<br><br>`;
        }
    } else {
        let addedItems = [];
        let notFoundItems = [];

        candidateWords.forEach(word => {
            let matchedKey = findBestMatch(word);

            if (matchedKey) {
                let product = PRODUCT_CATALOG[matchedKey];
                shoppingCart.set(product.display, product.shelf);
                addedItems.push(`<b>${product.display}</b> → ${product.shelf}`);
            } else {
                let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
                missingItems.add(capitalized);
                notFoundItems.push(capitalized);
            }
        });

        if (addedItems.length > 0) {
            responseHTML += `<b>Found ${addedItems.length} item(s) in our store:</b><br>• ` + addedItems.join("<br>• ") + `<br><br>`;
        }

        if (notFoundItems.length > 0) {
            responseHTML += `<b>Sorry, I couldn't locate these items:</b><br>`;
            notFoundItems.forEach(item => {
                responseHTML += `• ${item} (not found / unavailable)<br>`;
            });
            responseHTML += `<br>`;
        }
    }

    responseHTML += getCartSummaryHTML();
    appendMessage(responseHTML, 'bot-message');

    updateButtonStates();
}

function getCartSummaryHTML() {
    if (shoppingCart.size === 0) {
        return "🛒 <b>Your shopping list is currently empty.</b>";
    }

    let summary = `🛒 <b>Your Smart Shopping List (${shoppingCart.size} Found):</b><ul>`;
    shoppingCart.forEach((shelf, item) => {
        summary += `<li><b>${item}</b> → ${shelf}</li>`;
    });
    summary += "</ul>";
    return summary;
}

function updateButtonStates() {
    const hasItems = shoppingCart.size > 0;
    document.getElementById('print-btn').disabled = !hasItems;
    document.getElementById('save-btn').disabled = !hasItems;
}

function clearCart() {
    shoppingCart.clear();
    missingItems.clear();
    updateButtonStates();
    appendMessage("🧹 <b>Shopping list cleared!</b> You can start a new search anytime.", 'bot-message');
}

function printReceipt() {
    if (shoppingCart.size === 0) return;

    const receiptItemsDiv = document.getElementById('receipt-items');
    receiptItemsDiv.innerHTML = '';

    shoppingCart.forEach((shelf, item) => {
        const itemRow = document.createElement('p');
        itemRow.innerText = `${item.padEnd(14, ' ')} : ${shelf}`;
        receiptItemsDiv.appendChild(itemRow);
    });

    window.print();
}

// Download detailed transaction summary text file matching PDF specification
function saveTransaction() {
    if (shoppingCart.size === 0) return;

    const transactionID = "TXN-" + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleString();

    let content = `=================================================\n`;
    let storeHeader = `   SUPERMARKET ASSISTANT - TRANSACTION SUMMARY   \n`;
    content += storeHeader;
    content += `=================================================\n`;
    content += `Transaction ID: ${transactionID}\n`;
    content += `Date & Time   : ${dateStr}\n`;
    content += `-------------------------------------------------\n\n`;

    content += `1. YOUR SHOPPING LIST (${shoppingCart.size} Found Items):\n`;
    shoppingCart.forEach((shelf, item) => {
        content += `   • ${item.padEnd(15, ' ')} -> ${shelf}\n`;
    });

    if (missingItems.size > 0) {
        content += `\n2. UNOCATED / OUT OF STOCK ITEMS (${missingItems.size} Items):\n`;
        missingItems.forEach(item => {
            content += `   • ${item.padEnd(15, ' ')} -> Not Found\n`;
        });
    }

    content += `\n-------------------------------------------------\n`;
    content += `STORE LAYOUT REFERENCE:\n`;
    content += `   Shelf 1 : Fresh Produce (Apples, Bananas, Tomatoes, etc.)\n`;
    content += `   Shelf 2 : Dairy Products (Milk, Cheese, Butter, Yogurt)\n`;
    content += `   Shelf 3 : Bakery (Bread, Cakes, Cookies, Muffins)\n`;
    content += `   Shelf 4 : Meat & Seafood (Chicken, Beef, Fish)\n`;
    content += `   Shelf 5 : Cleaning Supplies (Detergent, Soap, Shampoo)\n`;
    content += `   Shelf 6 : Pantry Items (Rice, Pasta, Flour, Sugar)\n`;
    content += `   Shelf 7 : Canned Goods (Beans, Soup, Corn)\n`;
    content += `   Shelf 8 : Beverages (Water, Juice, Coffee, Tea)\n`;
    content += `   Shelf 9 : Frozen Foods (Ice Cream, Frozen Pizza)\n`;
    content += `   Shelf 10: Snacks (Chips, Chocolate, Nuts)\n`;
    content += `=================================================\n`;
    content += `Thank you for shopping with us!\n`;
    content += `Generated by Supermarket Assistant Chatbot\n`;

    // Download text blob file
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Transaction_${transactionID}.txt`;
    link.click();
}

// Debug console helper functions as specified in PDF
window.testGreeting = function(text) {
    console.log("Greeting Test:", /^(hi|hello|hey|good morning)/i.test(text));
};

window.testFuzzy = function(word) {
    console.log(`Fuzzy match result for '${word}':`, findBestMatch(word));
};