import { html } from "../../../node_modules/lit-html/lit-html.js"; 

function getNearestAspectRatio(width, height) {
  const standardRatios = [
    { ratio: "1:1", value: 1 },
    { ratio: "4:3", value: 4 / 3 },
    { ratio: "3:2", value: 3 / 2 },
    { ratio: "16:9", value: 16 / 9 },
    { ratio: "21:9", value: 21 / 9 },
    { ratio: "9:16", value: 9 / 16 },
    { ratio: "3:4", value: 3 / 4 },
    { ratio: "2:3", value: 2 / 3 },
    { ratio: "9:21", value: 9 / 21 },
    { ratio: "1.85:1", value: 1.85 },
    { ratio: "2.39:1", value: 2.39 },
    { ratio: "5:4", value: 5 / 4 },
    { ratio: "16:10", value: 16 / 10 },
    { ratio: "2.76:1", value: 2.76 },
    { ratio: "1.43:1", value: 1.43 },
    { ratio: "2.35:1", value: 2.35 },
    { ratio: "2.20:1", value: 2.20 },
    { ratio: "2.55:1", value: 2.55 },
    { ratio: "2.75:1", value: 2.75 },
    { ratio: "2.66:1", value: 2.66 },
    { ratio: "2.59:1", value: 2.59 },
    { ratio: "2.55:1", value: 2.55 },
    { ratio: "2.39:1", value: 2.39 },
    { ratio: "2.35:1", value: 2.35 },
    { ratio: "2.20:1", value: 2.20 },
    { ratio: "2.00:1", value: 2.00 },
    { ratio: "1.85:1", value: 1.85 },
    { ratio: "1.75:1", value: 1.75 },
    { ratio: "1.66:1", value: 1.66 },
    { ratio: "1.60:1", value: 1.60 },
  ];

  const actualRatio = width / height;
  let nearest = standardRatios[0];

  standardRatios.forEach((standard) => {
    if (Math.abs(standard.value - actualRatio) < Math.abs(nearest.value - actualRatio)) {
      nearest = standard;
    }
  });

  return nearest.ratio;
}

export const FeaturedImage = (detail) => {
  const { data, title } = detail;
  if (data && data.src) {
    const img = new Image();
    img.src = data.src;
    img.onload = () => {
      const w = Number(img.width);
      const h = Number(img.height);
      const aspectRatio = getNearestAspectRatio(img.width, img.height);
      document.getElementById('theImageDimensionz').innerHTML = `${w} x ${h} (Aspect Ratio: ${aspectRatio})`;
    };
  } else {
    console.error('Invalid image data');
  }
  return html`
        <h2>${detail.title}</h2>
        <img src=${data.src}></img>
        <p id="theImageDimensionz"></p>
    `;
};