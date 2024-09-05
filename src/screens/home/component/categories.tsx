import React from "react";
import { DefaultTitleWithLink } from "../../../components/headings";
import { DefaultGrid, DefaultSection } from "../../../components/Views";
import CategoryItem from "../../../components/categories";
import {
  categoryImage1,
  categoryImage2,
  categoryImage7,
  categoryImage8,
} from "../../../importAllImages";

const Categories = () => {
  return (
    <DefaultSection>
      <DefaultTitleWithLink title=" Categories" />
      <DefaultGrid styles={{ justifyContent: "space-between" }}>
        <CategoryItem
          source={categoryImage1}
          bgcolor="hsla(357, 33%, 86%, 1)"
          name=" Dentistry"
        />
        <CategoryItem
          source={categoryImage2}
          bgcolor="hsla(134, 24%, 80%, 1)"
          name=" Cardiolo.."
        />
        <CategoryItem
          source={categoryImage1}
          bgcolor="hsla(24, 49%, 80%, 1)"
          name="Pulmono.."
        />
        <CategoryItem
          source={categoryImage1}
          bgcolor="hsla(255, 21%, 70%, 1)"
          name="General"
        />
        <CategoryItem
          source={categoryImage1}
          bgcolor="hsla(186, 50%, 40%, 1)"
          name=" Neurolo.."
        />
        <CategoryItem
          source={categoryImage1}
          bgcolor="hsla(258, 65%, 58%, 1)"
          name="Gastroen.."
        />
        <CategoryItem
          source={categoryImage7}
          bgcolor="hsla(1, 18%, 80%, 1)"
          name="Laborato.."
        />
        <CategoryItem
          source={categoryImage8}
          bgcolor="hsla(191, 38%, 76%, 1))"
          name=" Vaccinat.."
        />
      </DefaultGrid>
    </DefaultSection>
  );
};

export default Categories;
