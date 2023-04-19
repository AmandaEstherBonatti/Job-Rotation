const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const total = sp + rj + mg + es + outros;

const spPercentual = (sp / total) * 100;
const rjPercentual = (rj / total) * 100;
const mgPercentual = (mg / total) * 100;
const esPercentual = (es / total) * 100;
const outrosPercentual = (outros / total) * 100;

console.log(`Percentual de representação de cada estado:
SP: ${spPercentual}%
RJ: ${rjPercentual}%
MG: ${mgPercentual}%
ES: ${esPercentual}%
Outros: ${outrosPercentual}%`);