const query = Object.fromEntries(document.location.search.slice(1).split('&').map(el => el.split('=')));
const app = new App();

const scrollPositionKey = `ab-ars-calc:scroll:${location.pathname}${location.search}`;
let savedScrollPosition = null;
try {
    const saved = JSON.parse(sessionStorage.getItem(scrollPositionKey));
    if (Number.isFinite(saved?.x) && Number.isFinite(saved?.y)) {
        savedScrollPosition = saved;
    }
} catch (error) {
    // Scroll restoration is best-effort when browser storage is unavailable.
}

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

const saveScrollPosition = () => {
    try {
        sessionStorage.setItem(scrollPositionKey, JSON.stringify({
            x: window.scrollX,
            y: window.scrollY
        }));
    } catch (error) {
        // Keep the page usable if browser storage is unavailable.
    }
};

let scrollSaveScheduled = false;
window.addEventListener('scroll', () => {
    if (scrollSaveScheduled) return;
    scrollSaveScheduled = true;
    requestAnimationFrame(() => {
        scrollSaveScheduled = false;
        saveScrollPosition();
    });
}, { passive: true });
window.addEventListener('pagehide', saveScrollPosition);

app.init(query.line, query.track, query.n, query.import).then(() => {
    if (!savedScrollPosition) return;

    // The graph determines the page dimensions, so restore after it has rendered.
    requestAnimationFrame(() => requestAnimationFrame(() => {
        window.scrollTo(savedScrollPosition.x, savedScrollPosition.y);
    }));
});
