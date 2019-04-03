export default ({ PeopleRepository }) =>
  async (page, { onSuccess }) => {
    try {
      const data = await PeopleRepository.getPeopleFromPage(page);
      onSuccess(data);
    } catch (error) {
      console.log(error);
    }
  };
