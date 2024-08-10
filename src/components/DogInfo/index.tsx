import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import useFetchDogInfo from "../../hooks/useFechDogInfo";
import { Content, DogImage, DogName, DogData } from "./styles";

const DogInfo = () => {
  const { dog, loading, error } = useFetchDogInfo();

  const RenderDogInfo = () => (
    <section>
      {dog.map((item) => {
        const {
          id,
          name,
          reference_image_id,
          description,
          bred_for,
          height,
          weight,
          breed_group,
          life_span,
          temperament,
        } = item;

        return (
          <Content key={id}>
            <article>
              <DogImage
                src={`https://cdn2.thedogapi.com/images/${reference_image_id}.jpg`}
                alt={name}
              />
            </article>

            <article>
              <DogName>{name}</DogName>
              {description && <p>{description}</p>}

              <DogData>
                <li>
                  <span>Bred For:</span> {bred_for}
                </li>
                <li>
                  <span>Height:</span> {height.metric} cm
                </li>
                <li>
                  <span>Weight:</span> {weight.metric} kgs
                </li>
                <li>
                  <span>Breed Group:</span> {breed_group}
                </li>
                <li>
                  <span>Lifespan:</span> {life_span}
                </li>
                <li>
                  <span>Temperament:</span> {temperament}
                </li>
              </DogData>
              <button className="back-button">
                <Link to="/">&larr; Back</Link>
              </button>
            </article>
          </Content>
        );
      })}
    </section>
  );

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error al cargar</p>;
    return <RenderDogInfo />;
  };

  return <Fragment>{renderContent()}</Fragment>;
};

export default DogInfo;
