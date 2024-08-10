import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useFetchDogs from "../../hooks/useFetchDogs";
import { Grid, Dogs, DogsImage, DogsName, DogsBredFor } from "./styles";

const Home = () => {
  const { dogs, loading, error } = useFetchDogs();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(search.toLowerCase())
  );

  const RenderDogs = () => (
    <Fragment>
      <header>
        <div>
          <h1>Buscador de perros</h1>

          <form>
            <input
              type="text"
              value={search}
              onChange={handleChange}
              placeholder="Buscar por raza/perro"
            />
          </form>
        </div>
      </header>

      <Grid>
        {filteredDogs.map((dog) => {
          const { id, name, bred_for, reference_image_id } = dog;

          return (
            <Link to={`/${name}`} key={id}>
              <Dogs>
                <DogsImage
                  src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
                  alt={name}
                />
                <DogsName>{name}</DogsName>
                <DogsBredFor>Bred for: {bred_for} </DogsBredFor>
              </Dogs>
            </Link>
          );
        })}
      </Grid>
    </Fragment>
  );

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar</p>;
    return <RenderDogs />;
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default Home;
