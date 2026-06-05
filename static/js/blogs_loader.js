/**
 * blogs_loader.js
 * Renders blog cards dynamically into the blogs/writings section.
 * Called from main.js with the #blogs <section> element.
 */

/**
 * Build a single blog card anchor element.
 * @param {Object} blog  - A blog object from blogsData.
 * @param {number} index - Zero-based index (used for AOS delay).
 * @returns {HTMLElement}
 */
function _buildBlogCard(blog, index) {
    const aosDelay = (index + 1) * 100;

    // Hashtag pills
    const tagsHtml = blog.tags
        .map(
            (tag) => `
            <span class="px-3 py-1 bg-[#222B36] border border-[#2D3748]/50 text-xs font-JetBrains text-gray group-hover:text-purple rounded-full transition-colors duration-300">#${tag}</span>`
        )
        .join("");

    const card = document.createElement("a");
    card.href = blog.url;
    card.target = "_blank";
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", aosDelay);
    card.className =
        "group block bg-surface/50 bg-gradient-to-br from-purple/5 to-transparent border border-[#2D3748] hover:border-purple hover:shadow-[0_0_15px_rgba(168,126,250,0.15)] rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300";

    card.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-lg md:text-xl font-bold text-white group-hover:text-purple transition-colors duration-300 pr-4">
                ${blog.title}</h3>
            <i class="fa fa-external-link text-gray group-hover:text-purple transition-colors duration-300 mt-1"></i>
        </div>

        <p class="text-gray text-sm mb-6 font-JetBrains font-thin line-clamp-3">${blog.excerpt}</p>

        <div class="flex flex-wrap gap-2 mb-6">
            ${tagsHtml}
        </div>

        <div class="w-full h-[1px] bg-[#2D3748] mb-4 group-hover:bg-purple/30 transition-colors duration-300"></div>

        <div class="flex items-center text-xs font-JetBrains text-gray gap-4">
            <span class="flex items-center gap-1.5"><i class="fa fa-calendar-o"></i> ${blog.date}</span>
            <span class="flex items-center gap-1.5"><i class="fa fa-clock-o"></i> ${blog.readTime} min read</span>
        </div>`;

    return card;
}

/**
 * Render all blog posts from blogsData into the blogs section.
 * Targets the `.blogs-cards-grid` container inside the given section element.
 *
 * @param {HTMLElement} blogsSection - The #blogs <section> element.
 */
function renderBlogs(blogsSection) {
    const grid = blogsSection.querySelector(".blogs-cards-grid");
    if (!grid) {
        console.error("renderBlogs: .blogs-cards-grid not found inside blogs section.");
        return;
    }

    if (!Array.isArray(blogsData) || blogsData.length === 0) {
        console.warn("renderBlogs: blogsData is empty or not defined.");
        return;
    }

    grid.innerHTML = ""; // clear any placeholder content

    blogsData.forEach(function (blog, index) {
        grid.appendChild(_buildBlogCard(blog, index));
    });
}
