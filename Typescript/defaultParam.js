function weclomeUser(fname, city) {
    if (fname === void 0) { fname = 'sachin'; }
    if (city === void 0) { city = 'Mysore'; }
    console.log("welcome $(fname)");
    console.log("Are you from $(city)");
}
weclomeUser();
