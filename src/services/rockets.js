const url = 'https://api.spacexdata.com/v3/rockets';

const getRockets = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const rockets = data.map((item) => ({
    id: item.rocket_id,
    name: item.rocket_name,
    description: item.description,
    image: item.flickr_images[0],
    reserved: false,
  }));
  return rockets;
};

export default getRockets;
