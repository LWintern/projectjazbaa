// "use client"
// import Image from "next/image"
// import { cn } from "@/lib/utils"

// interface GalleryImage {
//   src: string
//   alt: string
//   className?: string
//   width?: number
//   height?: number
// }

// export default function EnhancedMasonryGallery() {
//   const galleryImages: GalleryImage[] = [
//     {
//       src: "/placeholder.svg?height=400&width=300",
//       alt: "People at event 1",
//       className: "h-[400px]", // Tall
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Group photo",
//       className: "h-[200px]", // Short
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "JAZBAA sign",
//       className: "h-[300px]", // Medium
//     },
//     {
//       src: "/placeholder.svg?height=400&width=300",
//       alt: "People at event 2",
//       className: "h-[400px]", // Tall
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Couple photo",
//       className: "h-[200px]", // Short
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "People hugging",
//       className: "h-[400px]", // Tall
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Group with JAZBAA sign",
//       className: "h-[300px]", // Medium
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Two people standing",
//       className: "h-[200px]", // Short
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "JAZBAA 3.0 stage",
//       className: "h-[300px]", // Medium
//     },
//     {
//       src: "/placeholder.svg?height=200&width=300",
//       alt: "Audience",
//       className: "h-[400px]", // Tall
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Award ceremony",
//       className: "h-[200px]", // Short
//     },
//     {
//       src: "/placeholder.svg?height=300&width=300",
//       alt: "Trophy presentation",
//       className: "h-[300px]", // Medium
//     },
//     {
//       src: "/placeholder.svg?height=400&width=300",
//       alt: "Person in dress",
//       className: "h-[400px]", // Tall
//     },
//     {
//       src: "/placeholder.svg?height=400&width=300",
//       alt: "Person with camera",
//       className: "h-[300px]", // Medium
//     },
//   ]

//   return (
//     <div className="w-full bg-white p-4 max-w-6xl mx-auto">
//       <div className="columns-2 md:columns-6 gap-3 space-y-3">
//         {galleryImages.map((image, index) => (
//           <div 
//             key={index} 
//             className={cn(
//               "break-inside-avoid overflow-hidden rounded-lg relative w-full",
//               image.className
//             )}
//           >
//             <Image
//               src={image.src || "/placeholder.svg"}
//               alt={image.alt}
//               fill
//               className="object-cover bg-red-200"
//               sizes="(max-width: 768px) 50vw, 25vw"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }



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

  const galleryImages: GalleryImage[] = [
    {
      src: "/placeholder.svg?height=400&width=300",
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

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    element.style.transform = 
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = (element: HTMLDivElement) => {
    element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  }

  return (
    <section className="w-full bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Gallery
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
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px)',
                transformOrigin: 'center center',
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
                  "absolute inset-0 bg-black transition-opacity duration-300",
                  hoveredIndex === index ? "opacity-10" : "opacity-0"
                )}
              />
              {/* Optional: Image Caption */}
              <div 
                className={cn(
                  "absolute bottom-0 left-0 right-0 p-4 text-white",
                  "bg-gradient-to-t from-black/50 to-transparent",
                  "transform transition-transform duration-300",
                  hoveredIndex === index ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                )}
              >
                <p className="text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}