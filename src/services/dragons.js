const baseURL = 'https://api.spacexdata.com/v4/dragons';

const getAllDragons = async () => {
  let payload;
  try {
    const response = await fetch(baseURL);
    const dragons = await response.json();

    if (!dragons) {
      throw new Error('No data found :(');
    } else {
      payload = dragons.map((dragon) => ({
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        image: dragon.flickr_images[0],
        reserved: false,
      }));
    }
  } catch (error) {
    return error;
  }
  return payload;
};

const dragonsService = {
  getAllDragons,
};

export default dragonsService;
