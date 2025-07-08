"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  Users,
  Play,
  ArrowRight,
  Zap,
  Target,
  Award,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const upcomingFixtures = [
  {
    id: 1,
    homeTeam: "Dakshin Surma",
    awayTeam: "Golapgonj",
    date: "2025-01-15",
    time: "16:00",
    venue: "Central Stadium",
    status: "upcoming",
    homeScore: null,
    awayScore: null,
  },
  {
    id: 2,
    homeTeam: "Fenchugonj",
    awayTeam: "Balaganj",
    date: "2025-01-16",
    time: "18:00",
    venue: "Sports Complex",
    status: "upcoming",
    homeScore: null,
    awayScore: null,
  },
  {
    id: 3,
    homeTeam: "Jagannathpur",
    awayTeam: "Bishwanath",
    date: "2025-01-17",
    time: "15:30",
    venue: "District Ground",
    status: "upcoming",
    homeScore: null,
    awayScore: null,
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Season 2025 Kicks Off with Spectacular Opening Ceremony",
    excerpt:
      "The new football season promises thrilling encounters between top district teams with enhanced facilities and new talent.",
    date: "2025-01-10",
    image: "/images/blog-news1.jpg",
    category: "News",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Major Player Transfers Shake Up League Dynamics",
    excerpt:
      "Latest updates on player movements across all participating teams as clubs prepare for the upcoming season.",
    date: "2025-01-08",
    image: "/images/blog-news2.jpg",
    category: "Transfers",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "State-of-the-Art Stadium Upgrades Complete",
    excerpt:
      "Major improvements to facilities enhance the match-day experience with new technology and amenities.",
    date: "2025-01-05",
    image: "/images/blog-news3.jpg",
    category: "Infrastructure",
    readTime: "4 min read",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -150]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
          <motion.div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/images/hero-football.jpg)",
              scale: 1.1,
            }}
            animate={{ scale: [1.1, 1.15, 1.1] }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Animated Particles */}
          <div className="absolute inset-0 z-5">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
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

        {/* Hero Content */}
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-green-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">
                SEASON 2025 LIVE
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 orbitron"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block gradient-text">LUTON SYLHET</span>
            <motion.span
              className="block text-white text-4xl md:text-5xl lg:text-6xl mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              DIVISION CUP
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Where legends are born and champions rise. Experience the ultimate
            football competition across ten districts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button className="btn-primary text-lg px-8 py-4 group">
              <Link href="/fixtures" className="flex items-center space-x-2">
                <span>View Fixtures</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button className="btn-secondary text-lg px-8 py-4 group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Watch Highlights</span>
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            {[
              { number: "10", label: "Teams" },
              { number: "200+", label: "Players" },
              { number: "45", label: "Matches" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass-effect rounded-2xl p-6 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold gradient-text orbitron">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Fixtures Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* INSANE Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Stadium Background */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(/images/football-stadium.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Floating Football Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-green-400/20 to-yellow-400/20 border border-green-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                x: [0, Math.random() * 30 - 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Gradient Waves */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-yellow-400/5"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Pulsing Circles */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/10 to-transparent"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-yellow-400/10 to-transparent"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
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
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 40px rgba(239, 68, 68, 0.5)",
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Calendar className="w-5 h-5 text-red-400" />
              <span className="text-red-400 font-semibold uppercase tracking-wider">
                Upcoming Matches
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 orbitron">
              <span className="gradient-text">Next</span>{" "}
              <span className="text-white">Fixtures</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't miss the electrifying matches coming your way
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingFixtures.map((fixture, index) => (
              <motion.div
                key={fixture.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden">
                  {/* Card Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full">
                      UPCOMING
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(fixture.date).toLocaleDateString()}
                    </div>
                  </div>

                  <div className="text-center mb-8 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-center flex-1">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-white font-bold text-lg">
                            H
                          </span>
                        </motion.div>
                        <div className="text-lg font-bold text-white">
                          {fixture.homeTeam}
                        </div>
                      </div>

                      <div className="mx-6">
                        <motion.div
                          className="text-3xl font-black gradient-text orbitron"
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          VS
                        </motion.div>
                      </div>

                      <div className="text-center flex-1">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: -360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-white font-bold text-lg">
                            A
                          </span>
                        </motion.div>
                        <div className="text-lg font-bold text-white">
                          {fixture.awayTeam}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-400 relative z-10">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                        <span>{fixture.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-green-400" />
                        <span>{fixture.venue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-800 relative z-10">
                    <Button className="w-full btn-secondary group-hover:btn-primary transition-all duration-300">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary text-lg px-8 py-4">
              <Link href="/fixtures" className="flex items-center space-x-2">
                <span>View All Fixtures</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 relative overflow-hidden">
        {/* MIND-BLOWING Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Hexagon Pattern */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16"
                style={{
                  left: `${(i % 10) * 10}%`,
                  top: `${Math.floor(i / 10) * 20}%`,
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  background: "linear-gradient(45deg, #d4af37, #1a5f3f)",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Flowing Energy Lines */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(45deg, transparent 40%, rgba(212, 175, 55, 0.1) 50%, transparent 60%),
                linear-gradient(-45deg, transparent 40%, rgba(26, 95, 63, 0.1) 50%, transparent 60%)
              `,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Pulsing Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(26, 95, 63, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 relative z-10"
          style={{ y: y2 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 orbitron"
              animate={{
                textShadow: [
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                  "0 0 40px rgba(212, 175, 55, 0.8)",
                  "0 0 20px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-white">League</span>{" "}
              <span className="gradient-text">Statistics</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Trophy,
                label: "Teams",
                value: "10",
                color: "text-yellow-400",
              },
              {
                icon: Users,
                label: "Players",
                value: "200+",
                color: "text-blue-400",
              },
              {
                icon: Calendar,
                label: "Matches",
                value: "45",
                color: "text-green-400",
              },
              {
                icon: Award,
                label: "Season",
                value: "2025",
                color: "text-red-400",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden">
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.5,
                    }}
                  />

                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon
                      className={`w-16 h-16 mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform`}
                    />
                  </motion.div>

                  <motion.div
                    className="text-4xl font-black gradient-text orbitron mb-3"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.3,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 uppercase tracking-wider font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* SPECTACULAR Background Effects */}
        <div className="absolute inset-0">
          {/* Animated News Paper Pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(212, 175, 55, 0.1) 10px,
                  rgba(212, 175, 55, 0.1) 20px
                )
              `,
            }}
            animate={{
              backgroundPosition: ["0px 0px", "40px 40px"],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Floating News Icons */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 6 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Gradient Waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
              `,
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
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
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-400/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                  "0 0 40px rgba(147, 51, 234, 0.6)",
                  "0 0 20px rgba(147, 51, 234, 0.3)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <Target className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-semibold uppercase tracking-wider">
                Latest Updates
              </span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6 orbitron">
              <span className="text-white">League</span>{" "}
              <span className="gradient-text">News</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest happenings in the league
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="premium-card hover-lift overflow-hidden group-hover:neon-glow relative">
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="relative overflow-hidden rounded-xl mb-6">
                    <motion.img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Floating Category Badge */}
                    <motion.div
                      className="absolute top-4 left-4"
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        {post.category}
                      </Badge>
                    </motion.div>

                    <div className="absolute bottom-4 right-4 text-white text-xs bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {post.readTime}
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="text-sm text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <motion.h3
                      className="text-xl font-bold text-white group-hover:gradient-text transition-all duration-300 line-clamp-2"
                      whileHover={{ scale: 1.02 }}
                    >
                      {post.title}
                    </motion.h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>

                    <Button className="btn-secondary w-full group-hover:btn-primary transition-all duration-300">
                      Read More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        {/* ABSOLUTELY INSANE Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-blue-400 to-purple-400"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  height: `${20 + Math.random() * 40}px`,
                }}
                animate={{
                  scaleY: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Rotating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-20 w-32 h-32"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))",
              borderRadius: "30%",
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
              borderRadius: "40%",
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />

          {/* Energy Pulses */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
              `,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />

          {/* Floating Communication Icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-8 h-8 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-400/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-3 mb-8"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(59, 130, 246, 0.6)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6 orbitron"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-white">Contact</span>{" "}
              <span className="gradient-text">Us</span>
            </motion.h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about the league? Want to get involved? We'd love
              to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="grid gap-8">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "info@districtleague.com",
                    description: "Get in touch for general inquiries",
                    color: "text-blue-400",
                    bgColor: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+880 123 456 789",
                    description: "Speak directly with our team",
                    color: "text-green-400",
                    bgColor: "from-green-500 to-green-600",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "District Sports Complex",
                    description: "Sylhet, Bangladesh",
                    color: "text-purple-400",
                    bgColor: "from-purple-500 to-purple-600",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden">
                      {/* Card Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: index * 1,
                        }}
                      />

                      <div className="flex items-center space-x-4 relative z-10">
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${contact.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                              "0 0 30px rgba(59, 130, 246, 0.5)",
                              "0 0 20px rgba(59, 130, 246, 0.3)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.5,
                          }}
                        >
                          <contact.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1 orbitron group-hover:gradient-text transition-all duration-300">
                            {contact.title}
                          </h3>
                          <p
                            className={`text-lg font-semibold ${contact.color} mb-1`}
                          >
                            {contact.info}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="premium-card relative overflow-hidden">
                  {/* Background Animation */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                  />

                  <h3 className="text-xl font-bold text-white mb-6 orbitron text-center relative z-10">
                    Follow Us
                  </h3>
                  <div className="flex justify-center space-x-4 relative z-10">
                    {[
                      { name: "Facebook", color: "from-blue-500 to-blue-600" },
                      { name: "Twitter", color: "from-sky-500 to-sky-600" },
                      {
                        name: "Instagram",
                        color: "from-pink-500 to-purple-600",
                      },
                      { name: "YouTube", color: "from-red-500 to-red-600" },
                    ].map((social, index) => (
                      <motion.div
                        key={index}
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(59, 130, 246, 0.3)",
                            "0 0 20px rgba(59, 130, 246, 0.5)",
                            "0 0 10px rgba(59, 130, 246, 0.3)",
                          ],
                        }}
                        transition={{
                          boxShadow: {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.3,
                          },
                          scale: { duration: 0.3 },
                          rotate: { duration: 0.5 },
                        }}
                      >
                        <span className="text-white font-bold text-sm">
                          {social.name[0]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="premium-card hover-lift relative overflow-hidden">
                {/* Form Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
                />

                <h3 className="text-2xl font-bold text-white mb-8 orbitron text-center relative z-10">
                  <span className="gradient-text">Send Message</span>
                </h3>

                <form className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Name
                      </label>
                      <motion.input
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="Your full name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">
                        Email
                      </label>
                      <motion.input
                        type="email"
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Subject
                    </label>
                    <motion.input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 font-medium mb-2">
                      Message
                    </label>
                    <motion.textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full btn-primary text-lg py-4 group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Button Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                    <span className="flex items-center justify-center space-x-2 relative z-10">
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="premium-card overflow-hidden relative">
              {/* Map Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="text-center mb-8 relative z-10">
                <h3 className="text-2xl font-bold text-white orbitron mb-2">
                  <span className="gradient-text">Find Us</span>
                </h3>
                <p className="text-gray-400">
                  Located at the heart of Sylhet's sports district
                </p>
              </div>

              <div className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <MapPin className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      District Sports Complex
                    </h4>
                    <p className="text-gray-400">Sylhet, Bangladesh</p>
                  </div>
                </div>

                {/* Animated Radar Effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-yellow-400/30 rounded-full"
                  style={{ transform: "translate(-50%, -50%)" }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Animated Dots */}
                <motion.div
                  className="absolute top-4 left-4 w-3 h-3 bg-yellow-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-8 w-2 h-2 bg-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 0.9, 0.4],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 2,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-green-400/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-8 orbitron">
              <span className="text-white">Ready to</span>{" "}
              <span className="gradient-text">Join?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Be part of the most exciting football league in the region.
              Register now and don't miss any action!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                <Link href="/signup">Join the League</Link>
              </Button>
              <Button className="btn-secondary text-lg px-8 py-4">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
