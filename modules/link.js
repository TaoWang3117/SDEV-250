//represent a link
module.exports = class Link {
   constructor (title, url, author) {
       let absoluteUrl = url;
       //check if url starts with https
       if (
           !absoluteUrl.startsWith("http://") &&
           !absoluteUrl.startsWith("https://")
       ) {
           absoluteUrl = `http://${absoluteUrl}`;
         }
         //add data properties
         this.title = title;
         this.author = author;
         this.url = absoulteUrl;
   } 

   //describe the link as a string
   toString () {
       return `${this.title} (${this.url}). Author: ${this.author}`;
   }
};
