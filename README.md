# myProjects

Bento is a japanese bag that keeps many things.

This project is a link sharing app to share multiple links at a time.

***
Lets say I want to share a bunch or curated picture links to my friends. 
If only I could do that through a single link. And they will see the collection of links with a discription and title for each of the links.
So you will add the lnk, description and author
Then click on a button to generate the single link.
you then share the single link to your friends.
when your frinds open the link, they will see a page with each of the links u added and the desc and author.

How is this possible?
We arnt using any server.
We are encoding the data (links, description and author) into base64
we then decode it when the user enters the encoded link in the browser 
Then use the data to build the page


So we want: 
-Links
-Descrition or each link
-Author
-Button to generate single link

(Bento.js) One js file to handle all the user's input - links descr & author - and convert to string (encode)
(link.js) use to decode the string and make the new page

