import jsonData from './data.json';

export function fetchDestination(destinationName) {
    const destination = jsonData.destinations.find(dest => dest.name === destinationName);
    return destination;
  }

  
  
export function fetchCrew(crewName) {
    const destination = jsonData.crew.find(crew => crew.name === crewName);
    return destination;
  }

  
export function fetchTechnology(technologyName) {
    const destination = jsonData.technology.find(tech => tech.name === technologyName);
    return destination;
  }

  

  