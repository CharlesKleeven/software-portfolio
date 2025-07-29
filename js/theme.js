// Theme management
(function() {
    // Get current theme from localStorage or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme immediately to prevent flash
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        
        if (!themeToggle) return;
        
        // Set initial aria-label
        updateAriaLabel(currentTheme);
        
        // Handle theme toggle
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            // Update DOM
            document.documentElement.setAttribute('data-theme', newTheme);
            
            // Save to localStorage
            localStorage.setItem('theme', newTheme);
            
            // Update aria-label
            updateAriaLabel(newTheme);
        });
        
        function updateAriaLabel(theme) {
            const label = theme === 'dark' 
                ? 'Switch to light mode' 
                : 'Switch to dark mode';
            themeToggle.setAttribute('aria-label', label);
        }
    });
    
    // Handle system preference changes
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Only use system preference if no user preference is saved
        if (!localStorage.getItem('theme')) {
            const systemTheme = darkModeQuery.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', systemTheme);
        }
        
        // Listen for system preference changes
        darkModeQuery.addEventListener('change', function(e) {
            // Only apply if user hasn't set a preference
            if (!localStorage.getItem('theme')) {
                const systemTheme = e.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', systemTheme);
            }
        });
    }
})();