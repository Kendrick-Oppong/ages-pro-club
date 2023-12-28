export const BackgroundImage = () => {
  return (
    <>
      <div className="hidden rotate-180 sm:block absolute -z-10 right-0">
        <img src="/Rectangle.svg" alt="blue rectangle" />
      </div>
      <div className="absolute -z-10 left-0">
        <img src="/Rectangle2.svg" alt="blue rectangle" />
      </div>
      <div className="absolute rotate-180 -z-10 bottom-0">
        <img src="/Rectangle3.svg" alt="blue rectangle" />
      </div>
    </>
  );
};
