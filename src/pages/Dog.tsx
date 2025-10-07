import { Suspense, use, type FC } from "react";
import type { Dog as DogType } from "../api/fetch";
import { useParams } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { getDogById } from "../api/resources";

const dogPromises = new Map<string, Promise<DogType | null>>();

function getDogPromise(id: string) {
  if (!dogPromises.has(id)) {
    dogPromises.set(id, getDogById(id));
  }
  return dogPromises.get(id)!;
}

const DogData = () => {
  const { id } = useParams();

  const dogData: DogType | null = id
    ? use(getDogPromise(id.replace(/^:/, "")))
    : null;
  return (
    <>
      {dogData ? (
        <div className="mt-6 bg-primary-50 rounded-lg p-6 shadow text-primary-900 border border-primary-200">
          <h2 className="text-xl font-bold mb-2 text-primary-700">Details</h2>
          <ul className="mb-4">
            <li>
              <strong>Species:</strong>{" "}
              <span className="text-secondary-700">{dogData.species}</span>
            </li>
            <li>
              <strong>Breed:</strong>{" "}
              <span className="text-secondary-700">{dogData.breed}</span>
            </li>
            <li>
              <strong>Age:</strong>{" "}
              <span className="text-secondary-700">{dogData.age}</span>
            </li>
            <li>
              <strong>Gender:</strong>{" "}
              <span className="text-secondary-700">{dogData.gender}</span>
            </li>
            <li>
              <strong>Size:</strong>{" "}
              <span className="text-secondary-700">{dogData.size}</span>
            </li>
            <li>
              <strong>Color:</strong>{" "}
              <span className="text-secondary-700">{dogData.color}</span>
            </li>
            <li>
              <strong>Status:</strong>{" "}
              <span className="text-secondary-700">
                {dogData.adoptionStatus}
              </span>
            </li>
            <li>
              <strong>Location:</strong>{" "}
              <span className="text-secondary-700">{dogData.location}</span>
            </li>
            <li>
              <strong>Created:</strong>{" "}
              <span className="text-secondary-700">
                {new Date(dogData.created).toLocaleString()}
              </span>
            </li>
            <li>
              <strong>Updated:</strong>{" "}
              <span className="text-secondary-700">
                {new Date(dogData.updated).toLocaleString()}
              </span>
            </li>
          </ul>
          <h2 className="text-xl font-bold mb-2 text-primary-700">Owner</h2>
          <ul>
            <li>
              <strong>Name:</strong>{" "}
              <span className="text-secondary-700">{dogData.owner.name}</span>
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <span className="text-secondary-700">{dogData.owner.email}</span>
            </li>
            <li>
              <strong>Bio:</strong>{" "}
              <span className="text-secondary-700">
                {dogData.owner.bio ?? "N/A"}
              </span>
            </li>
            <li>
              <strong>Avatar:</strong>{" "}
              <img
                src={dogData.owner.avatar.url}
                alt={dogData.owner.avatar.alt}
                className="inline-block w-12 h-12 rounded-full border ml-2 align-middle border-secondary-300"
              />
            </li>
            <li>
              <strong>Banner:</strong>{" "}
              <img
                src={dogData.owner.banner.url}
                alt={dogData.owner.banner.alt}
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

const Dog: FC = () => {
  return (
    <ErrorBoundary fallback={<p>Oh no! Couldn't fetch the dogs!</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <DogData />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Dog;
