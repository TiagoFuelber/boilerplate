export default ({ PeopleRepository }) =>
  async (name) => {
    let data = null;

    try {
      data = await PeopleRepository.getPersonImage(name);
      return data.hits[0].previewURL;
    } catch (error) {
      console.log(error);
    }

    return data;
  };
