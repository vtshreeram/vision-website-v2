/**
 * SkipNavigation - Accessibility component for keyboard users
 * Shows a "Skip to main content" link when focused
 */
const SkipNavigation = () => {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:outline-none"
        >
            Skip to main content
        </a>
    );
};

export default SkipNavigation;
