function filterData(data, filter) {
    if (!filter) return data;
    return data.filter(item => item.language === filter);
  }
  
  function sortData(data, sortBy) {
    if (!sortBy) return data;
  
    const validSortFields = ['name', 'version']; // Adjust based on your data
    if (!validSortFields.includes(sortBy)) {
      throw new Error(`Invalid sort field: ${sortBy}`);
    }
  
    return data.sort((a, b) => {
      if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
        return a[sortBy].localeCompare(b[sortBy]);
      }
      return a[sortBy] - b[sortBy];
    });
  }
  
  function getData(req, res) {
    const { filter, sortBy } = req.query;
  
    try {
      let result = req.data; // Data should be passed via request object
  
      result = filterData(result, filter);
      result = sortData(result, sortBy);
  
      res.json(result);
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  
  module.exports = {
    getData
  };
  