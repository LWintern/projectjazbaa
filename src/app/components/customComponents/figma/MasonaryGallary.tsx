"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface GalleryImage {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function EnhancedMasonryGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const galleryImages: GalleryImage[] = [
    {
      src: "/assets/gallery/IMG_6557.JPG",
      alt: "People at event 1",
      className: "h-[400px]", // Tall
    },
    {
      src: "/assets/gallery/Asset_1[1].png",
      alt: "Group photo",
      className: "h-[200px]", // Short
    },
    {
      src: "/assets/gallery/DSC02498.JPG",
      alt: "JAZBAA sign",
      className: "h-[300px]", // Medium
    },
    {
      src: "/assets/gallery/DSC02507.JPG",
      alt: "People at event 2",
      className: "h-[400px]", // Tall
    },
    {
      src: "/assets/gallery/DSC03396.JPG",
      alt: "Couple photo",
      className: "h-[200px]", // Short
    },
    {
      src: "/assets/gallery/DSC08988.JPG",
      alt: "People hugging",
      className: "h-[400px]", // Tall
    },
    {
      src: "/assets/gallery/IMG_5477.JPG",
      alt: "Group with JAZBAA sign",
      className: "h-[300px]", // Medium
    },
    {
      src: "/assets/gallery/IMG_5691.JPG",
      alt: "Two people standing",
      className: "h-[200px]", // Short
    },
    {
      src: "/assets/gallery/IMG_5851.JPG",
      alt: "JAZBAA 3.0 stage",
      className: "h-[300px]", // Medium
    },
    {
      src: "/assets/gallery/IMG_6034.JPG",
      alt: "Audience",
      className: "h-[400px]", // Tall
    },
    {
      src: "/assets/gallery/IMG_6227.JPG",
      alt: "Award ceremony",
      className: "h-[200px]", // Short
    },
    {
      src: "/assets/gallery/IMG_6421.JPG",
      alt: "Trophy presentation",
      className: "h-[300px]", // Medium
    },
    {
      src: "/assets/gallery/IMG_6431.JPG",
      alt: "Person in dress",
      className: "h-[400px]", // Tall
    },
    {
      src: "/assets/gallery/IMG_6478 (1).JPG",
      alt: "Person with camera",
      className: "h-[300px]", // Medium
    },
    
  ]

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    element: HTMLDivElement
  ) => {
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Increased rotation factor for more dramatic tilt
    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    // More pronounced 3D effect with larger scale and rotation
    element.style.transform = 
      `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.1, 1.1, 1.1) translateZ(20px)`
  }

  const handleMouseLeave = (element: HTMLDivElement) => {
    // Smooth transition back to normal state
    element.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0)'
  }

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          JAZBAA 1.0| 2.0 | 3.0 EVENT GALLERY
        </h2>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className={cn(
                "break-inside-avoid overflow-hidden rounded-xl relative w-full",
                "transition-all duration-300 ease-out cursor-pointer",
                "hover:shadow-2xl",
                image.className,
                hoveredIndex === index && "z-50"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={(e) => {
                setHoveredIndex(null)
                handleMouseLeave(e.currentTarget)
              }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onClick={() => handleImageClick(image)}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                transformOrigin: 'center center',
                transition: 'transform 0.2s ease-out',
                boxShadow: hoveredIndex === index ? '0 20px 30px rgba(0,0,0,0.4)' : 'none'
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-300",
                  hoveredIndex === index && "scale-110"
                )}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                style={{
                  backfaceVisibility: 'hidden'
                }}
              />
              {/* Subtle lighting effect to enhance 3D appearance */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-tr from-black/0 to-white/20 transition-opacity duration-200",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}
                style={{
                  mixBlendMode: 'overlay',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-5xl max-h-full" onClick={e => e.stopPropagation()}>
            <div className="relative h-screen max-h-[85vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}