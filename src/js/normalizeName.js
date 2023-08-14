/**
 * This exist to normalize names, to remove diacretic characters, as API don't work with those
 */

export default function normalizeName(name = '') {

    let normalizedName = name;
    normalizedName.replace(/\u0142/g, "l"); //removal polish ł character

    normalizedName = normalizedName.normalize('NFKD').replace(/[^\w]/g, '');

    return normalizedName;
}