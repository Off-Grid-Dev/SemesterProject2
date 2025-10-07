import { Suspense, use } from "react";
import { fetchDogs } from "../api/fetch";
import type { Dog as DogType } from "../api/fetch";
import Card from "../components/Card";
import { ErrorBoundary } from "react-error-boundary";

const dogPromise = fetchDogs();

const Dogs = () => {
  const dogs: DogType[] = use(dogPromise);

  return (
    <ErrorBoundary fallback={<p>oh no! we couldn't get the dogs!</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <div>
          {dogs !== undefined &&
            dogs?.map((dog) => (
              <Card
                key={dog.id}
                id={dog.id}
                avatar={dog.image.url}
                title={dog.name}
                description={dog.description}
                buttonText="See more"
                buttonVariant="outline"
              />
            ))}
        </div>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Dogs;
