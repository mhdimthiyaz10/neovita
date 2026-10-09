import {
  InteractivePhotoStack,
  PhotoStackItem,
} from "@/components/ui/photo-stack";

// Sample data for the demo, matching the new PhotoStackItem interface
const showcaseItems: PhotoStackItem[] = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Sarah Anuns",
  },
  {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Michael Chen",
  },
  {
    src: "https://images.unsplash.com/photo-1594824813572-c2c31e98d9ed?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Elena Rostova",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Marcus Vance",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    name: "Dr. Ananya Sharma",
  },
];

// Demo component to showcase the photo stack
export default function InteractivePhotoStackDemo() {
  return (
    <div className="flex h-full min-h-[45rem] w-full items-center justify-center bg-background p-8">
      <InteractivePhotoStack
        items={showcaseItems}
        title={
          <>
            Our Medical & Clinical Specialists
          </>
        }
      />
    </div>
  );
}
