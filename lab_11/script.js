let filters = [];

function updateFilters() {
    const container = document.getElementById('content');
    container.innerHTML = filters.map(tag => `<button class="tag" onclick="removeFilter('${tag}')">${tag}</button>`);
    filterJobs();
}

function Filter(tag) {
    if (!filters.includes(tag)) filters.push(tag);
    updateFilters();
}

function removeFilter(tag) {
    filters = filters.filter(f => f !== tag);
    updateFilters();
}

function clearFilter() {
    filters = [];
    updateFilters();
}

function filterJobs() {
    document.querySelectorAll('.job_card').forEach(card => { 
        const tags = Array.from(card.querySelectorAll('.job_tags .tag')).map(t => t.textContent);
        card.style.display = filters.every(f => tags.includes(f)) || !filters.length ? '' : 'none';
    });
}