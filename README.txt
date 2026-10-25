
##Supermarket Assistant Chatbot
An intelligent, web-based Supermarket Assistant Chatbot built using "HTML, CSS, JavaScript, and Natural Language Processing (NLP)"concepts. The application is designed to sit at the entrance of a supermarket to assist customers in locating goods on store shelves, building dynamic shopping lists, and generating hard-copy printed summaries.



## Key Features

**Conversational AI Intent Recognition**:
  - Greetings: Understands natural greetings ("hi", "hello", "good morning")

  - Inventory Queries: Responds to questions like "what items do you have?" or "database" by displaying the store catalog with shelf numbers and no duplicates.

  - Help Guidance: Responds to "help" commands with step-by-step usage instructions.


**Natural Language Entity Extraction**: Tokenizes raw user sentences and filters out prepositions, verbs, and filler stop-words ("i", "want", "to", "buy", "by", "and").


**Fuzzy Matching / Typo Detection**: Employs the **Levenshtein String Distance Algorithm** to auto-correct customer typos (e.g., `aple` ➔ `Apples`, `youghurt` ➔ `Yogurt`, `banans` ➔ `Bananas`).


**Persistent Multi-Turn List Memory**: Remembers and accumulates items sent across continuous conversation turns into a single active shopping list.


**Item Removal Handling**: Supports action keywords ("remove", "delete", "drop") to remove items from the live session list dynamically.


**Out-of-Stock Notifications**: Clearly alerts customers when a requested product is unlocated or not in the store database.


**Hard-Copy Printing & File Exports**:

  - 🖨️ Print Shelf Summary: Generates a clean, browser-formatted physical receipt slip.

  - 💾 Save Transaction: Downloads a `.txt` transaction log featuring a unique Transaction ID, timestamp, found items, unlocated items, and full store layout map.

  - 🗑️ Clear Results: Resets current session memory to start fresh.

**Interactive Web Interface**: User-friendly chat-based layout with action buttons.




## Supermarket Store Layout (10 Shelf Categories)

| Shelf Area     |          Category      | Products Included |
 
| **Shelf 1** | Fresh Produce        | Apples, Bananas, Tomatoes, Potatoes, Carrots, Lettuce |
| **Shelf 2** | Dairy Products       | Milk, Cheese, Butter, Yogurt, Eggs, Cream |
| **Shelf 3** | Bakery                   | Bread, Cakes, Cookies, Muffins, Bagels, Croissants |
| **Shelf 4** | Meat & Seafood    | Chicken, Beef, Fish, Salmon, Shrimp, Turkey |
| **Shelf 5** | Cleaning Supplies | Detergent, Soap, Shampoo, Toothpaste, Tissues |
| **Shelf 6** | Pantry Items          | Rice, Pasta, Flour, Sugar, Salt, Oil, Honey |
| **Shelf 7** | Canned Goods      | Beans, Soup, Corn, Pickles |
| **Shelf 8** | Beverages             | Water, Juice, Coffee, Tea, Cola, Wine |
| **Shelf 9** | Frozen Foods       | Ice Cream, Frozen Pizza |
| **Shelf 10** | Snacks               | Chips, Chocolate, Nuts, Popcorn |




## Technical Stack

**Frontend**: HTML5, CSS3, JavaScript (ES6+)

 **NLP Techniques**: Tokenization, Stop Word Removal, Regex Intent Classification, Levenshtein Distance String Matching

**Database**: JS Object-based product-shelf mapping

 **Interface**: Web-based responsive design




##Installation & Setup

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Optional: Node.js and npm for development server

### Quick Start (Browser-based)

**Download the project files**

   supermarket-chatbot
   ├── index.html
   ├── script.js
   ├── style.css
   ├── package.json
   └── README.md


1.  Open in browser

*Simply double-click index.html in your web browser  

*The application will load automatically  

2.  Development Setup (Optional)  
       1.Install dependencies  

*Bash
- npm install

      2.Start development server  

*Bash
- npm start

or use any local server:  

*Bash
- python -m http.server 8000
# or
- npx live-server

       3.Access the application  

