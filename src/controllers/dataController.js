// src/controllers/dataController.js

function filterData(data, filters) {
    if (!filters || !filters.filterBy || !filters.filterValue) return data;
  
    const validFilterFields = ['name', 'language', 'id', 'bio', 'version'];
    
    if (!validFilterFields.includes(filters.filterBy)) {
      throw new Error(`Invalid filter field: ${filters.filterBy}`);
    }
  
    return data.filter(item => {
      return item[filters.filterBy].toString().toLowerCase().includes(filters.filterValue.toLowerCase());
    });
  }
  
  function sortData(data, sortBy) {
    if (!sortBy) return data;
  
    const validSortFields = ['name', 'language', 'id', 'bio', 'version'];
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
    const { filterBy, filterValue, sortBy } = req.query;
    const filters = {
      filterBy,
      filterValue
    };
  
    try {
      let result = req.data;
  
      if (filterBy || filterValue) {
        result = filterData(result, filters);
      }
      result = sortData(result, sortBy);
  
      if (result.length === 0) {
        return res.status(404).json({ message: 'No data found' });
      }
  
      res.json(result);
    } catch (error) {
      console.error('Error processing data:', error);
      res.status(400).json({ message: error.message });
    }
  }
  
  module.exports = {
    getData
  };
  