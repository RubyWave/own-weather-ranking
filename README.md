# Own weather ranking

This is simple React project, to learn this framework and show that learning was successful.

## Building on own machine 
1. Clone repo
2. Install dependencies with this command:
```
npm install
```
3. Build program with any of those commands:
```
npm run build
npm run build-prod
npm start
```

## How to use this ranking
Enter cities by name in top text input, add them to prelist with "Add city" button. When you are satisfied with the list, click "Fetch data" and wait for APIs to respond, it can take some time. After list is complete, you can sort it by name, temperature or wind speed by clicking corresponding heading in top row of the table.

## Problem
This app is just experimental version, it's super delicate and easy to brake, so go easy on it. Given that two APIs used in this project are free, and kindly asking to not overuse their servers, there are set fixed time interval blocks between APIs calls.