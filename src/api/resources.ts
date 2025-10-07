import { fetchDogs, fetchDogById } from "./fetch";
import type { Dog } from "./fetch";

let dogsPromise: Promise<Dog[]> | null = null;
let dogPromise: Promise<Dog> | null = null;

export function getDogs() {
  if (!dogsPromise) {
    dogsPromise = fetchDogs();
  }
  return dogsPromise;
}

export function getDogById(id: string) {
  if (!dogPromise) {
    dogPromise = fetchDogById(id);
  }
  return dogPromise;
}
