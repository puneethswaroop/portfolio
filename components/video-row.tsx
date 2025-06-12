export default function VideoRow() {
  // Sample video data - you can replace these with actual video URLs
  const videos = [
    {
      id: 1,
      src: "/videos/Final.MP4",
    },
    {
      id: 2,
      src: "/videos/IMG_9469.MP4",
    },
    {
      id: 3,
      src: "/videos/NIHARKA_REEL.MP4",
    },
    {
      id: 4,
      src: "/videos/Reel3.MP4",
    },
  ];

  return (
    <div className="w-full  bg-white sm:p-8 px-2">
      <div className="w-full">
        <h1 className="text-3xl font-medium font-sans text-gray-800 my-8 text-center">
          Video Gallery
        </h1>

        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6 w-max">
            {videos.map((video) => (
              <div key={video.id} className="flex-shrink-0">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                  {/* Video element with no controls, autoplay, and loop */}
                  <video
                    className="w-80 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    disablePictureInPicture
                    controlsList="nodownload nofullscreen noremoteplayback"
                  >
                    <source src={video.src} type="video/mp4" />
                    {/* Fallback for browsers that don't support video */}
                    <div className="w-80 h-60 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Video not supported</span>
                    </div>
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
