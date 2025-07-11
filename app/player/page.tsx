"use client";
import { useRef, useState } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Camera,
  Edit3,
  Save,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Trophy,
  Target,
  Activity,
  Shield,
  Star,
  Award,
  X,
  Settings,
  Eye,
  EyeOff,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/navigation";
import Image from "next/image";

export default function DashboardPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [showPassword, setShowPassword] = useState(false);
  const [profileData, setProfileData] = useState({
    // Personal Information
    firstName: "Ahmed",
    lastName: "Hassan",
    email: "ahmed.hassan@email.com",
    phone: "+880 123 456 789",
    dateOfBirth: "1998-05-15",
    nationality: "Bangladeshi",
    city: "Sylhet",
    address: "Dakshin Surma, Sylhet",

    // Football Details
    position: "Forward",
    preferredFoot: "Right",
    height: "175",
    weight: "70",
    jerseyNumber: "10",
    experience: "5",
    currentTeam: "Dakshin Surma FC",
    previousTeams: "Golapgonj FC, Fenchugonj AC",

    // Bio & Social
    bio: "Passionate footballer with 5+ years of experience. Known for speed, accuracy, and team leadership. Always striving to improve and help the team achieve victory.",
    instagram: "@ahmed_hassan_10",
    facebook: "ahmed.hassan.footballer",

    // Statistics (current season)
    matchesPlayed: 25,
    goals: 15,
    assists: 8,
    yellowCards: 2,
    redCards: 0,

    // Achievements
    achievements: [
      "District Champions 2023",
      "Top Scorer 2022",
      "Player of the Month - March 2023",
      "Best Forward Award 2023",
    ],
  });

  const handleInputChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log("Saving profile data:", profileData);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "football", label: "Football", icon: Trophy },
    { id: "stats", label: "Stats", icon: Activity },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div className="min-h-screen animated-bg text-white overflow-hidden">
      <Navigation />

      <div className="pt-16 sm:pt-20 md:pt-24 px-2 sm:px-4 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header with Background Image */}
          <motion.div
            className="text-center mb-4 sm:mb-6 md:mb-8 relative bg-cover bg-center bg-no-repeat rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden"
            style={{ backgroundImage: "url('/images/football-stadium.jpg')" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <motion.div
                className="inline-flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-red-500/20 to-yellow-400/20 backdrop-blur-sm border border-red-500/30 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 mb-3 sm:mb-4 md:mb-6"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.3)",
                    "0 0 40px rgba(239, 68, 68, 0.5)",
                    "0 0 20px rgba(239, 68, 68, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-red-400" />
                <span className="text-red-400 font-bold uppercase tracking-wider text-xs sm:text-sm">
                  Player Dashboard
                </span>
              </motion.div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-2 sm:mb-3 md:mb-4">
                <span className="text-white">Welcome Back,</span>{" "}
                <span className="gradient-text">{profileData.firstName}</span>
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg px-2">
                Manage your profile and track your football journey
              </p>
            </div>
          </motion.div>

          {/* Profile Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <div className="premium-card relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-yellow-400/20" />
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                  {/* Profile Picture */}
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {imagePreview ? (
                      <Image
                        src={imagePreview || "/placeholder.svg"}
                        alt="Profile"
                        width={96}
                        height={96}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-2xl border-2 sm:border-4 border-white/20"
                      />
                    ) : (
                      <Image
                        src="/images/playerplaceholder.jpg"
                        alt="Placeholder"
                        width={96}
                        height={96}
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover shadow-2xl border-2 sm:border-4 border-white/20"
                      />
                    )}
                    <motion.button
                      className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Camera className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </motion.button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </motion.div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center w-full">
                    <div className="flex flex-col space-y-3 sm:space-y-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 sm:mb-3">
                          {profileData.firstName} {profileData.lastName}
                        </h2>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 text-xs sm:text-sm">
                            #{profileData.jerseyNumber}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 text-xs sm:text-sm">
                            {profileData.position}
                          </Badge>
                          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 text-xs sm:text-sm">
                            <span className="hidden sm:inline">
                              {profileData.currentTeam}
                            </span>
                            <span className="sm:hidden">Team</span>
                          </Badge>
                        </div>
                      </div>

                      <motion.button
                        onClick={() => setIsEditing(!isEditing)}
                        className={`btn-${
                          isEditing ? "secondary" : "primary"
                        } px-4 sm:px-6 py-2 sm:py-3 group text-sm sm:text-base mx-auto`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isEditing ? (
                          <>
                            <X className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:rotate-90 transition-transform" />
                            <span className="hidden sm:inline">Cancel</span>
                            <span className="sm:hidden">Cancel</span>
                          </>
                        ) : (
                          <>
                            <Edit3 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 group-hover:rotate-12 transition-transform" />
                            <span className="hidden sm:inline">
                              Edit Profile
                            </span>
                            <span className="sm:hidden">Edit</span>
                          </>
                        )}
                      </motion.button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6">
                      {[
                        {
                          label: "Matches",
                          value: profileData.matchesPlayed,
                          icon: Calendar,
                          color: "text-blue-400",
                        },
                        {
                          label: "Goals",
                          value: profileData.goals,
                          icon: Target,
                          color: "text-green-400",
                        },
                        {
                          label: "Assists",
                          value: profileData.assists,
                          icon: Star,
                          color: "text-yellow-400",
                        },
                        {
                          label: "Experience",
                          value: `${profileData.experience}Y`,
                          icon: Trophy,
                          color: "text-purple-400",
                        },
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-2 sm:p-3 glass-effect rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <stat.icon
                            className={`w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 ${stat.color} mx-auto mb-1`}
                          />
                          <div className="text-sm sm:text-lg md:text-xl font-bold gradient-text">
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-xs uppercase tracking-wider">
                            {stat.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 sm:mb-6 md:mb-8"
          >
            <div className="flex justify-center gap-1 sm:gap-2 p-1 sm:p-2 glass-effect rounded-xl sm:rounded-2xl overflow-x-auto">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap min-w-0 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="hidden xs:inline sm:inline">
                    {tab.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Personal Information */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-red-400" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            First Name
                          </label>
                          {isEditing ? (
                            <Input
                              value={profileData.firstName}
                              onChange={(e) =>
                                handleInputChange("firstName", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.firstName}
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Last Name
                          </label>
                          {isEditing ? (
                            <Input
                              value={profileData.lastName}
                              onChange={(e) =>
                                handleInputChange("lastName", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.lastName}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Email
                        </label>
                        {isEditing ? (
                          <Input
                            type="email"
                            value={profileData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white flex items-center text-sm sm:text-base">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400 flex-shrink-0" />
                            <span className="truncate">
                              {profileData.email}
                            </span>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Phone
                        </label>
                        {isEditing ? (
                          <Input
                            value={profileData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white flex items-center text-sm sm:text-base">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400 flex-shrink-0" />
                            {profileData.phone}
                          </div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Date of Birth
                          </label>
                          {isEditing ? (
                            <Input
                              type="date"
                              value={profileData.dateOfBirth}
                              onChange={(e) =>
                                handleInputChange("dateOfBirth", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white flex items-center text-sm sm:text-base">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400 flex-shrink-0" />
                              <span className="truncate">
                                {new Date(
                                  profileData.dateOfBirth
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Nationality
                          </label>
                          {isEditing ? (
                            <Input
                              value={profileData.nationality}
                              onChange={(e) =>
                                handleInputChange("nationality", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.nationality}
                            </div>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Address
                        </label>
                        {isEditing ? (
                          <Textarea
                            value={profileData.address}
                            onChange={(e) =>
                              handleInputChange("address", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            rows={3}
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white flex items-start text-sm sm:text-base">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-gray-400 mt-1 flex-shrink-0" />
                            {profileData.address}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Bio & Social */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                        Bio & Social Media
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Bio
                        </label>
                        {isEditing ? (
                          <Textarea
                            value={profileData.bio}
                            onChange={(e) =>
                              handleInputChange("bio", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            rows={4}
                            placeholder="Tell us about your football journey..."
                          />
                        ) : (
                          <div className="p-3 sm:p-4 bg-gray-800/30 rounded-lg text-gray-300 leading-relaxed text-sm sm:text-base">
                            {profileData.bio}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Instagram
                        </label>
                        {isEditing ? (
                          <Input
                            value={profileData.instagram}
                            onChange={(e) =>
                              handleInputChange("instagram", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            placeholder="@username"
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                            {profileData.instagram}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Facebook
                        </label>
                        {isEditing ? (
                          <Input
                            value={profileData.facebook}
                            onChange={(e) =>
                              handleInputChange("facebook", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            placeholder="facebook.username"
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                            {profileData.facebook}
                          </div>
                        )}
                      </div>

                      {/* Achievements */}
                      <div>
                        <label className="block text-gray-300 font-medium mb-3 sm:mb-4 text-xs sm:text-sm">
                          Recent Achievements
                        </label>
                        <div className="space-y-2">
                          {profileData.achievements.map(
                            (achievement, index) => (
                              <motion.div
                                key={index}
                                className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 glass-effect rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                                <span className="text-gray-300 text-xs sm:text-sm">
                                  {achievement}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Football Details Tab */}
              {activeTab === "football" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Playing Details */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                        Playing Details
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Position
                          </label>
                          {isEditing ? (
                            <select
                              value={profileData.position}
                              onChange={(e) =>
                                handleInputChange("position", e.target.value)
                              }
                              className="w-full p-2 sm:p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none text-sm sm:text-base"
                            >
                              <option value="Goalkeeper">Goalkeeper</option>
                              <option value="Defender">Defender</option>
                              <option value="Midfielder">Midfielder</option>
                              <option value="Forward">Forward</option>
                            </select>
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.position}
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Jersey Number
                          </label>
                          {isEditing ? (
                            <Input
                              type="number"
                              value={profileData.jerseyNumber}
                              onChange={(e) =>
                                handleInputChange(
                                  "jerseyNumber",
                                  e.target.value
                                )
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                              min="1"
                              max="99"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              #{profileData.jerseyNumber}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Preferred Foot
                          </label>
                          {isEditing ? (
                            <select
                              value={profileData.preferredFoot}
                              onChange={(e) =>
                                handleInputChange(
                                  "preferredFoot",
                                  e.target.value
                                )
                              }
                              className="w-full p-2 sm:p-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:border-red-400 focus:outline-none text-sm sm:text-base"
                            >
                              <option value="Right">Right</option>
                              <option value="Left">Left</option>
                              <option value="Both">Both</option>
                            </select>
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.preferredFoot}
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Experience (Years)
                          </label>
                          {isEditing ? (
                            <Input
                              type="number"
                              value={profileData.experience}
                              onChange={(e) =>
                                handleInputChange("experience", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                              min="0"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.experience} Years
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Height (cm)
                          </label>
                          {isEditing ? (
                            <Input
                              type="number"
                              value={profileData.height}
                              onChange={(e) =>
                                handleInputChange("height", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.height} cm
                            </div>
                          )}
                        </div>
                        <div>
                          <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                            Weight (kg)
                          </label>
                          {isEditing ? (
                            <Input
                              type="number"
                              value={profileData.weight}
                              onChange={(e) =>
                                handleInputChange("weight", e.target.value)
                              }
                              className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            />
                          ) : (
                            <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                              {profileData.weight} kg
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Team Information */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Shield className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-green-400" />
                        Team Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Current Team
                        </label>
                        {isEditing ? (
                          <Input
                            value={profileData.currentTeam}
                            onChange={(e) =>
                              handleInputChange("currentTeam", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white flex items-center text-sm sm:text-base">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-400 flex-shrink-0" />
                            {profileData.currentTeam}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Previous Teams
                        </label>
                        {isEditing ? (
                          <Textarea
                            value={profileData.previousTeams}
                            onChange={(e) =>
                              handleInputChange("previousTeams", e.target.value)
                            }
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 text-sm sm:text-base"
                            rows={3}
                            placeholder="List your previous teams..."
                          />
                        ) : (
                          <div className="p-2 sm:p-3 bg-gray-800/30 rounded-lg text-white text-sm sm:text-base">
                            {profileData.previousTeams}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Statistics Tab */}
              {activeTab === "stats" && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* Current Season Stats */}
                  <Card className="premium-card lg:col-span-2">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Activity className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-400" />
                        Current Season Statistics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                        {[
                          {
                            label: "Matches Played",
                            value: profileData.matchesPlayed,
                            icon: Calendar,
                            color: "text-blue-400",
                          },
                          {
                            label: "Goals Scored",
                            value: profileData.goals,
                            icon: Target,
                            color: "text-green-400",
                          },
                          {
                            label: "Assists",
                            value: profileData.assists,
                            icon: Star,
                            color: "text-yellow-400",
                          },
                          {
                            label: "Yellow Cards",
                            value: profileData.yellowCards,
                            icon: Activity,
                            color: "text-yellow-500",
                          },
                          {
                            label: "Red Cards",
                            value: profileData.redCards,
                            icon: Activity,
                            color: "text-red-500",
                          },
                          {
                            label: "Goals/Match",
                            value: (
                              profileData.goals / profileData.matchesPlayed
                            ).toFixed(1),
                            icon: Trophy,
                            color: "text-purple-400",
                          },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center p-3 sm:p-4 glass-effect rounded-lg hover-lift"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <stat.icon
                              className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${stat.color} mx-auto mb-2`}
                            />
                            <div className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
                              {stat.value}
                            </div>
                            <div className="text-gray-400 text-xs sm:text-sm">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Performance Chart */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Trophy className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-400" />
                        Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          {
                            label: "Goal Rate",
                            value: Math.round(
                              (profileData.goals / profileData.matchesPlayed) *
                                100
                            ),
                            color: "from-green-500 to-green-600",
                          },
                          {
                            label: "Assist Rate",
                            value: Math.round(
                              (profileData.assists /
                                profileData.matchesPlayed) *
                                100
                            ),
                            color: "from-blue-500 to-blue-600",
                          },
                          {
                            label: "Discipline",
                            value: Math.max(
                              0,
                              100 -
                                (profileData.yellowCards * 10 +
                                  profileData.redCards * 25)
                            ),
                            color: "from-purple-500 to-purple-600",
                          },
                        ].map((stat, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="text-gray-300 text-xs sm:text-sm">
                                {stat.label}
                              </span>
                              <span className="text-white font-semibold text-xs sm:text-sm">
                                {stat.value}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3">
                              <motion.div
                                className={`h-2 sm:h-3 bg-gradient-to-r ${stat.color} rounded-full`}
                                initial={{ width: 0 }}
                                animate={{ width: `${stat.value}%` }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                  {/* Account Settings */}
                  <Card className="premium-card">
                    <CardHeader className="pb-3 sm:pb-6">
                      <CardTitle className="text-white flex items-center text-sm sm:text-base md:text-lg">
                        <Settings className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" />
                        Account Settings
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div>
                        <label className="block text-gray-300 font-medium mb-2 text-xs sm:text-sm">
                          Change Password
                        </label>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter new password"
                            className="bg-gray-800/50 border-gray-600 text-white focus:border-red-400 pr-10 sm:pr-12 text-sm sm:text-base"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                          >
                            {showPassword ? (
                              <EyeOff className="w-3 h-3 sm:w-4 sm:h-4" />
                            ) : (
                              <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Save Button (when editing) */}
          <AnimatePresence>
            {isEditing && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50"
              >
                <motion.button
                  onClick={handleSave}
                  className="btn-primary px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg shadow-2xl group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Save className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Save Changes</span>
                  <span className="sm:hidden">Save</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
