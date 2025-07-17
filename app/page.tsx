"use client"

import { useEffect, useState } from "react"
import { Heart, MapPin, Coffee, Utensils, Film, Wine } from "lucide-react"

type RandomHeartStyle = {
  left: string
  top: string
  animationDelay: string
  fontSize: string
  animationDuration: string
}

export default function FirstDateInvitation() {
  const [isVisible, setIsVisible] = useState(false)
  const [heartStyles, setHeartStyles] = useState<RandomHeartStyle[]>([])
  const [sparkleStyles, setSparkleStyles] = useState<any[]>([])
  const [circleStyles, setCircleStyles] = useState<any[]>([])

  useEffect(() => {
    setHeartStyles(
        [...Array(15)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${Math.random() * 25 + 15}px`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        }))
    )

    setTimeout(() => setIsVisible(true), 100)

    setSparkleStyles(
        [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 2 + 1}s`,
        }))
    )

    setCircleStyles(
        [...Array(8)].map(() => ({
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
        width: `${Math.random() * 100 + 50}px`,
        height: `${Math.random() * 100 + 50}px`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${Math.random() * 4 + 3}s`,
        }))
    )
    }, [])

  const timelineItems = [
    {
      time: "4:00 PM",
      emoji: "🕓",
      title: "Đón bé",
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      emoji: "☕",
      title: "Đi cà phê - TreesCoffee",
      icon: <Coffee className="w-4 h-4" />,
    },
    {
      emoji: "🍣",
      title: "Ăn tối đồ Nhật - Udon Ten",
      icon: <Utensils className="w-4 h-4" />,
    },
    {
      emoji: "🎬",
      title: "Xem phim - Metiz Cinema",
      subtitle: "Ga Tử Thần",
      icon: <Film className="w-4 h-4" />,
    },
    {
      emoji: "🍸",
      title: "Uống nước ngắm thành phố - Nóc Rooftop",
      icon: <Wine className="w-4 h-4" />,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Enhanced Romantic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hearts - Multiple Layers */}
        {heartStyles.map((style, i) => (
            <Heart
            key={`heart-${i}`}
            className={`absolute text-pink-300 opacity-30 ${
                i % 3 === 0 ? "animate-bounce" : i % 3 === 1 ? "animate-pulse" : "animate-float"
            }`}
            style={style}
            />
        ))}

        {/* Romantic Sparkles */}
        {sparkleStyles.map((style, i) => (
            <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-purple-300 rounded-full animate-ping opacity-40"
            style={style}
            />
        ))}

        {/* Romantic Circles */}
        {circleStyles.map((style, i) => (
            <div
            key={`circle-${i}`}
            className="absolute rounded-full border border-pink-200 opacity-20 animate-pulse"
            style={style}
            />
        ))}

        {/* Love Quotes Background */}
        <div className="absolute top-20 left-4 text-purple-200 opacity-20 text-sm font-light rotate-12 animate-pulse">
            "Love is in the air"
        </div>
        <div
            className="absolute top-40 right-6 text-pink-200 opacity-20 text-xs font-light -rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
        >
            "💕 Forever"
        </div>
        <div
            className="absolute bottom-32 left-8 text-purple-200 opacity-20 text-xs font-light rotate-6 animate-pulse"
            style={{ animationDelay: "2s" }}
        >
            "Together"
        </div>
        <div
            className="absolute bottom-60 right-4 text-pink-200 opacity-20 text-sm font-light -rotate-6 animate-pulse"
            style={{ animationDelay: "1.5s" }}
        >
            "🌹"
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-300 to-transparent opacity-20 rounded-full blur-xl animate-pulse"></div>
        <div
            className="absolute top-20 right-0 w-40 h-40 bg-gradient-to-bl from-pink-300 to-transparent opacity-20 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "1s" }}
        ></div>
        <div
            className="absolute bottom-20 left-0 w-36 h-36 bg-gradient-to-tr from-purple-400 to-transparent opacity-15 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "2s" }}
        ></div>
        <div
            className="absolute bottom-0 right-0 w-44 h-44 bg-gradient-to-tl from-pink-400 to-transparent opacity-15 rounded-full blur-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
        ></div>
        </div>

      {/* Romantic Pattern Overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23A259FF' fillOpacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-md mx-auto px-6 py-8 romantic-blur rounded-3xl mx-4 my-8 shadow-2xl border border-white/30">
        {/* Header */}
        <div
          className={`text-center mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
        >
          <h1
            className="text-3xl font-bold mb-2 text-gray-800"
            style={{ fontFamily: "Playfair Display, serif", color: "#A259FF" }}
          >
            💌 Thư mời First Date
          </h1>
          <div className="flex justify-center space-x-2">
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
            <Heart className="w-4 h-4 text-purple-400 animate-pulse" style={{ animationDelay: "0.5s" }} />
            <Heart className="w-5 h-5 text-pink-400 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        {/* Photo Frames */}
        <div
          className={`flex justify-center space-x-6 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Bé Thý */}
          <div className="relative flex flex-col items-center">
            <span
              className="text-purple-600 font-bold text-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Thý Chu Che
            </span>
            <div className="w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden border-4 border-purple-200">
              <img src="/her.jpg" alt="Her photo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="flex items-center">
            <Heart className="w-8 h-8 text-pink-400 animate-pulse mx-4" />
          </div>

          {/* Quan */}
          <div className="relative flex flex-col items-center">
            <span
              className="text-pink-500 font-bold text-lg"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              AQuan
            </span>
            <div className="w-24 h-24 rounded-full bg-white shadow-lg overflow-hidden border-4 border-pink-200">
              <img src="/me.jpg" alt="My photo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <Heart className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Timeline Header */}
        <div
          className={`text-center mb-6 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <h2 className="text-xl font-semibold text-purple-600 mb-2" style={{ fontFamily: "Playfair Display, serif" }}>
            📅 Lịch trình hẹn hò
          </h2>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <span>Theo số thứ tự</span>
            <div className="flex flex-col items-center">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-purple-400"></div>
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-purple-400 mt-1"></div>
            </div>
          </div>
        </div>

        {/* Timeline with connecting lines */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-purple-300 via-pink-300 to-purple-300 opacity-60"></div>

          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Step number */}
                <div className="absolute -left-2 top-4 w-6 h-6 bg-white border-2 border-purple-400 rounded-full flex items-center justify-center text-xs font-bold text-purple-600 shadow-sm z-10">
                  {index + 1}
                </div>

                {/* Timeline item */}
                <div
                  className={`ml-8 bg-white rounded-2xl p-4 shadow-lg border border-purple-100 transition-all duration-700 hover:shadow-xl hover:scale-105 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    animationDelay: `${(index + 1) * 200}ms`,
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xl shadow-lg">
                        {item.emoji}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        {item.time && (
                          <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                            {item.time}
                          </span>
                        )}
                        <div className="text-purple-400">{item.icon}</div>
                      </div>

                      <h3 className="font-semibold text-gray-800 mb-1" style={{ fontFamily: "Open Sans, sans-serif" }}>
                        {item.title}
                      </h3>

                      {item.subtitle && <p className="text-sm text-gray-600 italic">{item.subtitle}</p>}
                    </div>

                    <div className="flex-shrink-0 flex flex-col items-center">
                      <Heart className="w-5 h-5 text-pink-300 hover:text-pink-500 transition-colors cursor-pointer" />
                      {index < timelineItems.length - 1 && (
                        <div className="mt-2 flex flex-col items-center text-purple-400 opacity-60">
                          <div className="w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-purple-400"></div>
                          <span className="text-xs mt-1">Tiếp theo</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
            <div className="flex justify-center space-x-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={i}
                  className="w-4 h-4 text-pink-400 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="text-gray-600 text-sm" style={{ fontFamily: "Open Sans, sans-serif" }}>
              Anh rất mong chờ được đi chơi với em 💕
            </p>
            <p className="text-purple-500">
              Hẹn gặp em vào lúc đó! 🌹
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
