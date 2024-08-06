function showPage(pageId) {
    const pages = document.querySelectorAll('.container');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
