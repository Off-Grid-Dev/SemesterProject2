import { use, useEffect, useState } from "react";
import { fetchDogs } from "../api/fetch";
import type { Dog } from "../api/fetch";
import Card from "../components/Card";

const Dogs = () => {
  const [dogsArr, setDogsArr] = useState<Dog[] | undefined>(undefined);

  useEffect(() => {
    const dogs = use(fetchDogs());

    setDogsArr(dogs);
  }, []);

  return (
    <div>
      {dogsArr !== undefined &&
        dogsArr?.map((dog) => (
          <Card
            id={dog.id}
            avatar={dog.image.url}
            title={dog.name}
            description={dog.description}
            buttonText="See more"
            buttonVariant="outline"
          />
        ))}
      {/* <Details /> */}
    </div>
  );
};

export default Dogs;
