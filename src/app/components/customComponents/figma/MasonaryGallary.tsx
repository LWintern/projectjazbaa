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

    const rotateX = ((y - centerY) / 10) * -1
    const rotateY = (x - centerX) / 10

    element.style.transform = `
      perspective(1000px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      rotate(-5deg)
      translateZ(30px)
      scale3d(1.05, 1.05, 1.05)
    `
  }

  const handleMouseLeave = (element: HTMLDivElement) => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) rotate(0deg) translateZ(0) scale3d(1, 1, 1)'
  }

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image)
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeFullScreen = () => {
    setSelectedImage(null)
    // Re-enable scrolling when modal is closed
    document.body.style.overflow = 'auto'
  }

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeFullScreen()
    }
  }

  // Add keyboard event listener
  useState(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

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
                "hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]",
                image.className,
                hoveredIndex === index && "z-50"
              )}
              onMouseEnter={(e) => {
                setHoveredIndex(index)
                e.currentTarget.style.transform = `
                  perspective(1000px) 
                  rotateX(0deg) 
                  rotateY(0deg) 
                  rotate(-5deg)
                  translateZ(30px)
                  scale3d(1.05, 1.05, 1.05)
                `
              }}
              onMouseLeave={(e) => {
                setHoveredIndex(null)
                handleMouseLeave(e.currentTarget)
              }}
              onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
              onClick={() => handleImageClick(image)}
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px)',
                transformOrigin: 'center center',
                transition: 'transform 0.3s ease-out, shadow 0.3s ease-out',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={cn(
                  "object-cover transition-transform duration-300 bg-red-100",
                  hoveredIndex === index && "scale-105"
                )}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              {/* Hover Overlay */}
              <div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30 transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                )}
              />
              {/* Image Caption */}
              <div 
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 text-white",
                  "bg-gradient-to-t from-black/70 to-transparent",
                  "transform transition-all duration-300",
                  hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                )}
              >
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Screen Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeFullScreen}
        >
          <div 
            className="relative w-full h-full max-w-[90vw] max-h-[90vh] m-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            <button 
              className="absolute top-4 right-4 text-white text-xl bg-black bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center z-50 hover:bg-opacity-75 transition-all duration-200"
              onClick={closeFullScreen}
              aria-label="Close full screen view"
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
                quality={100}
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 py-2">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}