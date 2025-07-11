"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Trophy,
  Users,
  MapPin,
  Star,
  Award,
  Target,
  Shield,
  Crown,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TeamDetailPage() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Mock team data - in real app, this would come from API based on ID
  const team = {
    id: 1,
    name: "Dakshin Surma",
    fullName: "Dakshin Surma Football Club",
    founded: "2018",
    location: "Dakshin Surma, Sylhet",
    stadium: "Surma District Stadium",
    capacity: "15,000",
    coach: "Mohammad Rafiqul Islam",
    captain: "Ahmed Hassan",
    colors: { primary: "from-red-500 to-red-600", accent: "text-red-400" },
    logo: "/images/dakshin.png",
      heroImage: "/placeholder.svg?height=400&width=800",
    description:
      "Dakshin Surma FC is one of the most prestigious football clubs in the Sylhet Division Cup. Founded in 2018, the club has quickly risen through the ranks to become a formidable force in district football.",
    achievements: ["District Champions 2023", "Division Cup Runners-up 2022"],
    stats: {
      matchesPlayed: 28,
      wins: 18,
      draws: 6,
      losses: 4,
      goalsFor: 52,
      goalsAgainst: 23,
      points: 60,
      position: 2,
    },
    players: [
      {
        id: 1,
        name: "Ahmed Hassan",
        position: "Forward",
        age: 26,
        goals: 15,
        assists: 8,
        matches: 25,
        isCaptain: true,
        isStarPlayer: true,
      },
      {
        id: 2,
        name: "Karim Rahman",
        position: "Midfielder",
        age: 24,
        goals: 8,
        assists: 12,
        matches: 28,
        isCaptain: false,
        isStarPlayer: true,
      },
      {
        id: 3,
        name: "Nasir Ahmed",
        position: "Defender",
        age: 28,
        goals: 3,
        assists: 4,
        matches: 26,
        isCaptain: false,
        isStarPlayer: true,
      },
      {
        id: 4,
        name: "Rashid Miah",
        position: "Goalkeeper",
        age: 30,
        goals: 0,
        assists: 0,
        matches: 28,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 5,
        name: "Salam Khan",
        position: "Defender",
        age: 25,
        goals: 2,
        assists: 3,
        matches: 24,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 6,
        name: "Habib Ullah",
        position: "Midfielder",
        age: 23,
        goals: 6,
        assists: 7,
        matches: 22,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 7,
        name: "Farhan Ali",
        position: "Forward",
        age: 22,
        goals: 10,
        assists: 5,
        matches: 20,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 8,
        name: "Zahidul Islam",
        position: "Midfielder",
        age: 27,
        goals: 7,
        assists: 9,
        matches: 26,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 9,
        name: "Iqbal Hossain",
        position: "Defender",
        age: 29,
        goals: 1,
        assists: 2,
        matches: 25,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 10,
        name: "Shakil Rahman",
        position: "Midfielder",
        age: 24,
        goals: 4,
        assists: 6,
        matches: 24,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 11,
        name: "Rafsan Chowdhury",
        position: "Forward",
        age: 23,
        goals: 9,
        assists: 4,
        matches: 23,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 12,
        name: "Sumon Ahmed",
        position: "Defender",
        age: 26,
        goals: 0,
        assists: 1,
        matches: 20,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 13,
        name: "Mokhlesur Rahman",
        position: "Goalkeeper",
        age: 31,
        goals: 0,
        assists: 0,
        matches: 18,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 14,
        name: "Fahim Miah",
        position: "Midfielder",
        age: 22,
        goals: 5,
        assists: 3,
        matches: 19,
        isCaptain: false,
        isStarPlayer: false,
      },
      {
        id: 15,
        name: "Jashim Uddin",
        position: "Defender",
        age: 28,
        goals: 2,
        assists: 1,
        matches: 21,
        isCaptain: false,
        isStarPlayer: false,
      },
    ],

    contact: {
      phone: "+880 123 456 789",
      email: "info@dakshinsurmafc.com",
      address: "Surma Stadium Road, Dakshin Surma, Sylhet",
    },
  };

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90 z-10" />
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/football-stadium.jpg)",
              scale: 1.1,
            }}
            animate={{ scale: [1.1, 1.15, 1.1] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Animated Elements */}
          <div className="absolute inset-0 z-5">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-2 h-2 bg-gradient-to-r ${team.colors.primary} rounded-full opacity-30`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          className="relative z-20 text-center max-w-6xl mx-auto px-4"
          style={{ y: y1 }}
        >
          {/* Team Logo & Name */}
          <motion.div
            className="mb-8 mt-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              style={{
                backgroundImage: `url(${team.logo})`,
                backgroundSize:"cover",
              }}
              className={`w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${team.colors.primary} rounded-full mx-auto flex items-center justify-center mb-6 shadow-2xl`}
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            ></motion.div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black mb-4">
              <span className="gradient-text">{team.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6">
              {team.fullName}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge
                className={`bg-gradient-to-r ${team.colors.primary} text-white px-4 py-2`}
              >
                Founded {team.founded}
              </Badge>
              <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2">
                Position #{team.stats.position}
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2">
                {team.stats.points} Points
              </Badge>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {[
              {
                label: "Matches",
                value: team.stats.matchesPlayed,
                icon: Calendar,
              },
              { label: "Wins", value: team.stats.wins, icon: Trophy },
              { label: "Goals", value: team.stats.goalsFor, icon: Target },
              { label: "Players", value: team.players.length, icon: Users },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-4 sm:p-6 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon
                  className={`w-6 h-6 sm:w-8 sm:h-8 ${team.colors.accent} mx-auto mb-2`}
                />
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button className="btn-secondary mb-2 mt-5 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: About Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-black mb-6">
                About <span className="gradient-text">{team.name}</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {team.description}
              </p>

              {/* Team Info Grid */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { label: "Founded", value: team.founded, icon: Calendar },
                  { label: "Location", value: team.location, icon: MapPin },
                  { label: "Stadium", value: team.stadium, icon: Shield },
                  { label: "Capacity", value: team.capacity, icon: Users },
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${team.colors.primary} rounded-lg flex items-center justify-center`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.label}</div>
                      <div className="text-white font-semibold">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Achievements */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Trophy className={`w-5 h-5 ${team.colors.accent} mr-2`} />
                  Achievements
                </h3>
                <div className="space-y-2">
                  {team.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 p-3 glass-effect rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Award className={`w-4 h-4 ${team.colors.accent}`} />
                      <span className="text-gray-300">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Team Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="premium-card">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Season Statistics
                </h3>

                {/* Performance Chart */}
                <div className="space-y-6 mb-8">
                  {[
                    {
                      label: "Win Rate",
                      value: Math.round(
                        (team.stats.wins / team.stats.matchesPlayed) * 100
                      ),
                      color: "from-green-500 to-green-600",
                    },
                    {
                      label: "Goals Scored",
                      value: Math.round(
                        (team.stats.goalsFor / team.stats.matchesPlayed) * 10
                      ),
                      color: "from-blue-500 to-blue-600",
                    },
                    {
                      label: "Defense",
                      value: Math.round(
                        ((team.stats.matchesPlayed - team.stats.goalsAgainst) /
                          team.stats.matchesPlayed) *
                          100
                      ),
                      color: "from-purple-500 to-purple-600",
                    },
                  ].map((stat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{stat.label}</span>
                        <span className="text-white font-semibold">
                          {stat.value}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3">
                        <motion.div
                          className={`h-3 bg-gradient-to-r ${stat.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Team <span className="gradient-text">Roster</span>
            </h2>
            <p className="text-gray-400 text-lg">Meet our talented squad</p>
          </motion.div>

          <div className="mb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.players.map((player, index) => (
                <motion.div
                  key={player.id}
                  className="premium-card hover-lift group relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {player.isCaptain && (
                    <div className="absolute top-4 right-4 z-10">
                      <Crown className="w-6 h-6 text-yellow-400" />
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      style={{
                        backgroundImage: "url('/images/player.png')",
                        backgroundSize: "cover",
                      }}
                      className={`w-20 h-20 bg-gradient-to-br ${team.colors.primary} rounded-full mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      {/* <span className="text-white font-bold text-2xl">
                        {player.name.charAt(0)}
                      </span> */}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {player.name}
                    </h4>
                    <p className={`${team.colors.accent} font-semibold`}>
                      {player.position}
                    </p>
                    {player.isCaptain && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white mt-2">
                        Captain
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold gradient-text">
                        {player.goals}
                      </div>
                      <div className="text-gray-400 text-xs">Goals</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">
                        {player.assists}
                      </div>
                      <div className="text-gray-400 text-xs">Assists</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold gradient-text">
                        {player.matches}
                      </div>
                      <div className="text-gray-400 text-xs">Matches</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-8">
              Get in <span className="gradient-text">Touch</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  value: team.contact.phone,
                  color: "from-green-500 to-green-600",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: team.contact.email,
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: team.contact.address,
                  color: "from-purple-500 to-purple-600",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="premium-card hover-lift text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-full mx-auto flex items-center justify-center mb-4`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {contact.label}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-6">
              {[
                { icon: Facebook, color: "from-blue-500 to-blue-600" },
                { icon: Twitter, color: "from-sky-500 to-sky-600" },
                { icon: Instagram, color: "from-pink-500 to-purple-600" },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center cursor-pointer`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
