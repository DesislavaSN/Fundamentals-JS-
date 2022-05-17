//  1.Match Full Name

function matchNames(text) {
  let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
  let res = text.match(pattern);
  console.log(res.join(" "));
}

matchNames(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov"
);
