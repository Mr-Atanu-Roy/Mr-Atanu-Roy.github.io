/**
 * Blog post data for the Blogs/Writings section.
 * Each object represents one blog card.
 *
 * Fields:
 *  - title    {string}   Blog post title
 *  - excerpt  {string}   Short excerpt / teaser text
 *  - tags     {string[]} Hashtag labels shown on the card
 *  - date     {string}   Publication date (human-readable, e.g. "April 23, 2026")
 *  - readTime {string}   Estimated read time in minutes (e.g. "5")
 *  - url      {string}   Full URL to the blog post
 */

const blogsData = [
    {
        title: "Understanding Vision Transformers (ViT)",
        excerpt:
            "Hey there, in this article we are going to explore and understand Vision Transformer a.k.a ViT in absolute",
        tags: ["Vision Transformers", "Computer Vision", "AI", "Deep Learning"],
        date: "April 23, 2026",
        readTime: "10",
        url: "https://medium.com/@ar1995487/can-vision-transformers-replace-cnns-and-why-they-cant-108495bf53f5",
    },
    {
        title: "Understanding Encapsulation in Python: Public, Protected, and Private Members",
        excerpt:
            "Encapsulation literally means: Bundling + Restricting Direct Access just like a capsule as shown in picture above",
        tags: ["Object Oriented", "Python", "Encapsulation"],
        date: "June 4, 2026",
        readTime: "5",
        url: "https://medium.com/@ar1995487/understanding-encapsulation-in-python-public-protected-and-private-members-1e6d418e901f",
    },
];
