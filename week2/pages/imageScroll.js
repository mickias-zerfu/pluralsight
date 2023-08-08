import ImageToggleOnScroll from "../src/ImagetoggleOnScroll";

const ImageScroll = () => {
  return (
    <div>
      {[187, 823, 1124, 1530, 2920, 5996, 6548].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageToggleOnScroll  
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt="ss"
            />
          </div>
        );
      })}
      ;
    </div>
  );
};

export default ImageScroll;
