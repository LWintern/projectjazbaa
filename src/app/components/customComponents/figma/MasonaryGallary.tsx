"use client"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface GalleryImage {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function EnhancedMasonryGallery() {
  const galleryImages: GalleryImage[] = [
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "People at event 1",
      className: "h-[400px]", // Tall
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group photo",
      className: "h-[200px]", // Short
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "JAZBAA sign",
      className: "h-[300px]", // Medium
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "People at event 2",
      className: "h-[400px]", // Tall
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Couple photo",
      className: "h-[200px]", // Short
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "People hugging",
      className: "h-[400px]", // Tall
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Group with JAZBAA sign",
      className: "h-[300px]", // Medium
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Two people standing",
      className: "h-[200px]", // Short
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "JAZBAA 3.0 stage",
      className: "h-[300px]", // Medium
    },
    {
      src: "/placeholder.svg?height=200&width=300",
      alt: "Audience",
      className: "h-[400px]", // Tall
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Award ceremony",
      className: "h-[200px]", // Short
    },
    {
      src: "/placeholder.svg?height=300&width=300",
      alt: "Trophy presentation",
      className: "h-[300px]", // Medium
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Person in dress",
      className: "h-[400px]", // Tall
    },
    {
      src: "/placeholder.svg?height=400&width=300",
      alt: "Person with camera",
      className: "h-[300px]", // Medium
    },
  ]

  return (
    <div className="w-full bg-white p-4 max-w-6xl mx-auto">
      <div className="columns-2 md:columns-6 gap-3 space-y-3">
        {galleryImages.map((image, index) => (
          <div 
            key={index} 
            className={cn(
              "break-inside-avoid overflow-hidden rounded-lg relative w-full",
              image.className
            )}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover bg-red-200"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>
    </div>
  )
}