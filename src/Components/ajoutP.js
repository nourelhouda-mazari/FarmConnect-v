import React, { useState } from 'react';
import '../Styles/AddProductForm.css';
import Navigation from '../Components/Navigation';
import Row from 'react-bootstrap/Row';

function AddProductForm() {
  const [category, setCategory] = useState('');
  const [qte, setQte] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [lieu, setLieu] = useState('');
  const [NP, setNP] = useState('');
  const [Exp, setExp] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      category,
      qte,
      prix,
      description,
      lieu,
    });
  };

  return (
    <div className="add-product-form-container">
        <div>
      <Row>
        <Navigation />
      </Row>
      </div>
      <h2>Ajouter un Poste </h2>
      <form onSubmit={handleSubmit}>
        <label>
          Catégorie :
          <select value={category} onChange={handleCategoryChange}>
            <option value="emploi">Demande Emploi</option>
            <option value="equipement">Équipement</option>
            <option value="fruits_legumes">Fruits/Légumes</option>
          </select>
        </label>
        {category === 'emploi' && (
            <>
            <label>
                Nom et prénom :
                <input type="text" value={NP} onChange={(e) => setNP(e.target.value)} />
            </label>
            <label>
                Description :
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <label>
                Experience :
                <input type="text" value={Exp} onChange={(e) => setExp(e.target.value)} />
            </label>
            </>
        )}
        {category === 'fruits_legumes' && (
          <>
            <label>
          Description :
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Lieu :
          <input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
        </label>
            <label>
              Quantité :
              <input type="text" value={qte} onChange={(e) => setQte(e.target.value)} />
            </label>
            <label>
              Prix :
              <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
            </label>
          </>
        )}
        
        {category === 'equipement' && (
          <label>
            <label>
          Description :
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Lieu :
          <input type="text" value={lieu} onChange={(e) => setLieu(e.target.value)} />
        </label>
            Prix par jour (location) :
            <input type="text" value={prix} onChange={(e) => setPrix(e.target.value)} />
          </label>
        )}
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default AddProductForm;
