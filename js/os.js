(function() {
    const prefix = window.location.pathname.indexOf('index.html') >= 0? '' : '../';
    const cssLink = prefix + 'ratchet-2.0.2/dist/css/ratchet-theme-#os#.css';
    var operationalSystem = localStorage.getItem('os');
    if (['ios', 'android'].indexOf(operationalSystem) >= 0) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssLink.replace('#os#', operationalSystem);
        document.head.appendChild(link);
    }
})();