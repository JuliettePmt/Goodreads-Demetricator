const path = require("path");

module.exports = {
    entry: "./content.js", // Le fichier principal où tout commence
    output: {
        filename: "content.bundle.js", // Le fichier final combiné
        path: path.resolve(__dirname, "dist"), // Où sera placé le fichier final
    },
    mode: "production" // Optimise le fichier final pour Chrome
};
