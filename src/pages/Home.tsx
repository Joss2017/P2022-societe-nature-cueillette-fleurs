import SideBar from "../components/SideBar";
import { useState, useEffect } from "react";
import axios from "axios";

export interface Plante {
  id: string;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}

/**
 * Ici les constantes ou variables dont la modification de valeur ne provoquera pas directement de re-render
 */
let listePlantes: Plante[] = [];
let checkedCateg: string[] = [];

const Home = () => {
  const [listPlantDisplayed, setListPlantDisplayed] = useState<Plante[]>([
    ...listePlantes,
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/plants")
      .then((response) => {
        listePlantes = response.data;
        setListPlantDisplayed(listePlantes);
      })
      .catch((error) => {
        console.log(error);
      });
    //  console.log(listPlantDisplayed);
  }, []);
  const handleCheckCategories = (mesCategoriesChecked: string[]) => {
    console.log("categories checked", mesCategoriesChecked);
    /**
     * Filtrer nos données ici
     */

    let resultFilteredPlants;
    checkedCateg = [...mesCategoriesChecked];

    if (checkedCateg.length > 0) {
      resultFilteredPlants = listePlantes.filter((x) =>
        checkedCateg.includes(x.category)
      );
    } else {
      resultFilteredPlants = [...listePlantes];
    }

    setListPlantDisplayed(resultFilteredPlants); // mettre à jour l'affichage de notre composant en fonction de la valeur de result
  };

  return (
    <div className="d-flex align-items-stretch">
      <SideBar
        listElementPlant={listePlantes}
        onChangeCategoriesCheck={handleCheckCategories}
      />
      <div className="container-fluid custom-main">
        {listPlantDisplayed.map((plante, i) => (
          <li key={i}>
            {plante.name} - {plante.category} - 💵 {plante.unitprice_ati}€ - ⭐
            {plante.rating}
          </li>
        ))}{" "}
      </div>
    </div>
  );
};
export default Home;
