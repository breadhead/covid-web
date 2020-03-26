import { isEmpty } from "lodash";
import * as symptomsMap from './config'
import { flattenDepth } from "lodash";

const symptomIds = flattenDepth(Object.values(symptomsMap), 1)


export const formatFormData = ({ symptoms, deseases, ...rest }) => {
  if (isEmpty(rest)) return {}

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

  result.symptoms = result.symptoms.join(', ');
  result.deseases = result.deseases.join(', ');

  return result
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
