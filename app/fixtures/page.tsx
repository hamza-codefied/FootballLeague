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

const fixtures = [
  {
    id: 1,
    homeTeam: "Dakshin Surma",
    awayTeam: "Golapgonj",
    date: "2025-01-15",
    time: "16:00",
    venue: "Central Stadium",
    status: "upcoming",
    round: "Round 1",
    importance: "high",
  },
  {
    id: 2,
    homeTeam: "Fenchugonj",
    awayTeam: "Balaganj",
    date: "2025-01-16",
    time: "18:00",
    venue: "Sports Complex",
    status: "upcoming",
    round: "Round 1",
    importance: "medium",
  },
  {
    id: 3,
    homeTeam: "Jagannathpur",
    awayTeam: "Bishwanath",
    date: "2025-01-17",
    time: "15:30",
    venue: "District Ground",
    status: "upcoming",
    round: "Round 1",
    importance: "high",
  },
  {
    id: 4,
    homeTeam: "Beani Bazar",
    awayTeam: "Habigonj",
    date: "2025-01-18",
    time: "17:00",
    venue: "Municipal Stadium",
    status: "upcoming",
    round: "Round 1",
    importance: "low",
  },
  {
    id: 5,
    homeTeam: "Moulvibazar",
    awayTeam: "Osmaninagar",
    date: "2025-01-19",
    time: "16:30",
    venue: "Community Ground",
    status: "upcoming",
    round: "Round 1",
    importance: "medium",
  },
  {
    id: 6,
    homeTeam: "Golapgonj",
    awayTeam: "Fenchugonj",
    date: "2025-01-12",
    time: "16:00",
    venue: "Central Stadium",
    status: "completed",
    homeScore: 2,
    awayScore: 1,
    round: "Round 1",
    importance: "high",
  },
  {
    id: 7,
    homeTeam: "Balaganj",
    awayTeam: "Jagannathpur",
    date: "2025-01-13",
    time: "18:00",
    venue: "Sports Complex",
    status: "completed",
    homeScore: 0,
    awayScore: 3,
    round: "Round 1",
    importance: "medium",
  },
];

export default function FixturesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roundFilter, setRoundFilter] = useState("all");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);

  const filteredFixtures = fixtures.filter((fixture) => {
    const matchesSearch =
      fixture.homeTeam.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fixture.awayTeam.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || fixture.status === statusFilter;
    const matchesRound = roundFilter === "all" || fixture.round === roundFilter;

    return matchesSearch && matchesStatus && matchesRound;
  });

  const upcomingFixtures = filteredFixtures.filter(
    (f) => f.status === "upcoming"
  );
  const completedFixtures = filteredFixtures.filter(
    (f) => f.status === "completed"
  );

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
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-400/20 to-green-400/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 sm:px-6 sm:py-3">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span className="text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                Match Schedule
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 orbitron"
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
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16 max-w-sm sm:max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Trophy className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-yellow-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text orbitron">
                {fixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Total Matches
              </div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-green-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text orbitron">
                {upcomingFixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Upcoming
              </div>
            </div>
            <div className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 text-blue-400" />
              <div className="text-2xl sm:text-3xl font-black gradient-text orbitron">
                {completedFixtures.length}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">
                Completed
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-16 px-4 relative">
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
      </section>

      {/* Upcoming Fixtures */}
      {upcomingFixtures.length > 0 && (
        <section className="py-12 sm:py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-blue-400/20 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Coming Up
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 orbitron">
                <span className="text-white">Upcoming</span>{" "}
                <span className="gradient-text">Matches</span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-xl mx-auto px-2">
                Don't miss these exciting upcoming fixtures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {upcomingFixtures.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="premium-card hover-lift group-hover:neon-glow relative overflow-hidden p-4 sm:p-6">
                    {fixture.importance === "high" && (
                      <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    )}

                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                        UPCOMING
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                      >
                        {fixture.round}
                      </Badge>
                    </div>

                    <div className="text-center mb-6 sm:mb-8">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="text-center flex-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <span className="text-white font-bold text-base sm:text-lg">
                              H
                            </span>
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                            {fixture.homeTeam}
                          </div>
                        </div>

                        <div className="mx-3 sm:mx-6">
                          <div className="text-2xl sm:text-4xl font-black gradient-text orbitron group-hover:scale-110 transition-transform">
                            VS
                          </div>
                        </div>

                        <div className="text-center flex-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <span className="text-white font-bold text-base sm:text-lg">
                              A
                            </span>
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">
                            {fixture.awayTeam}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                          <span className="font-medium">
                            {new Date(fixture.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                          <span className="font-medium">{fixture.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-center text-xs sm:text-sm">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 text-blue-400" />
                        <span className="text-gray-400 font-medium">
                          {fixture.venue}
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 border-t border-gray-800">
                      <Button className="w-full btn-secondary group-hover:btn-primary text-xs sm:text-sm transition-all duration-300">
                        View Match Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Completed Fixtures */}
      {completedFixtures.length > 0 && (
        <section className="py-12 sm:py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-red-400/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-4 py-2 sm:px-6 sm:py-3 mb-6 sm:mb-8">
                <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                <span className="text-purple-400 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                  Match Results
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 orbitron">
                <span className="text-white">Recent</span>{" "}
                <span className="gradient-text">Results</span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-xl mx-auto px-2">
                Latest match results and final scores
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {completedFixtures.map((fixture, index) => (
                <motion.div
                  key={fixture.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="premium-card hover-lift group-hover:neon-glow p-4 sm:p-6">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                      <Badge className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                        COMPLETED
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-gray-600 text-gray-400 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm"
                      >
                        {fixture.round}
                      </Badge>
                    </div>

                    <div className="text-center mb-6 sm:mb-8">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="text-center flex-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <span className="text-white font-bold text-base sm:text-lg">
                              H
                            </span>
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3">
                            {fixture.homeTeam}
                          </div>
                          <div className="text-2xl sm:text-3xl font-black gradient-text orbitron">
                            {fixture.homeScore}
                          </div>
                        </div>

                        <div className="mx-3 sm:mx-6">
                          <div className="text-xl sm:text-2xl font-bold text-gray-500 orbitron">
                            -
                          </div>
                        </div>

                        <div className="text-center flex-1">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mx-auto flex items-center justify-center mb-2 sm:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <span className="text-white font-bold text-base sm:text-lg">
                              A
                            </span>
                          </div>
                          <div className="text-sm sm:text-lg font-bold text-white mb-2 sm:mb-3">
                            {fixture.awayTeam}
                          </div>
                          <div className="text-2xl sm:text-3xl font-black gradient-text orbitron">
                            {fixture.awayScore}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-gray-400 text-center">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-2 sm:space-x-6">
                        <div className="flex items-center justify-center">
                          <Calendar className="w-4 h-4 mr-1 text-yellow-400" />
                          <span>
                            {new Date(fixture.date).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-center">
                          <MapPin className="w-4 h-4 mr-1 text-green-400" />
                          <span>{fixture.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-800">
                      <Button className="w-full btn-secondary group-hover:btn-primary text-xs sm:text-sm transition-all duration-300">
                        Match Highlights
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredFixtures.length === 0 && (
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
