"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Trophy, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  },
  {
    id: 2,
    homeTeam: "Fenchugonj",
    awayTeam: "Balaganj",
    date: "2025-01-16",
    time: "18:00",
    venue: "Sports Complex",
    status: "upcoming",
  },
  {
    id: 3,
    homeTeam: "Jagannathpur",
    awayTeam: "Bishwanath",
    date: "2025-01-17",
    time: "15:30",
    venue: "District Ground",
    status: "upcoming",
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Season 2025 Kicks Off with Exciting Matches",
    excerpt:
      "The new football season promises thrilling encounters between top district teams.",
    date: "2025-01-10",
    image: "/images/blog-news1.jpg",
  },
  {
    id: 2,
    title: "Player Transfers and New Signings",
    excerpt:
      "Latest updates on player movements across all participating teams.",
    date: "2025-01-08",
    image: "/images/blog-news2.jpg",
  },
  {
    id: 3,
    title: "Stadium Upgrades Complete",
    excerpt:
      "Major improvements to facilities enhance the match-day experience.",
    date: "2025-01-05",
    image: "/images/blog-news3.jpg",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-blue-900/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-football.jpg)" }}
        />

        <motion.div
          className="relative z-20 text-center max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LUTON SYLHET DIVISION CUP
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The Powerhouse of Champions{" "}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              <Link href="/fixtures">View Fixtures</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Football Animation */}
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 bg-white rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </section>

      {/* Upcoming Fixtures Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Upcoming <span className="text-red-500">Fixtures</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Don't miss the action-packed matches
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingFixtures.map((fixture, index) => (
              <motion.div
                key={fixture.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-center">
                      <Badge
                        variant="secondary"
                        className="bg-red-600 text-white"
                      >
                        {fixture.status.toUpperCase()}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {fixture.date}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-lg font-semibold text-white">
                          {fixture.homeTeam}
                        </div>
                        <div className="text-2xl font-bold text-red-500">
                          VS
                        </div>
                        <div className="text-lg font-semibold text-white">
                          {fixture.awayTeam}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {fixture.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {fixture.venue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              <Link href="/fixtures">View All Fixtures</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Trophy, label: "Teams", value: "10" },
              { icon: Users, label: "Players", value: "200+" },
              { icon: Calendar, label: "Matches", value: "45" },
              { icon: Star, label: "Season", value: "2025" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Latest <span className="text-red-500">News</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Stay updated with league happenings
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-gray-400 mb-2">
                      {post.date}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Get In <span className="text-red-500">Touch</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Have questions about the league? Want to get involved? Contact us
              today!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-400">info@districtleague.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-400">+880 123 456 789</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Address
                </h3>
                <p className="text-gray-400">District Sports Complex</p>
              </div>
            </div>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
