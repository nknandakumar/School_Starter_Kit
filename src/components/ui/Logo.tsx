import Link from 'next/link';

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href="/" className={`flex items-center gap-2 font-bold text-xl tracking-tight ${className}`}>
            {/* Placeholder Icon */}
            <div className="h-8 w-8 bg-secondary rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 2.174v-.224c0-.131.067-.248.182-.316l-2.464-1.185a.75.75 0 0 1 0-1.353l2.464-1.185a.75.75 0 0 1 .182-.316z" />
                    <path fillRule="evenodd" d="M12 2.25c.26.3-.2.8-.4 1L12 11.25l-2.25-2.5a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5l2.25 2.5a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0v2.5L12 8.25l-.4-1c.2-.2-.26-.7-.4-1H12z" clipRule="evenodd" />
                    <path d="M3 3a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zm10.293 9.293a1 1 0 0 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L14.586 9H7a1 1 0 1 0 0 2h7.586l-1.293 1.293z" />
                    <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                </svg>
                {/* Just a graduation cap or shield style icon */}
                <span className="font-heading text-lg">🎓</span>
            </div>
            <span className="font-heading">GEMS Academy</span>
        </Link>
    );
};
