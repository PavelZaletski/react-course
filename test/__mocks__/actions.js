export const fetchMovies = jest.fn().mockReturnValue({
  then: cb => {
    console.log('==============')
    cb({data: {data: []} });
    return {
      catch: () => {},
    };
  },
});