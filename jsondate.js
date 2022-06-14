const dt = new Date();

let d = dt.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

console.log(d);
