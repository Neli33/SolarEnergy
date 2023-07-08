export const groupDataByMonth = (data) => {
  const groupedData = {};

  data.forEach((item) => {
    const month = item.mes.trim().toLowerCase();
    const key = month;

    if (groupedData[key]) {
      groupedData[key] += parseInt(item.kwGerado);
    } else {
      groupedData[key] = parseInt(item.kwGerado);
    }
  });

  return groupedData;
};
