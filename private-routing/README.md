Routing concepts

1. suppose you have created a route like /products/electronics/samsung/phones
   it is not easy to change it further because, thats why choose it wisely and keep it simple:-

- lots of people have made a bookmark of your route and once they hit they will get !!page not found!! which is not good, then you will need to create some redirection 301 redirects from old URLs to new ones, to correct new route logic to handle this if someone hit this url.

- thats why define it properly

- As soon as you release your Application with a specific route, search engines like google will crawl your website
  they will know that team page was available at /team and if you move your team page over profile/team then SEO will be impacted
  therefore route directly affect your SEO

  Crawlability Issues: Search engine crawlers use your website's URL structure to navigate and understand the content hierarchy.

  - V.V.I Changing the structure can confuse crawlers and make it difficult for them to re-index your pages properly. This can result in decreased visibility in search engine results pages (SERPs).

  - Basically if i change my user name on linkdin to Tripurari-shankar to Tripurari-singh then it will take some time to google to understand that this route has been changed and it will reindex it https://www.linkedin.com/in/tripurari-shankar-91907189/?originalSubdomain=in

- Multipage Application (MPA):
- In an MPA, each page typically corresponds to a separate HTML file.

- When a user navigates between pages, the entire page is often reloaded from the server, including headers, footers, and other common elements.

- This traditional approach can lead to longer loading times, especially for larger websites, as the browser needs to fetch and render new HTML documents for each page.

- Single Page Application (SPA):
- In an SPA, the initial HTML page is loaded from the server, and subsequent interactions with the application are handled dynamically within the same page.

- Instead of loading entirely new HTML pages, SPAs use JavaScript to update the content of the page based on user actions, typically making AJAX requests to fetch data from the server.

- This approach can result in faster and smoother user experiences, as only the necessary data is fetched from the server, and there's no need to reload the entire page.
