function main() {
    const x = "Hello world!";
    try {
      const result = run(x);
    }
    catch(e) {
      console.log("Nazwa błędu: ", e.name);
      console.log("Wiadomość: ", e.message);
    }
    console.log(x.lowerCase());
}

if(typeof(x) == 'string'){
    throw new Error(200, "błąd");
}

window.onload = main;
window.onerror = function(msg, url, line) {
    console.log("Wiadomość: ", msg);
    console.log("URL: ", url);
    console.log("Linia: ", line);
};
