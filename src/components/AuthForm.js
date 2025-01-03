// src/components/AuthForm.js
import React, { useState } from 'react';
import '../App.css';
function AuthForm() {
    // État pour stocker les valeurs du formulaire et la liste des utilisateurs
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState([]);

    // Question 1 : Affichage du formulaire d'authentification
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) { // Vérifie que les champs ne sont pas vides
            // Question 2 : Ajouter un utilisateur à la liste lors de la soumission du formulaire
            setUsers([...users, { username, id: Date.now() }]); // Ajoute un utilisateur avec un ID unique
            setUsername(''); // Réinitialise le champ username
            setPassword(''); // Réinitialise le champ password
        }
    };

    // Question 3 : Supprimer un utilisateur de la liste
    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div>
            <h2>Authentication Form</h2>
            
            {/* Question 1 : Formulaire d'authentification */}
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>

            {/* Question 2 et 3 : Liste des utilisateurs avec bouton de suppression */}
            <h3>List of Users</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.username}
                        {/* Bouton de suppression de l'utilisateur */}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AuthForm;
