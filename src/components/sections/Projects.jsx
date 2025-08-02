import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-28">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounde-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-lg font-bold mb-2">Podcast Streaming Service</h3>
                        <p className="text-gray-400 mb-4">
                            A full-stack podcast streaming platform that allows users to upload, stream, and explore audio content. The app provides a clean, responsive UI with light/dark mode toggle, podcast upload functionality, and a dynamic podcast list pulled from the backend.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "MongoDB", "Express.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://podcast-streaming-2.onrender.com" className="text-blue-400 hover:text-blue-300 transition-colors my-4"> View Project → </a>
                        </div>
                    </div>

                    <div className="p-6 rounde-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-lg font-bold mb-2">Mental Health Support Platform</h3>
                        <p className="text-gray-400 mb-4">
                            A web-based platform designed to provide mental health support through resources, self-assessment tools, and community interaction. The project aims to raise awareness, reduce stigma, and offer a safe space for users seeking help or information related to mental well-being.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "SQL", "Express.js", "Python"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            
                        </div>
                    </div>

                    <div className="p-6 rounde-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-lg font-bold mb-2">Weather Website</h3>
                        <p className="text-gray-400 mb-4">
                            A responsive weather web application using HTML, CSS, and JavaScript that displays real-time weather conditions and a five-day forecast for any city. The app fetches live data such as temperature, humidity, wind speed, and weather conditions through an API and presents it with a clean, us
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["HTML", "CSS", "JS"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            
                        </div>
                    </div>

                    <div className="p-6 rounde-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                        <h3 className="text-lg font-bold mb-2">AI-Powered Threat Intelligence Feed Aggregator</h3>
                        <p className="text-gray-400 mb-4">
                            AI-Powered Threat Intelligence Feed Aggregator that collects threat feeds (CISA, Microsoft, community blogs), extracts IOCs (IPs, domains, hashes, URLs, CVEs) using regex, and applies AI for summaries, trend analysis, and severity scoring. Features a real-time glassmorphism dashboard, JSON export, search/filter, and live threat simulation.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "Express.js"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-md transition"
                            >
                                {tech}
                            </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            
                        </div>
                    </div>


                </div>
            </div>
            </RevealOnScroll>
        </section>
    )
}