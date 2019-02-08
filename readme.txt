For this assignment, I was able to get the website data to scrape but not much beyond that due to what I assume is a fault with the way the scrape.js file connects to the index.handlebars. Attempting to run this app on localhost:3000 will simply show "Cannot GET /" in the browser. I know the scraping process is successful to some extent because when using "node scrape" in Hyper or Git Bash, it will successfully show the scraped data in what appears to be an array. What I was attempting to do in the index.handlebars file was to have the scraped data display on the handlebars page, through 

 $("#stuff").append("<b>" + metadata + "</b>");

but for some reason this was not successful. If it were to work, I would then find some way to divide the scraped metadata into a series of mongo collections. These would display, ideally through .append, into divs on the index.handlebars file. Then, there would be a input field under every one of the divs that, when typed in and submitted, would store a note for every one of the metadata divs. This would be achieved by adding a new field which contains the note so it would be stored in the mongo database. I've included a paint mockup of how this ideal setup would look.

Some possible issues with this solution would be the collections changing possibly and being overwritten by new scraped data. This would make the notes associated with them lose context.

For the issue on getting the metadata to append properly, I am not sure where the system is going wrong but I suspect it may be a scoping issue.

For the note taking, it would be mainly based off the code used in the note-taker exercise, with the notes being saved as a new field in the collection of the metadata. 