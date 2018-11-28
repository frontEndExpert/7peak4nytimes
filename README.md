# 7peak4nytimes
New York Times Article browser App

nytimes-articles-app

once you coclone the repository
you need to run "npm install" to build the node_module directory
to support all the dependencies.

This app is based on react v16.6.3 
with the new lifecycle hooks: getDerivedStateFromProps;
and 
next v7.0.2
node v8.10.0
npm v5.6.0

After the "npm install",
you can simply run "npm run startnow" script
which will build the .next and will execute on http://localhost:3000


The New York Times API has a query time limit of 1 query per a second,
"The Article Search API is rate limited to 1,000 calls per day, and 1 call per second"
This leads for an error if you type too fast at the search box:
I decided to handle it with an error message and let people retype slowly.


