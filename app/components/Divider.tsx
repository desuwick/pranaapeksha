export default function Divider() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        className="absolute top-0 left-0 w-full h-16 text-secondary"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,64L48,58.7C96,53,192,43,288,53.3C384,64,480,96,576,128C672,160,768,192,864,176C960,160,1056,96,1152,64C1248,32,1344,32,1392,32L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="h-16"></div>
    </div>
  );
}
