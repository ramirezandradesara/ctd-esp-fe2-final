export function firstLetterToUppercase(sentence: string) {
    return sentence
        .split(" ")
        .map((str) => {
            return str.charAt(0).toUpperCase() + str.slice(1);
        })
        .join(" ");
};

