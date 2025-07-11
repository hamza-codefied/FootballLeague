"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Filter,
  Search,
  Trophy,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useFixtures } from "@/hooks/use-fixtures";
import { fixtures } from "../page";
import Image from "next/image";

export default function FixturesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roundFilter, setRoundFilter] = useState("all");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  // const { data: fixtures = [] } = useFixtures();

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 z-10" />
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url(/images/football-stadium.jpg)",
              scale: 1.1,
            }}
            animate={{ scale: [1.1, 1.15, 1.1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-20 text-center max-w-6xl mx-auto"
          style={{ y: y1 }}
        >
          <motion.div
            className="mb-6 mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex mt-24 items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-green-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 sm:px-6 sm:py-3">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Match Schedule
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white">Match</span>
            <br />
            <span className="gradient-text">Fixtures</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Complete schedule of all matches in the Luton Sylhet Division Cup.
            Don’t miss any of the action-packed encounters.
          </motion.p>

          {/* Quick Stats */}
          {/* <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16 max-w-sm sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-yellow-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text">
                {fixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Total Matches
              </div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-green-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text">
                {fixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Upcoming
              </div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text">
                {fixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Completed
              </div>
            </div>
          </motion.div> */}
        </motion.div>
      </section>

      {/* Filters Section */}
      {/* <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass-effect rounded-3xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Filter Matches
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Find exactly what you're looking for
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-xl w-full sm:w-64 focus:border-yellow-400 transition-colors"
                  />
                </div>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-xl w-full sm:w-40 focus:border-yellow-400">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 rounded-xl">
                    <SelectItem value="all">All Matches</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={roundFilter} onValueChange={setRoundFilter}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-600 text-white rounded-xl w-full sm:w-40 focus:border-yellow-400">
                    <SelectValue placeholder="Round" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 rounded-xl">
                    <SelectItem value="all">All Rounds</SelectItem>
                    <SelectItem value="Round 1">Round 1</SelectItem>
                    <SelectItem value="Round 2">Round 2</SelectItem>
                    <SelectItem value="Semi Final">Semi Final</SelectItem>
                    <SelectItem value="Final">Final</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Upcoming Fixtures */}
      <section className="py-20 sm:py-24 md:py-32 px-4 relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black/30" />

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(239, 68, 68, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Heading */}
          <motion.div
            className="text-center mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-6 py-3 mb-8"
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
              <span className="text-red-400 font-bold uppercase tracking-wider text-sm">
                Match Day Schedule
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Upcoming</span>{" "}
              <span className="text-white">Fixtures</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Don't miss the electrifying matches coming your way
            </p>
          </motion.div>

          {/* Fixtures List */}
          <div className="space-y-6">
            {fixtures &&
              fixtures?.length > 0 &&
              fixtures?.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  {/* Match Date & Time Header */}
                  <motion.div
                    className="text-center mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-full px-6 py-2 border border-gray-600/30">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      <span className="text-white font-semibold">
                        {new Date(fixture.fixture_date).toLocaleDateString(
                          "en-US",
                          {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                      <Clock className="w-4 h-4 text-green-400" />
                      <span className="text-white font-semibold">
                        {fixture.fixture_time}
                      </span>
                    </div>
                  </motion.div>

                  {/* Match Strip */}
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900/80 via-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 group-hover:border-yellow-400/50 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 flex items-center justify-between p-6 sm:p-8">
                      {/* Home Team */}
                      <motion.div
                        className="flex items-center space-x-4 flex-1"
                        whileHover={{ x: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Team Logo */}
                        <motion.div className="relative">
                          <div className="w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                            <Image
                              src={fixture.home_team_logo}
                              alt={fixture.home_team}
                              width={64}
                              height={64}
                              className="rounded-full"
                            />
                          </div>
                          {/* Hexagon Border Effect */}
                          <div className="absolute inset-0 rounded-full border-2 border-red-400/50 animate-pulse" />
                        </motion.div>

                        {/* Team Name */}
                        <div className="text-left">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                            {fixture.home_team}
                          </h3>
                          <p className="text-gray-400 text-sm uppercase tracking-wider">
                            Home
                          </p>
                        </div>
                      </motion.div>

                      {/* VS Section */}
                      <motion.div
                        className="flex flex-col items-center mx-6 sm:mx-8"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-black text-lg sm:text-xl px-4 py-2 rounded-full shadow-lg"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(234, 179, 8, 0.5)",
                              "0 0 30px rgba(234, 179, 8, 0.8)",
                              "0 0 20px rgba(234, 179, 8, 0.5)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                        >
                          VS
                        </motion.div>

                        {/* Match Status */}
                        <motion.div
                          className="mt-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.5 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                            Upcoming
                          </span>
                        </motion.div>
                      </motion.div>

                      {/* Away Team */}
                      <motion.div
                        className="flex items-center space-x-4 flex-1 justify-end"
                        whileHover={{ x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Team Name */}
                        <div className="text-right">
                          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {fixture.away_team}
                          </h3>
                          <p className="text-gray-400 text-sm uppercase tracking-wider">
                            Away
                          </p>
                        </div>

                        {/* Team Logo */}
                        <motion.div className="relative">
                          <div className="w-16 h-16 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                            <Image
                              src={fixture.away_team_logo}
                              alt={fixture.away_team}
                              width={64}
                              height={64}
                              className="rounded-full"
                            />
                          </div>
                          {/* Hexagon Border Effect */}
                          <div className="absolute inset-0 rounded-full border-2 border-blue-400/50 animate-pulse" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Venue Info */}
                    <motion.div
                      className="border-t border-gray-700/50 px-6 sm:px-8 py-4 bg-gray-800/30"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-center space-x-6 text-gray-400">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-green-400" />
                          <span className="text-sm font-medium">
                            {fixture.venue}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* No Results */}
      {fixtures.length === 0 && (
        <section className="py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="premium-card max-w-md mx-auto"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl mx-auto flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                No Fixtures Found
              </h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search or filter criteria to find matches
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("all");
                  setRoundFilter("all");
                }}
                className="btn-primary"
              >
                Clear All Filters
              </Button>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