*Open http://localhost:8000 in your browser





## How to Use

*Basic Usage
1.Start the Application

             -Open index.html in your web browser

             -You'll see a welcome message from the assistant

2.Input Your Shopping List

                 -Type your items in natural language

                  -Examples:

"I need aple, milk, and bread"

"I want to buy youghurt and cheese"

"Where can I find eggs, rice, and shampoo?"


3. Multi-Turn List Building

               -Send items in consecutive messages (e.g., Turn 1: "I want apples", Turn 2: "I need milk"). The bot continuously accumulates them into your total shopping list.


4. Remove Items

                 -Type "remove milk" or "delete apples" to take items off your list.


5.Inquire About Inventory or Get Help

                 -Type "what items do you have?" to display the entire store product catalog with shelf numbers.

                 -Type "help" to display usage instructions.

6.Save or Print

           -Click Print Shelf Summary to view a physical print preview slip.

            -Click Save Transaction to download a detailed .txt text summary.

             -Click Clear Results to reset your active list.





##NLP Implementation
###Techniques Used

1.Tokenization: Cleaning punctuation and breaking text into words.

2.Stop Word Removal: Stripping prepositions, verbs, and common filler words ("i", "want", "to", "buy", "by", "and").

3.Intent Recognition: Identifying conversational intents (greetings, help, inventory_query, clear_cart, item_removal, item_addition).

4.Fuzzy String Matching: Using the Levenshtein String Distance Algorithm to match misspelled words (aple ➔ Apples, banans ➔ Bananas).

5.Canonical Name Normalization: Mapping singular and plural variants to a single standardized item display name



##NLP Pipeline
*Plaintext
User Input ➔ Intent Identification ➔ Tokenization & Cleaning ➔ Stop Word Filtering ➔ Le



##Key Functions
*processNLP(): Core processing pipeline handling user intents and candidate extraction.

*findBestMatch(): Performs Levenshtein fuzzy string distance calculations against the product database.

*getLevenshteinDistance(): Mathematical algorithm calculating minimum edit distance between strings.

*saveTransaction(): Generates and triggers download for text summary logs.

*clearCart(): Resets active cart memory state.





## User Interface
###Features
*Chat Interface: Conversational interaction style

*Action Toolbar: Dedicated buttons for Printing, Saving, and Clearing lists

*Responsive Layout: Adapts to desktop and mobile displays

*Print Support: Dedicated @media print CSS rules for receipt generation






##Testing
###Manual Testing Scenarios

1.Basic Product Search

Input: "apples and milk"

Expected: Shelf locations displayed


2.Typo Correction & Misspellings

Input: "aple and banans"

Expected: Automatically corrected to Apples and Bananas


3.Multi-Sentence List Accumulation

Message 1: "I want apple"

Message 2: "I need milk and bread"

Expected: Cumulative shopping list containing all 3 items


4.Item Removal

Input: "remove milk"

Expected: Milk removed, remaining items kept in active list


5.Unknown / Out-of-Stock Items

Input: "I want laptop"

Expected: Listed under unavailable items


6.Save & Print Functionality

Click Save Transaction ➔ Text file downloads with transaction log

Click Print Shelf Summary ➔ Browser print preview launches





##Developer Console Debug Mode
For technical evaluators, open the browser Developer Console (F12) and run helper test functions:

**JavaScript**
// Test greeting regex intent detection
testGreeting("hello");

// Test Levenshtein distance typo auto-correction algorithm
testFuzzy("aples"); // Returns "apple"


##License
This project is created for educational purposes as part of CO3251 Natural Language Processing



## Project Folder Structure

supermarket-chatbot
├── index.html             # Main Chatbot User Interface
├── style.css                # Application Styling & Receipt Print Media Rules
├── script.js                 # Core NLP Processing, Fuzzy Logic, & Cart Logic
├── package.json         # Project Dependencies & Scripts Configuration
├── README.md        # Technical Documentation & Setup Instructions
├── User-guide.pdf      # Comprehensive User Guide PDF
└── Video Demonstration.mp4 # 1-to-2 Minute Prototype Demonstration Video
