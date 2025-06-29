import { API_BASE } from "./endpoints";

export interface Dog {
  id: string;
  name: string;
  species: string;
  breed: string;
  age: number;
  gender: string;
  size: string;
  color: string;
  description: string;
  adoptionStatus: string;
  location: string;
  image: {
    url: string;
    alt: string;
  };
  created: string;
  updated: string;
  owner: {
    name: string;
    email: string;
    bio: string | null;
    avatar: {
      url: string;
      alt: string;
    };
    banner: {
      url: string;
      alt: string;
    };
  };
}

const fetchDogs = async () => {
  try {
    const response = await fetch(API_BASE, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(
        `There was a problem with the resonse:
        ${response.status}`
      );
    }
    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error("We couldn't get the dogs!\n", err);
    throw new Error(`Oh no! No dogs! ${err}`);
  }
};

export { fetchDogs };
