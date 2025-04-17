"use client"
import Image from "next/image"
import { useState } from "react"

export default function InvestorsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const investorImages = [
    {
      src: "/assets/investors/Artboard 1 copy 2.png",
      alt: "Nature landscape",
      position: "down",
      bgColor: "bg-pink-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 3.png",
      alt: "White tiger",
      position: "up",
      bgColor: "bg-blue-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 4.png",
      alt: "Colorful parrot",
      position: "down",
      bgColor: "bg-gray-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 5.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 6.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },

    {
      src: "/assets/investors/Artboard 1 copy 7.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 9.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 10.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 11.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 12.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 13.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 14.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 15.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy 16.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1 copy.png",
      alt: "Prairie dog",
      position: "up",
      bgColor: "bg-yellow-200"
    },
    {
      src: "/assets/investors/Artboard 1.png",
      alt: "Prairie dog",
      position: "down",
      bgColor: "bg-yellow-200"
    },
  ]

  const duplicatedImages = [...investorImages, ...investorImages]

  return (
    <>
      {/* Increased height using min-h-screen or h-[800px] */}
      <section className="w-full bg-black text-white overflow-hidden ">
        <div className="max-w-6xl mx-auto px-4 py-4"> {/* Increased padding */}
          <div className="bg-black rounded-lg p-8 text-white h-full">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10"> {/* Increased margin */}
              Investors & dignitaries @ jazbaa 1.0 | 2.0 | 3.0
            </h3>

            {/* Added min-h-[600px] for minimum height */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Text content */}
              <div className="md:w-1/3">
                <p className="text-sm md:text-base">
                  orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the ns of Lorem Ipsum. orem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                  the ns of Lorem Ipsum.
                </p>
              </div>

              {/* Carousel container with increased height */}
              <div className="md:w-2/3 overflow-hidden h-[440px]"> {/* Increased height */}
                <div className="flex animate-carousel items-center h-full"> {/* Added h-full */}
                  {duplicatedImages.map((image, index) => (
                    <div
                      key={`image-${index}`}
                      className={`relative w-[120px] flex-shrink-0 h-[400px] md:w-[110px] md:h-[290px] overflow-hidden rounded-[60px] mx-2 cursor-pointer transition-transform hover:scale-105 
                      ${image.position === 'up' ? 'transform -translate-y-16' : 'transform translate-y-16'}
                      ${image.bgColor}`}
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
                        fill 
                        className="object-contain bg-red-200" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-[90vw] max-h-[90vh] m-auto">
            <button
              className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Full screen view"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}