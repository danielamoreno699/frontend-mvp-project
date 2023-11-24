export const checkingEmptyFields = (data) => {
            
    const updatedData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value !== '') {
        updatedData[key] = value;
      }
    });

    if (Object.keys(updatedData).length > 0){
        return updatedData;
    }
    return null
  }