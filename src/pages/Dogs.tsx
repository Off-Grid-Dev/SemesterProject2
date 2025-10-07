import { Suspense, use } from "react";
import type { Dog as DogType } from "../api/fetch";
import Card from "../components/Card";
import { ErrorBoundary } from "react-error-boundary";
import { getDogs } from "../api/resources";

const DogList = () => {
  const dogs: DogType[] = use(getDogs());

  return (
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
  );
};

const Dogs = () => {
  return (
    <ErrorBoundary fallback={<p>oh no! we couldn't get the dogs!</p>}>
      <Suspense fallback={<p>loading...</p>}>
        <DogList />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Dogs;
