"use client"
import Image from "next/image"
import { useState } from "react"

export default function InvestorsSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const investorImages = [
    {
      src: "/placeholder.svg?height=400&width=200",
      alt: "Nature landscape",
    },
    {
      src: "/placeholder.svg?height=400&width=200",
      alt: "White tiger",
    },
    {
      src: "/placeholder.svg?height=400&width=200",
      alt: "Colorful parrot",
    },
    {
      src: "/placeholder.svg?height=400&width=200",
      alt: "Prairie dog",
    },
  ]

  const duplicatedImages = [...investorImages, ...investorImages]

  return (
    <>
      <section className="w-full bg-gray-200 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="bg-gray-200 rounded-lg p-8 text-black">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Investors & dignitaries @ jazbaa 1.0 | 2.0 | 3.0
            </h3>

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

              {/* Carousel container */}
              <div className="md:w-2/3 overflow-hidden">
                <div className="flex animate-carousel">
                  {duplicatedImages.map((image, index) => (
                    <div
                      key={`image-${index}`}
                      className="relative w-[120px]  flex-shrink-0 h-[240px] md:w-[140px] md:h-[280px] overflow-hidden rounded-[100px] mx-2 cursor-pointer transition-transform hover:scale-105"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <Image 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.alt} 
                        fill 
                        className="object-cover bg-red-200" 
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