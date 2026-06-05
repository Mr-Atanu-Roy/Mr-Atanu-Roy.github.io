/**
 * works_loader.js
 * Renders project cards dynamically into the works section.
 * Called from main.js with the #works <section> element.
 */

/**
 * Build the header row HTML for a project card.
 * Handles three layout variants:
 *   - status badge + github icon button
 *   - status badge only (no links)
 *   - live site button only (no status)
 *   - github icon button only (no status)
 */
function _buildProjectHeader(project) {
    const hasStatus = project.status !== null;
    const hasLiveSite = project.links.liveSite != null;
    const hasGithub = project.links.github != null;
    const hasAnalysis = project.links.analysis != null;

    // Title block — wrapped in a div when status badge is present
    let titleBlock;
    if (hasStatus) {
        titleBlock = `
            <div class="flex flex-col gap-2">
                <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-purple transition-colors duration-300">
                    ${project.title}</h3>
                <div class="flex items-center gap-2.5">
                    <span class="relative flex h-2 w-2">
                        <span class="w-2 h-2 rounded-full bg-${project.status.color}-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse"></span>
                    </span>
                    <span class="text-xs text-gray font-JetBrains tracking-wide uppercase">${project.status.label}</span>
                </div>
            </div>`;
    } else {
        titleBlock = `
            <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-purple transition-colors duration-300">
                ${project.title}</h3>`;
    }

    // Links block
    let linksHtml = "";
    if (hasLiveSite) {
        linksHtml += `
            <a href="${project.links.liveSite}" target="_blank"
                class="px-4 py-2 sm:px-6 sm:py-3 border border-darkGray/50 bg-surface/80 hover:bg-darkGray/30 text-gray hover:text-white hover:border-purple font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm backdrop-blur-sm"
                title="Live Site">
                Live Site <i class="fa fa-external-link"></i>
            </a>`;
    }
    if (hasAnalysis) {
        linksHtml += `
            <a href="${project.links.analysis}" target="_blank"
                class="px-4 py-2 sm:px-6 sm:py-3 border border-darkGray/50 bg-surface/80 hover:bg-darkGray/30 text-gray hover:text-white hover:border-purple font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-xs sm:text-sm backdrop-blur-sm"
                title="Read Analysis">
                Read Analysis <i class="fa fa-file-text-o"></i>
            </a>`;
    }
    if (hasGithub) {
        linksHtml += `
            <a href="${project.links.github}" target="_blank"
                class="w-10 h-10 rounded-full bg-surface/75 border border-[#2D3748]/50 flex items-center justify-center text-gray hover:text-white hover:border-purple transition-all duration-300 text-lg shadow-sm mt-1 sm:mt-0"
                title="Source Code">
                <i class="fa fa-github"></i>
            </a>`;
    }

    const linksBlock = linksHtml
        ? `<div class="flex items-center gap-3">${linksHtml}</div>`
        : "";

    // The alignment of the header row changes when a status badge is present
    const rowAlign = hasStatus ? "sm:items-start" : "sm:items-center";

    return `
        <div class="flex flex-col sm:flex-row justify-between ${rowAlign} gap-4 mb-6">
            ${titleBlock}
            ${linksBlock}
        </div>`;
}

/**
 * Build a single project card element.
 * @param {Object} project - A project object from projectsData.
 * @param {number} index   - Zero-based index (used for AOS delay).
 * @returns {HTMLElement}
 */
function _buildProjectCard(project, index) {
    const aosDelay = (index + 1) * 100;

    // Highlights list items
    const highlightsHtml = project.highlights
        .map(
            (h) => `
            <li class="flex items-start gap-3">
                <i class="fa fa-angle-right text-amber-600 mt-1 text-base font-bold"></i>
                <span class="leading-relaxed">${h}</span>
            </li>`,
        )
        .join("");

    // Tech-stack tags
    const tagsHtml = project.tags
        .map(
            (tag) => `
            <span class="px-4 py-1.5 bg-[#222B36] text-gray group-hover:text-purple transition-colors duration-300 text-xs font-semibold rounded-full">${tag}</span>`,
        )
        .join("");

    const card = document.createElement("div");
    card.setAttribute("data-aos", "fade-up");
    card.setAttribute("data-aos-delay", aosDelay);
    card.className =
        "group flex flex-col bg-surface/50 border border-[#2D3748] rounded-2xl p-6 sm:p-8 hover:border-purple hover:shadow-[0_0_15px_rgba(168,126,250,0.15)] transition-all duration-300";

    card.innerHTML = `
        ${_buildProjectHeader(project)}

        <p class="text-gray text-sm md:text-base leading-relaxed mb-6">${project.description}</p>

        <ul class="text-gray text-sm md:text-base mb-8 space-y-4 font-JetBrains font-thin">
            ${highlightsHtml}
        </ul>

        <div class="w-full h-[1px] bg-[#2D3748] mb-6"></div>

        <div class="flex flex-wrap gap-3">
            ${tagsHtml}
        </div>`;

    return card;
}

/**
 * Render all projects from projectsData into the works section.
 * Targets the `.works-cards-grid` container inside the given section element.
 *
 * @param {HTMLElement} worksSection - The #works <section> element.
 */
function renderWorks(worksSection) {
    const grid = worksSection.querySelector(".works-cards-grid");
    if (!grid) {
        console.error(
            "renderWorks: .works-cards-grid not found inside works section.",
        );
        return;
    }

    if (!Array.isArray(projectsData) || projectsData.length === 0) {
        console.warn("renderWorks: projectsData is empty or not defined.");
        return;
    }

    grid.innerHTML = ""; // clear any placeholder content

    projectsData.forEach(function (project, index) {
        grid.appendChild(_buildProjectCard(project, index));
    });
}
