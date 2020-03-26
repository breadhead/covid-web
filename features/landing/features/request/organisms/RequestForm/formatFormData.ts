
import * as symptomsMap from './config'

const symptomIds = Object.values(symptomsMap).map(item => [...item])

export const formatFormData = ({ symptoms, deseases, ...rest }) => {
  const result = rest;
  result.symptoms = [];
  result.deseases = [];

  Object.entries(symptoms).forEach(([key, value]) => {
    if (typeof value === "object") {
      result[key] = Object.entries(value)
        .filter(([key, value]) => !!value)
        .map(transformValue)
        .join(", ");
    } else if (typeof value === "boolean") {
      result.symptoms.push(getValueFromId(key, symptomIds));
    } else {
      result[key] = value;
    }
  });

  Object.entries(deseases)
    .map(transformValue)
    .forEach(value => {
      result.deseases.push(value);
    });

  return result;
};
const transformValue = ([key, value]) => {
  if (typeof value === "boolean") {
    const newValue = getValueFromId(key, symptomIds);
    return newValue;
  }
  return value;
};

const getValueFromId = (id, array) => {
  const result = array.find(item => item.id === id);

  return (result || {}).value;
};
