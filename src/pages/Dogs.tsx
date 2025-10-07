import { Suspense, use } from "react";
import type { Dog as DogType } from "../api/fetch";
import Card from "../components/Card";
import { ErrorBoundary } from "react-error-boundary";
import { getDogs } from "../api/resources";
import Wrapper from "../components/layout/Wrapper";

const DogList = () => {
  const dogs: DogType[] = use(getDogs());

  return (
    <Wrapper>
      <div className="grid md:grid-cols-[1fr_1fr] grid-cols-1 gap-3">
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
    </Wrapper>
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
