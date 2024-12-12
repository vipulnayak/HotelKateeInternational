import images from '../constants/images';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
        {images.logo ? (
          <img src={images.logo} alt="Hotel Logo" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500 text-xs">
            Logo
          </div>
        )}
      </div>
      <h1 className="text-[#D35400] text-sm sm:text-lg md:text-xl font-bold whitespace-nowrap">
        HOTEL KATEEL INTERNATIONAL
      </h1>
    </div>
  )
}

export default Logo
