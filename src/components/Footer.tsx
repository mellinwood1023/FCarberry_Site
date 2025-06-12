import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-white py-6 mt-10 absolute inset-x-0 z-50">
            <div className="container mx-auto text-center">
                <div className="flex flex-col items-center space-y-2 mt-4">
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.facebook.com/profile.php?id=100057614132217" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-400 transition-colors duration-200 cursor-pointer font-semibold underline focus:outline focus:ring-2 focus:ring-blue-400 active:scale-95">
                            <span className="sr-only">Facebook</span>
                            Facebook
                        </a>
                        <a href="https://www.remax.com/real-estate-agents/frederick-carberry-north-andover-ma/101985044" target="_blank" rel="noopener noreferrer" aria-label="Re/Max" className="hover:text-pink-400 transition-colors duration-200 cursor-pointer font-semibold underline focus:outline focus:ring-2 focus:ring-pink-400 active:scale-95">
                            <span className="sr-only">Re/Max</span>
                            Re/Max
                        </a>
                        <a href="https://www.linkedin.com/in/fred-carberry-642299176/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors duration-200 cursor-pointer font-semibold underline focus:outline focus:ring-2 focus:ring-blue-300 active:scale-95">
                            <span className="sr-only">LinkedIn</span>
                            LinkedIn
                        </a>
                    </div>
                    <p className="text-sm text-center">
                        &copy; {new Date().getFullYear()} Frederick Carberry. All rights reserved.
                    </p>
                    <p className="text-xs mt-2 text-center">
                        Built with ❤️ by Magdalene Ellinwood, Junior Software Developer
                    </p>
                    <p className="text-xs mt-2 text-center">
                        <Link to="/privacypolicy" className="text-white hover:underline cursor-pointer">Privacy Policy</Link> | 
                        <Link to="/termsofservice" className="text-white hover:underline ml-2 cursor-pointer">Terms of Service</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;