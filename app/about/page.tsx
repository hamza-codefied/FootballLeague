"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Heart, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const teamMembers = [
  {
    name: "Ahmed Rahman",
    role: "League Commissioner",
    image: "/images/team-member1.jpg",
  },
  {
    name: "Fatima Khan",
    role: "Operations Manager",
    image: "/images/team-member2.jpeg",
  },
  {
    name: "Mohammad Ali",
    role: "Technical Director",
    image: "/images/team-member3.jpg",
  },
]

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description: "We strive for the highest standards in every aspect of the league.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Football is more than a game - it's our passion and way of life.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building stronger communities through the beautiful game.",
  },
  {
    icon: Star,
    title: "Integrity",
    description: "Fair play and sportsmanship are at the core of everything we do.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-green-500">Luton Sylhet</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover the story behind the Luton Sylhet Division Cup and our mission to promote football excellence
              across all participating districts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-white">
                Our <span className="text-red-500">Mission</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                The District Football League was established to create a competitive platform for football teams across
                ten districts, fostering talent development and community engagement through the beautiful game.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                We believe in the power of football to unite communities, develop character, and provide opportunities
                for players to showcase their skills at the highest level.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">10</div>
                  <div className="text-gray-400">Districts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">200+</div>
                  <div className="text-gray-400">Players</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img src="/images/football-action.jpg" alt="Football action" className="rounded-lg shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-red-500">Values</span>
            </h2>
            <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <value.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Meet Our <span className="text-red-500">Team</span>
            </h2>
            <p className="text-gray-400 text-lg">The dedicated people behind the league</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-700 hover:border-red-500 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                    <p className="text-red-400 font-medium">{member.role}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Participating Districts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Participating <span className="text-red-500">Districts</span>
            </h2>
            <p className="text-gray-400 text-lg">Ten districts competing for glory</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "Dakshin Surma",
              "Golapgonj",
              "Fenchugonj",
              "Balaganj",
              "Jagannathpur",
              "Bishwanath",
              "Beani Bazar",
              "Habigonj",
              "Moulvibazar",
              "Osmaninagar",
            ].map((district, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <CardContent className="p-4 text-center">
                    <Trophy className="w-8 h-8 mx-auto mb-2 text-red-500" />
                    <h3 className="text-white font-semibold text-sm">{district}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
