import { use, useEffect, useState } from "react";
import { fetchDogById } from "../api/fetch";
import type { Dog } from "../api/fetch";
import { useParams } from "react-router";

const Dog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const { id } = useParams();

  useEffect(() => {
    const dogData = id ? use(fetchDogById(id)) : undefined;

    if (dogData) {
      setDog(dogData);
    } else {
      console.error("no info on the doggy");
    }
  });

  return (
    <>
      {dog ? (
        <div className="mt-6 bg-primary-50 rounded-lg p-6 shadow text-primary-900 border border-primary-200">
          <h2 className="text-xl font-bold mb-2 text-primary-700">Details</h2>
          <ul className="mb-4">
            <li>
              <strong>Species:</strong>{" "}
              <span className="text-secondary-700">${dog.species}</span>
            </li>
            <li>
              <strong>Breed:</strong>{" "}
              <span className="text-secondary-700">${dog.breed}</span>
            </li>
            <li>
              <strong>Age:</strong>{" "}
              <span className="text-secondary-700">${dog.age}</span>
            </li>
            <li>
              <strong>Gender:</strong>{" "}
              <span className="text-secondary-700">${dog.gender}</span>
            </li>
            <li>
              <strong>Size:</strong>{" "}
              <span className="text-secondary-700">${dog.size}</span>
            </li>
            <li>
              <strong>Color:</strong>{" "}
              <span className="text-secondary-700">${dog.color}</span>
            </li>
            <li>
              <strong>Status:</strong>{" "}
              <span className="text-secondary-700">${dog.adoptionStatus}</span>
            </li>
            <li>
              <strong>Location:</strong>{" "}
              <span className="text-secondary-700">${dog.location}</span>
            </li>
            <li>
              <strong>Created:</strong>{" "}
              <span className="text-secondary-700">
                ${new Date(dog.created).toLocaleString()}
              </span>
            </li>
            <li>
              <strong>Updated:</strong>{" "}
              <span className="text-secondary-700">
                ${new Date(dog.updated).toLocaleString()}
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2 text-primary-700">Owner</h2>
          <ul>
            <li>
              <strong>Name:</strong>{" "}
              <span className="text-secondary-700">${dog.owner.name}</span>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <span className="text-secondary-700">${dog.owner.email}</span>
            </li>
            <li>
              <strong>Bio:</strong>{" "}
              <span className="text-secondary-700">
                ${dog.owner.bio ?? "N/A"}
              </span>
            </li>
            <li>
              <strong>Avatar:</strong>{" "}
              <img
                src="${dog.owner.avatar.url}"
                alt="${
        dog.owner.avatar.alt
      }"
                className="inline-block w-12 h-12 rounded-full border ml-2 align-middle border-secondary-300"
              />
            </li>
            <li>
              <strong>Banner:</strong>{" "}
              <img
                src="${dog.owner.banner.url}"
                alt="${
              dog.owner.banner.alt
      }"
                className="inline-block w-32 h-12 rounded border ml-2 align-middle object-cover border-secondary-300"
              />
            </li>
          </ul>
        </div>
      ) : (
        <p>No dogs info!</p>
      )}
    </>
  );
};
