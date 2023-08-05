import House from '../house/index'

const FeaturedHouse = ({ house }) => {
  if (house)
    return (
      <div className='container'>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured house</h3>
        </div>
        <div>
            <House house={house}></House>
        </div>
      </div>
    );
  return <div>No featured house at this time.</div>;
};

export default FeaturedHouse;
