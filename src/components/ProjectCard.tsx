interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export function ProjectCard({ title, description, tags, imageUrl }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 flex flex-col justify-end">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-white/80 text-sm mt-2">{description}</p>
        <div className="flex gap-2 mt-3 flex-wrap">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 rounded-full text-xs bg-white/20 text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}