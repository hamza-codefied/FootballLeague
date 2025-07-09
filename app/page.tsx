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
import { useQuery } from "@tanstack/react-query";
import { useFixtures } from "@/hooks/use-fixtures";

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

  const {
    data: fixtures,
    isLoading: fixturesLoading,
    isFetching: fixturesFetching,
    isError: fixturesError,
    refetch: refetchFixtures,
  } = useFixtures();

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 py-10 sm:py-0">
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
          className="relative z-20 text-center max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto px-2 sm:px-4"
          style={{ y: y1 }}
        >
          <motion.div
            className="mb-4 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-green-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-xs sm:text-sm">
                SEASON 2025 LIVE
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="block gradient-text">LUTON SYLHET</span>
            <motion.span
              className="block text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              DIVISION CUP
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-300 max-w-xs sm:max-w-lg md:max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Where legends are born and champions rise. Experience the ultimate
            football competition across ten districts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <Button className="btn-primary text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group">
              <Link href="/fixtures" className="flex items-center space-x-2">
                <span>View Fixtures</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button className="btn-secondary text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Watch Highlights</span>
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-xs sm:max-w-2xl mx-auto"
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
                className="text-center glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-xl sm:text-3xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Upcoming Fixtures Section */}
      <section className="py-20 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-12 sm:mb-16 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                  "0 0 40px rgba(239, 68, 68, 0.5)",
                  "0 0 20px rgba(239, 68, 68, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
              <span className="text-xs sm:text-sm md:text-base text-red-400 font-semibold uppercase tracking-wider">
                Upcoming Matches
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
              <span className="gradient-text">Next</span>{" "}
              <span className="text-white">Fixtures</span>
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto">
              Don't miss the electrifying matches coming your way
            </p>
          </motion.div>

          {/* Fixtures Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {fixtures?.map((fixture, index) => (
              <motion.div
                key={fixture.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden min-h-[350px]">
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

                  <div className="flex justify-between items-center mb-4 sm:mb-6 relative z-10 text-xs sm:text-sm">
                    <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full">
                      UPCOMING
                    </Badge>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {new Date(fixture.fixture_date).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Teams */}
                  <div className="text-center mb-6 sm:mb-8 relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="text-center flex-1">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-white font-bold text-base sm:text-lg">
                            H
                          </span>
                        </motion.div>
                        <div className="text-sm font-bold text-white">
                          {fixture.home_team}
                        </div>
                      </div>

                      <div className="mx-4 sm:mx-6">
                        <motion.div className="text-xl font-black gradient-text">
                          VS
                        </motion.div>
                      </div>

                      <div className="text-center flex-1">
                        <motion.div
                          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform"
                          whileHover={{ rotate: -360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-white font-bold text-base sm:text-lg">
                            A
                          </span>
                        </motion.div>
                        <div className="text-sm font-bold text-white">
                          {fixture.away_team}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 text-gray-400 relative z-10 text-xs sm:text-sm">
                    <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-400" />
                        <span>{fixture.fixture_time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-green-400" />
                        <span className="text-xs line-clamp-1">
                          {fixture.venue}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800 relative z-10">
                    <Button className="w-full btn-secondary group-hover:btn-primary transition-all duration-300 text-xs sm:text-sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 sm:mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button className="btn-primary text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
              <Link href="/fixtures" className="flex items-center space-x-2">
                <span>View All Fixtures</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-28 md:py-32 relative overflow-hidden">
        {/* Hexagon Pattern (optimized count) */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 sm:w-16 sm:h-16"
              style={{
                left: `${(i % 6) * 16}%`,
                top: `${Math.floor(i / 6) * 20}%`,
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                background: "linear-gradient(45deg, #d4af37, #1a5f3f)",
              }}
              animate={{
                rotate: [0, 360],
                opacity: [0.08, 0.2, 0.08],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Flowing Lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-50/10 to-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-52 h-52 sm:w-72 sm:h-72 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(26, 95, 63, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />

        {/* Content */}
        <motion.div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6"
              animate={{
                textShadow: [
                  "0 0 12px rgba(212, 175, 55, 0.5)",
                  "0 0 20px rgba(212, 175, 55, 0.8)",
                  "0 0 12px rgba(212, 175, 55, 0.5)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-white">League</span>{" "}
              <span className="gradient-text">Statistics</span>
            </motion.h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
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
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden p-6 sm:p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <stat.icon
                      className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 ${stat.color}`}
                    />
                  </motion.div>
                  <div className="text-2xl sm:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 uppercase tracking-wider text-xs sm:text-sm font-semibold">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Blog Section */}
      <section className="py-20 sm:py-28 md:py-32 px-4 relative overflow-hidden">
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

            <h2 className="text-5xl md:text-6xl font-black mb-6">
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
      <section className="py-24 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Circuit lines */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
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
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Rotating Shapes */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
              borderRadius: "30%",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1))",
              borderRadius: "40%",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Energy Pulses */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
          radial-gradient(circle at 30% 30%, rgba(59,130,246,0.1), transparent 50%),
          radial-gradient(circle at 70% 70%, rgba(147,51,234,0.1), transparent 50%)
        `,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-400/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-6 py-2 md:py-3 mb-6 md:mb-8"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(59,130,246,0.3)",
                  "0 0 20px rgba(59,130,246,0.6)",
                  "0 0 10px rgba(59,130,246,0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-blue-400 text-sm md:text-base font-semibold uppercase tracking-wide">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(59,130,246,0.5)",
                  "0 0 40px rgba(147,51,234,0.8)",
                  "0 0 20px rgba(59,130,246,0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Contact <span className="gradient-text">Us</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto px-2">
              Have questions about the league? Want to get involved? We’d love
              to hear from you!
            </p>
          </motion.div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Info + Social */}
            <div className="space-y-10">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    info: "info@districtleague.com",
                    description: "For general inquiries",
                    color: "text-blue-400",
                    bg: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    info: "+880 123 456 789",
                    description: "Speak to our team",
                    color: "text-green-400",
                    bg: "from-green-500 to-green-600",
                  },
                  {
                    icon: MapPin,
                    title: "Visit Us",
                    info: "District Sports Complex",
                    description: "Sylhet, Bangladesh",
                    color: "text-purple-400",
                    bg: "from-purple-500 to-purple-600",
                  },
                ].map((contact, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="premium-card hover-lift group p-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${contact.bg} rounded-xl flex items-center justify-center`}
                      >
                        <contact.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base md:text-lg font-bold text-white group-hover:gradient-text mb-1">
                          {contact.title}
                        </h3>
                        <p
                          className={`text-sm md:text-base font-semibold ${contact.color}`}
                        >
                          {contact.info}
                        </p>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="premium-card py-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 text-center">
                  Follow Us
                </h3>
                <div className="flex justify-center flex-wrap gap-4">
                  {[
                    { name: "Facebook", color: "from-blue-500 to-blue-600" },
                    { name: "Twitter", color: "from-sky-500 to-sky-600" },
                    { name: "Instagram", color: "from-pink-500 to-purple-600" },
                    { name: "YouTube", color: "from-red-500 to-red-600" },
                  ].map((social, index) => (
                    <motion.div
                      key={index}
                      className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      {social.name[0]}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
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

                <h3 className="text-2xl font-bold text-white mb-8 text-center relative z-10">
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
            <h2 className="text-5xl md:text-6xl font-black mb-8">
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
