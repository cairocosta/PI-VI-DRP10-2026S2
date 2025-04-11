import sharp from "sharp";
import path from "path";

const inputPath = path.join(__dirname, "../assets/services-bg.jpeg");
const outputPath = path.join(__dirname, "../assets/services-bg.webp");

sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then((info) => {
    console.log("Imagem convertida com sucesso:", info);
  })
  .catch((err) => {
    console.error("Erro ao converter imagem:", err);
  });
