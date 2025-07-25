"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Trophy,
  Users,
  Heart,
  Star,
  Target,
  Zap,
  Award,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Link from "next/link";
import { teams } from "../page";

const teamMembers = [
  {
    name: "Ahmed Rahman",
    role: "League Commissioner",
    image: "/images/team-member1.jpg",
    bio: "Leading the league with 15+ years of sports management experience",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Fatima Khan",
    role: "Operations Manager",
    image: "/images/team-member2.jpeg",
    bio: "Ensuring smooth operations and exceptional match-day experiences",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Mohammad Ali",
    role: "Technical Director",
    image: "/images/team-member3.jpg",
    bio: "Overseeing technical aspects and maintaining league standards",
    social: { twitter: "#", linkedin: "#" },
  },
];

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description:
      "We strive for the highest standards in every aspect of the league, from player development to fan experience.",
    color: "text-yellow-400",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "Football is more than a game - it's our passion and way of life that drives everything we do.",
    color: "text-red-400",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building stronger communities through the beautiful game and fostering lasting connections.",
    color: "text-blue-400",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Fair play and sportsmanship are at the core of everything we do, on and off the field.",
    color: "text-green-400",
  },
];

const achievements = [
  { number: "5", label: "Years Running", icon: Star },
  { number: "10", label: "Districts", icon: Target },
  { number: "200+", label: "Players", icon: Users },
  { number: "50K+", label: "Fans", icon: Heart },
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10" />
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/football-field.jpg)",
              scale: 1.1,
            }}
            animate={{ scale: [1.1, 1.15, 1.1] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </div>

        <motion.div
          className="relative z-20 text-center max-w-6xl mx-auto px-4"
          style={{ y: y1 }}
        >
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r mt-[5rem] from-green-400/20 to-yellow-400/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 mb-6">
              <Award className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold uppercase tracking-wider">
                Our Story
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">About</span>
            <br />
            <span className="gradient-text">Luton Sylhet</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover the story behind the Luton Sylhet Division Cup and our
            mission to promote football excellence across all participating
            districts through passion, dedication, and community spirit.
          </motion.p>

          {/* Achievement Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-2xl p-6 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-3 text-yellow-400" />
                <div className="text-3xl font-black gradient-text">
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {achievement.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Simple Field Lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute h-1 bg-gradient-to-r from-transparent via-green-400/10 to-transparent"
                style={{ top: `${i * 8}%`, left: 0, right: 0 }}
              />
            ))}
          </div>

          {/* Floating Icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-red-400/10 to-yellow-400/10 border border-red-400/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Gradient Waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(45deg, rgba(239, 68, 68, 0.03) 0%, transparent 50%)," +
                "linear-gradient(-45deg, rgba(251, 191, 36, 0.03) 0%, transparent 50%)",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8">
                <Target className="w-5 h-5 text-red-400" />
                <span className="text-red-400 font-semibold uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black mb-8">
                <span className="text-white">Uniting</span>{" "}
                <span className="gradient-text">Communities</span>
              </h2>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  The Luton Sylhet Division Cup was established to create a
                  competitive platform for football teams across ten districts,
                  fostering talent development and community engagement through
                  the beautiful game.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We believe in the power of football to unite communities,
                  develop character, and provide opportunities for players to
                  showcase their skills at the highest level while building
                  lasting friendships and memories.
                </motion.p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  { number: "10", label: "Districts United" },
                  { number: "200+", label: "Active Players" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center premium-card relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-green-400/10" />
                    <div className="text-4xl font-black gradient-text mb-2 relative z-10">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 uppercase tracking-wider relative z-10">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl group">
                <motion.img
                  src="/images/football-action.jpg"
                  alt="Football action"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating Trophy */}
                <motion.div
                  className="absolute top-8 right-8 glass-effect rounded-2xl p-4"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </motion.div>

                {/* Floating Star */}
                <motion.div
                  className="absolute bottom-8 left-8 glass-effect rounded-2xl p-4"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <Star className="w-8 h-8 text-blue-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"></div>
        <motion.div
          className="max-w-7xl mx-auto relative z-10"
          style={{ y: y2 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-400/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold uppercase tracking-wider">
                Core Values
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">What We</span>{" "}
              <span className="gradient-text">Stand For</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do in the league
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="premium-card hover-lift h-full group-hover:neon-glow">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mx-auto flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className={`w-10 h-10 ${value.color}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Formation Pattern (Reduced & Static) */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-blue-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Simple Aura */}
          <div
            className="absolute inset-0"
            style={{
              background: `
          radial-gradient(ellipse at 25% 50%, rgba(34, 197, 94, 0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
        `,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-400/20 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-8">
              <Users className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold uppercase tracking-wider">
                Leadership Team
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="text-white">Meet Our</span>{" "}
              <span className="gradient-text">Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The dedicated professionals behind the league's success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="premium-card hover-lift overflow-hidden group-hover:neon-glow relative">
                  <div className="relative overflow-hidden rounded-2xl mb-6 group">
                    <motion.img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Removed continuous rotating border */}
                    {/* Social Links (Static, Hover scale) */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        {["T", "L"].map((social, socialIndex) => (
                          <div
                            key={socialIndex}
                            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all transform hover:scale-110 cursor-pointer"
                          >
                            <span className="text-white text-sm">{social}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="text-center space-y-4 relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {member.name}
                    </h3>
                    <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full">
                      {member.role}
                    </Badge>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Districts Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-green-400/5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-green-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold uppercase tracking-wider">
                Participating Teams
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Ten</span>{" "}
              <span className="text-white">Districts</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Representing the finest football talent across the region
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {teams.map((team, index) => (
              <motion.div
                key={team.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  href={`/teams/${team.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden min-h-[220px] sm:min-h-[280px] cursor-pointer flex flex-col items-center justify-center space-y-4">
                    {/* Card Background Effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />

                    {/* Team Logo */}
                    <motion.div
                      className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br ${team.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                      transition={{ duration: 0.8 }}
                    >
                      <img
                        src={team.logo}
                        alt={`${team.name} Logo`}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      />
                    </motion.div>

                    {/* Team Name */}
                    <motion.h3
                      className="text-xs sm:text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      {team.name}
                    </motion.h3>

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      initial={false}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
