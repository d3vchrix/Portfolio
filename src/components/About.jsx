import { motion } from 'framer-motion'

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section id="about" className="py-20 md:py-32 bg-black text-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12"
                    >
                        About Me
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                                I'm a full-stack developer specializing in C# and modern web technologies, passionate about building practical, scalable systems that solve real business problems. I focus on creating efficient web applications from landing pages and dashboards to full business systems like POS, membership platforms, and email automation tools.
                            </p>

                            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                               I have hands-on experience working with clients and teams, including projects under Accenture and independent client work, where I helped deliver real-world solutions using ASP.NET MVC, APIs, and modern frontend frameworks.
                            </p>

                            <div className="space-y-3 pt-4">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-gray-300">Full-Stack Development</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-gray-300">System Design for business solutions </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-gray-300">Email systems</span>
                                </div>
                                 <div className="flex items-center space-x-3">
                                    <div className="w-2 h-2 bg-white rounded-full" />
                                    <span className="text-gray-300">Freelance & client-based development</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glass-effect p-6 md:p-8 rounded-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-6">Quick Facts</h3>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-gray-400 text-sm mb-2">Experience</p>
                                    <p className="font-semibold">2+ Years</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-2">Projects Completed</p>
                                    <p className="font-semibold">Real-world systems (POS, membership systems, landing pages, email platforms)</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-2">Industry Experience</p>
                                    <p className="font-semibold">Accenture + Freelance Development</p>
                                </div>
                                <div>
                                    <p className="text-gray-400 text-sm mb-2">Current Focus</p>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span className="text-gray-300  font-semibold">React + Firebase</span>
                                    </div>
                                     <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span className="text-gray-300  font-semibold">Building sellable systems (POS, reservation systems)</span>
                                    </div>
                                     <div className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-white rounded-full" />
                                        <span className="text-gray-300  font-semibold">Growing an IT consulting business</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default About
