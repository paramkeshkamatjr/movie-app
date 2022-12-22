type MovieHeaderProps = {
  title: string;
};

export default function MovieHeader({ title }: MovieHeaderProps) {
  return (
    <div className="movie-header">
      <h1>{title}</h1>
    </div>
  );
}
